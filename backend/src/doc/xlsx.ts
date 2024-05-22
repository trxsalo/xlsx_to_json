import xlsx from 'xlsx';
import {CustomError} from "../config";


export const file_xlsx_to_json = (file:string, hoja:string)=>{
    // Cargar el archivo Excel y la hoja "SO DATA"
    //const filePath = './src/doc/ModelSO.xlsx';
    const filePath = `./src/file/${file}.xlsx`;
    const workbook = xlsx.readFile(filePath);
    const sheetName = `${hoja}`;
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    if(jsonData.length == 0) {
        return [CustomError.FileNotEncontrado(), null];
    }else{
        return [,jsonData];
    }
}

// Utilidad para limpiar nombres de columnas
const f_cleanColumnName = (name:string) => {
    return name.replace(/\s+/g, '').replace(/[^\w]/g, '');
}

// Función que extrae llaves y las formatea

export const f_getFormattedKeys = (data: any[]): [CustomError?, string[]?] => {
    if (data.length === 0) {
        // Retornar un error si el array está vacío
        return [new CustomError(400, 'El arreglo de datos está vacío'), []];
    }

    const firstItem = data[0];
    if (!firstItem) {
        // Retornar un error si el primer elemento es inválido
        return [new CustomError(400, 'No se encontraron datos válidos para extraer llaves'), []];
    }

    const keys = Object.keys(firstItem);
    const formattedKeys = keys.map(key => f_cleanColumnName(key));

    // Retorno sin error, solo las llaves formateadas
    return [undefined, formattedKeys];
}

