import {CErrorResponse, f_sqlexute,f_generateCreateTableQuery,f_insertDataDynamicallyToTable,prefix} from "../config";
import {file_xlsx_to_json,f_getFormattedKeys} from "../doc";
//@result => tec_tst.tst_

interface InsertDataParams {
    tableName: string;
    filename: string;
    sheetName: string;
    query_execute:boolean
}
export const f_insert_new_data =  async ({
                                             tableName,
                                             filename,
                                             sheetName,
                                             query_execute
                                         }:InsertDataParams)=>{
    try {
        console.log(!query_execute ? 'No se insertara en la DB '+sheetName: 'Se insertara en la DB '+sheetName);
        const base_name = `${prefix.schema}.${prefix.prefix}`;
        //se crea la tabla
        const name_tabla = `${base_name+tableName}`;
        //obtenemos los datos del xlsx
        const [error, data] = file_xlsx_to_json(filename,sheetName);
        if(error) throw error;
        // @ts-ignore
        const [err,keys] = f_getFormattedKeys(data);
        if(err) throw err;
        // @ts-ignore
        const table = f_generateCreateTableQuery(keys,name_tabla);

        if(query_execute) await f_sqlexute(table);
        //Elininammos la data de esa tabla
        if(query_execute) await f_sqlexute(`delete from ${name_tabla};`);
        // @ts-ignore
        const [e,resul] =   await f_insertDataDynamicallyToTable(name_tabla,keys,data,query_execute);
        if(e) throw error;


        return resul;

    }catch(err){
        CErrorResponse.handleError(err);
    }

}
