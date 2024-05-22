
import {dbPool as db} from './connect';
import {QueryResult} from "pg";

export const f_sqlexute = async (query: string, values?: any[]) =>{
    const conect  = await db.connect();
    const res:QueryResult = await conect.query(query,values);
    await conect.query('commit;');
    await conect.release();
    return res;
}