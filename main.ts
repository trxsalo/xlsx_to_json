import {f_sqlexute, CErrorResponse, envs} from './src/config';
import {createTableQuery,insertDataToTable} from './src/data';
import {file_xlsx_to_json} from './src/doc';


const main =  async ()=>{
    try {

        const table  = await f_sqlexute(createTableQuery);
        console.table(table);
        const [error, data] = file_xlsx_to_json('ModelSO','SO DATA');

        const del = await f_sqlexute("delete from tec_tst.tst_ventas_so;");
        console.log(del);
        if(error) throw error;
        // @ts-ignore
        console.log(data!.length);
        // @ts-ignore
        const result =   await insertDataToTable(data);
        console.log(result);

        const commit = await f_sqlexute('commit');

    }catch(err){
        CErrorResponse.handleError(err);
    }

}

main();

