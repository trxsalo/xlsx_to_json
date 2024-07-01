
import {executeSaveXlsxToSql,executeSaveJsonToSql} from './src/scripts';
import {dbPool} from "./src/config";

const main = async () => {

    /*await executeSaveJsonToSql();*/
    await executeSaveXlsxToSql();

 /*   try {
       const connect =  await dbPool.connect();
       dbPool.end();
        console.log("Connected",connect);
    }catch(err) {
        console.log("Error Connected",err);
    }*/
}


main();