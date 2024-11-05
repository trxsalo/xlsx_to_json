
import {CErrorResponse} from "../config";
import {f_insert_new_data, f_insert_new_data_json} from "../data";


export const executeSaveXlsxToSql  = async ()=>{
    try {
        const result = await Promise.all([
            /*f_insert_new_data({
                tableName:'tst_model_new',
                filename:'hoja1',
                sheetName:'Hoja1',
                query_execute:false
            }),*/ /* f_insert_new_data({
                tableName:'items_bodega',
                filename:'items-bodega',
                sheetName:'Hoja1',
                query_execute:false
            }),*/

            f_insert_new_data({
                tableName:'CBB-01',
                filename:'stock-bodegas',
                sheetName:'CBB-01',
                query_execute:false
            }),

            f_insert_new_data({
                tableName:'LPZ-01',
                filename:'stock-bodegas',
                sheetName:'LPZ-01',
                query_execute:false
            }),
            f_insert_new_data({
                tableName:'LPZ-02',
                filename:'stock-bodegas',
                sheetName:'LPZ-02',
                query_execute:false
            }),
            f_insert_new_data({
                tableName:'SCZ-01',
                filename:'stock-bodegas',
                sheetName:'SCZ-01',
                query_execute:false
            }),

        ]);
        console.log(result && 'Guardado correctamente');
    }catch(err){
        CErrorResponse.handleError(err);
    }
}


