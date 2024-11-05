import { Sequelize } from'sequelize';
import {envs as Envs} from "@Envs/env";

const getSequelizeInstance = () => {
    const connectionString = Envs.PRODUCTION ? Envs.POSGRES_SQL_VERSEL : Envs.POSGRES_URL_LOCAL;
    return new Sequelize(connectionString,{
        dialect: 'postgres',
        logging: false,
    });
}

export const sequelize = getSequelizeInstance();
