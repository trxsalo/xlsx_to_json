import {f_read_json} from "../analytics";
import {f_vl} from "../config";


export const exuteAnalitys = async ()=>{
    try{
        const num = 3;
        const data = await f_read_json('promo4_y_promo_3_se_repite_el_camon_30');
        let imei = [];
        imei.push(data[num]['id_tienda']);
        imei.push(f_vl(data[num]['ime_1_2'],'').split(','));
        imei.push(f_vl(data[num]['ime3'],'').split(','));
        imei.push(f_vl(data[num]['ime4'],'').split(','));
        console.log(imei);
    }catch(e){

    }
}
