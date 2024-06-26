import {f_insert_new_data} from "../data";
import {CErrorResponse} from "../config";
import {f_write_json} from "../analytics";

export const executeSaveXlsxToSql  = async ()=>{
    try {

        const data = await Promise.all([
            /* f_insert_new_data({
                tableName:'User_Management',
                sheetName:'User Management',
                filename:'User_Management'}),*/
            /*f_insert_new_data({
                tableName:'Shop_Management',
                sheetName:'Shop Management',
                filename:'Shop_Management'}),
            f_insert_new_data({
                tableName:'Customer_Management',
                sheetName:'Customer Management',
                filename:'Customer_Management'}),
            f_insert_new_data({
                tableName:'Shop_Purchase_Query_New',
                sheetName:'Shop Purchase Query New',
                filename:'ShopPurchaseQueryNew20240524'}),
            f_insert_new_data({
                tableName:'Dailyand_Model_SO',
                sheetName:'SO DATA',
                filename:'ModelSO1'}),*/
            f_insert_new_data({
                tableName:'Shop_Purchase_Query_all',
                sheetName:'Shop Sales Query New1',
                filename:'2023-2024'}),
        ]);

        const res = await f_write_json(`log-table/2024/result1-${Date.now()}`,data);
        console.log(res);

    }catch(err){
        CErrorResponse.handleError(err);
    }
}


