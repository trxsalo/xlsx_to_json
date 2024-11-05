
import {executeSaveXlsxToSql,executeSaveJsonToSql} from './src/scripts';
import {dbPool} from "./src/config";
import {function_get_so_activacion_sql} from "./src/so-activation/transforme-data";
import {sync_models} from "./src/sequelize/db/sync-models";


const main = async () => {

    /*await executeSaveJsonToSql();*/
    await executeSaveXlsxToSql();
    /*await sync_models();*/

}


main();