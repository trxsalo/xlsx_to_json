import {CErrorResponse, f_sqlexute,f_generateCreateTableQuery,f_insertDataDynamicallyToTable,prefix} from "../config";
import {file_xlsx_to_json,f_getFormattedKeys} from "../doc";
//@result => tec_tst.tst_

interface InsertDataParams {
    tableName: string;
    filename: string;
    sheetName: string;
}
export const f_insert_new_data =  async ({
                                             tableName,
                                             filename,
                                             sheetName
                                         }:InsertDataParams)=>{
    try {
        const base_name = `${prefix.shema}.${prefix.prefix}`;
        //se crea la tabla
        const name_tabla = `${base_name+tableName}`;
        //obtenemos los datos del xlsx
        const [error, data] = file_xlsx_to_json(filename,sheetName);
        if(error) throw error;
        // @ts-ignore
        const [err,keys] = f_getFormattedKeys(data);
        if(err) throw error;
        // @ts-ignore
        const table =f_generateCreateTableQuery(data,name_tabla);
        //Elininammos la data de esa tabla
        const del = await f_sqlexute("delete from ${name_tabla};");
        // @ts-ignore
        const [e,resul] =   await f_insertDataDynamicallyToTable(name_tabla,keys,data);
        if(e) throw error;
        const commit = await f_sqlexute('commit');

    }catch(err){
        CErrorResponse.handleError(err);
    }

}