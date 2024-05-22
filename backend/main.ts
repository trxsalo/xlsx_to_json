import {f_insert_new_data} from './src/data';
import {CErrorResponse} from "./src/config";


const main  = async ()=>{
    try {
        const ventas = await f_insert_new_data({
            tableName:'ventas_promo',
            sheetName:'Shop Sales Query New1',
            filename:'1622'});
    }catch(err){
        CErrorResponse.handleError(err);
    }
}

main();

