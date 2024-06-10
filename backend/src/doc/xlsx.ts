import xlsx from 'xlsx';
import {CustomError} from "../config";
const numbersInEnglish = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"
];

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

const addSuffixToDuplicates = (names: string[]): string[] => {
    const nameCount = new Map<string, number>();
    const result: string[] = [];
    const numbersInEnglish = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine"];

    names.forEach(name => {
        // Contar ocurrencias del nombre
        const count = nameCount.get(name) || 0;
        nameCount.set(name, count + 1);

        // Si es la primera vez, no modificar el nombre
        if (count === 0) {
            result.push(name);
        } else {
            // Si ya existe, agregar un sufijo
            result.push(`${name}_${numbersInEnglish[count]}`);
        }
    });

    return result;
};

const digitToWord = (digit: string): string => {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const index = parseInt(digit, 10);
    return words[index] || "";
};
// Utilidad para limpiar nombres de columnas
const f_cleanColumnName = (name:string) => {
    const text = removeAccents(name);
    const replacedNumbers = text.replace(/\d/g, match => digitToWord(match));
    const normaliz = replacedNumbers.
            replace(/\s+/g, '').
            replace(/[^\w]/g, '').
            replace(/\d+/g, '').
            toLowerCase(); ;
    return normaliz;
}

/**
 * Elimina acentos y otros caracteres diacríticos de una cadena de texto.
 * @param text El texto del cual eliminar los acentos y diacríticos.
 * @returns El texto sin acentos ni diacríticos.
 */
const removeAccents = (text: string): string => {
    return text
        .normalize('NFD')  // Descompone la cadena en sus caracteres compuestos (base + diacríticos)
        .replace(/[\u0300-\u036f]/g, '')  // Elimina los caracteres diacríticos
        .normalize('NFC');  // Recompone los caracteres a su forma normal compuesta
};

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

