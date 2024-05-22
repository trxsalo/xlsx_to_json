import {dbPool as db} from './connect';
import {QueryResult} from "pg";
import {CustomError} from "./CustomError";

export const f_sqlexute = async (query: string, values?: any[]) => {
    const conect = await db.connect();
    const res: QueryResult = await conect.query(query, values);
    await conect.query('commit;');
    await conect.release();
    return res;
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
            CREATE TABLE ${tableName} (
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
export const f_insertDataDynamicallyToTable = async (tableName: string, keys: string[], jsonData: any[]):Promise<[CustomError?, any[]?]> => {
    let results:any[] = [];

    if (jsonData.length === 0) {
        return [new CustomError(400,'No se entregaron datos para insertar')]; // Retorna vacío si no hay datos
    }

    const columnNames = keys.join(', ');
    const placeholders = keys.map((_, index) => `$${index + 1}`).join(', ');

    const insertDataQuery = `
        INSERT INTO ${tableName} (${columnNames}) VALUES (${placeholders});
    `;

    for (const item of jsonData) {
        const values = keys.map(key => item[key]);
        //console.log(values); // Para depuración: muestra los valores que se insertarán
        const res = await f_sqlexute(insertDataQuery, values);
        results.push(res);
    }

    return [undefined,results];
};