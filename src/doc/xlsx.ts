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


