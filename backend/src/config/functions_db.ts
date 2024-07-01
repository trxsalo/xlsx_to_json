import {dbPool as db} from './connect';
import {QueryResult, DatabaseError} from "pg";
import {CustomError} from "./CustomError";
import fs from "node:fs/promises";
import * as path from "node:path";
import {f_write_string} from "../analytics";

const filePath = path.join(__dirname, 'insertDataQueries.txt');

export const f_sqlexute = async (query: string, values?: any[]) => {
    /*const conect = await db.connect();
    const res: QueryResult = await conect.query(query, values);
    await conect.query('commit;');
    await conect.release();
    return res;*/
    const connect = await db.connect();
    try {
        const res: QueryResult = await connect.query(query, values);
        await connect.query('COMMIT;');
        return res;
    } catch (error) {
        await connect.query('ROLLBACK;');
        //@ts-ignore
        throw new CError(401, err.detail);
    } finally {
        await connect.release();
    }
}

/**
 * Crea una tabla con columnas de las llaves dada
 * por defecto crea de tipo varchar y un id autoincrement
 * @param keys LLAVES
 * @param tableName
 */
export const f_generateCreateTableQuery = (keys: [], tableName: string): string => {
    if (keys.length === 0) {
        throw new CustomError(401, "No se pueden generar columnas para una tabla sin llaves.");
    }
    const columns = keys.map(key => `${key} VARCHAR(255)`).join(', ');
    return `
            CREATE TABLE if not exists ${tableName} (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            ${columns}
            );`;
}

/**
 * Inserta datos dinámicamente en la tabla especificada usando llaves predefinidas.
 * @param tableName El nombre de la tabla donde se insertarán los datos.
 * @param keys Llaves o nombres de las columnas para la inserción de datos.
 * @param jsonData Array de objetos donde cada objeto representa una fila para insertar.
 * @returns Un arreglo con los resultados de cada inserción.
 */
export const f_insertDataDynamicallyToTable = async (tableName: string, keys: string[], jsonData: any[], execute: boolean): Promise<[CustomError?, any[]?]> => {
    let results: any[] = [];
    let query: any;
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    if (jsonData.length === 0) {
        return [new CustomError(400, 'No se entregaron datos para insertar')]; // Retorna vacío si no hay datos
    }

    const columnNames = keys.join(', ');
    let insertDataQuery = `
        INSERT INTO ${tableName} (${columnNames}) VALUES
    `;

    const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');
    for (const item of jsonData) {
        const keyys = Object.keys(jsonData[0]);
        const values = keyys.map(data => item[data] == '' ? null : `${item[data]}`);
        const valores = values.map(e => `'${e}'`).join(',');
        results.push(`(${valores})`);
    }
    insertDataQuery += results.join(',\n') + '; \n commit;';
    if (execute) query = await f_sqlexute(insertDataQuery);
    // Escribe el contenido en un archivo .txt
    const text = await f_write_string(`log-query/${year}/${month}/${tableName}-${Date.now()}`, insertDataQuery)
    console.log(text ? 'Log Query ok' : 'Error log Query');
    return [undefined, query?.rows || ['Save Text']];
};
