
import {CErrorResponse} from "../config";
import {f_insert_new_data_json} from "../data";


export const executeSaveJsonToSql  = async ()=>{
    try {
        const result = await Promise.all([
            f_insert_new_data_json({
                name_tabla:'daily_activation_model_new',
                name_json:"tst_daily_activation_model_new",
                query_execute:false}),

        ]);

        console.log(result)
    }catch(err){
        CErrorResponse.handleError(err);
    }
}


