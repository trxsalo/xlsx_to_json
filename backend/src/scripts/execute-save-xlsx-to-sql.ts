import {f_insert_new_data} from "../data";
import {CErrorResponse} from "../config";

export const executeSaveXlsxToSql  = async ()=>{
    try {
        /*const ventas = await f_insert_new_data({
            tableName:'ventas_promo',
            sheetName:'Shop Sales Query New1',
            filename:'1622'});*/
        /* const ventas = await f_insert_new_data({
             tableName:'ventas_promo_new',
             sheetName:'Shop Purchase Query New',
             filename:'Shop2'});*/

        const ventas = await f_insert_new_data({
            tableName:'dail_and_model',
            sheetName:'SO DATA',
            filename:'ModelSO1'});

        console.log(ventas);

    }catch(err){
        CErrorResponse.handleError(err);
    }
}


