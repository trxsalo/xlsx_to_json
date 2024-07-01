
import {CErrorResponse} from "../config";
import {f_insert_new_data, f_insert_new_data_json} from "../data";


export const executeSaveXlsxToSql  = async ()=>{
    try {
        const result = await Promise.all([
            /*f_insert_new_data({
                tableName:'abastecimineto_so',
                filename:'bandeo-activados',
                sheetName:'Hoja4',
                query_execute:false
            }), */

            f_insert_new_data({
                tableName:'so_junio',
                filename:'bandeo-activados',
                sheetName:'Hoja1',
                query_execute:true
            })
        ]);
        console.log(result && 'Guardado correctamente');
    }catch(err){
        CErrorResponse.handleError(err);
    }
}


