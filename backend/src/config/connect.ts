import { Pool, ConnectionConfig } from 'pg';
import { envs } from './env';

const LOCAL_CONFIG: ConnectionConfig = {
    host: envs.HOST,
    port: envs.PORT,
    user: envs.USER,
    password: envs.PASS,
    database: envs.DATABASE,
};

const CLOUD_CONFIG: ConnectionConfig = {
    /*host: envs.HOST_VERSEL_TST,
    user: envs.USER_VERSEL_TST,
    password: envs.PASS_VERSEL_TST,
    database: envs.DATABASE_VERSEL_TST,*/
   connectionString: envs.URL_VERSEL
};

interface Prefix {
    schema: string;
    prefix: string;
}

const SCHEMA_TST: Prefix = {
    schema: envs.SCHEMA_TST,
    prefix: envs.PREFIX_TST,
};

const SCHEMA_APP: Prefix = {
    schema: envs.SCHEMA_APP,
    prefix: envs.PREFIX_APP,
};

/*const prefix: Prefix = envs.IS_CLOUD ? SCHEMA_APP : SCHEMA_TST;*/
const prefix: Prefix = SCHEMA_TST;
const connectionConfig: ConnectionConfig = envs.IS_CLOUD ? CLOUD_CONFIG : LOCAL_CONFIG;

export const dbPool = new Pool(connectionConfig);

export { prefix };
