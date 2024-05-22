import {Pool,ConnectionConfig,Client} from 'pg';
import {envs} from './env'

const config:ConnectionConfig = {
    host:envs.HOST,
    port:envs.PORT,
    user:envs.USER,
    password:envs.PASS,
    database:envs.DATABASE,
    connectionTimeoutMillis: 2000,
};

export const prefix: { shema: string, prefix: string } ={
  shema:'tec_tst',
  prefix:'tst_'
};

export const dbPool = new Pool(config);
export const dbClient = new Client(config);