import {f_read_json} from "../analytics";
import {f_getFormattedKeys} from "../doc";
import {
    CErrorResponse,
    f_generateCreateTableQuery,
    f_insertDataDynamicallyToTable,
    f_sqlexute,
    prefix
} from "../config";

interface Props {
    name_tabla: string,
    name_json: string,
    query_execute:boolean
}

export async function f_insert_new_data_json({
                                                 name_tabla,
                                                 name_json,
                                                 query_execute
                                             }: Props) {
    try {
        const base_name = `${prefix.schema}.${prefix.prefix}`;
        //se crea la tabla
        name_tabla = `${base_name+name_tabla}`;

        console.log(!query_execute ? 'No se insertara en la DB '+name_json: 'Se insertara en la DB '+name_json);

        const data = await f_read_json(name_json);
        //@ts-ignore
        const newData = data.map(({ id, ...rest }) => rest);

        const [err, keys] = f_getFormattedKeys(newData);
        if (err) throw err;
        // @ts-ignore
        const table = f_generateCreateTableQuery(keys,name_tabla);

        if(query_execute) await f_sqlexute(table);
        //Elininammos la data de esa tabla
        if(query_execute) await f_sqlexute(`delete from ${name_tabla};`);
        // @ts-ignore
        const [e,resul] =   await f_insertDataDynamicallyToTable(name_tabla,keys,data,query_execute);
        if(e) throw e;


        return resul;
    } catch (err) {
        CErrorResponse.handleError(err);
    }
}