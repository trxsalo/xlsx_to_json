import 'dotenv/config';
import {get} from 'env-var';

export const envs = {
    HOST: get('HOST').required().asString(),
    PORT: get('PORT').required().asPortNumber(),
    USER: get('USUARIO').required().asString(),
    PASS: get('PASS').required().asString(),
    DATABASE: get('DATABASE').required().asString(),

    HOST_VERSEL_TST: get('HOST_VERSEL_TST').required().asString(),
    PORT_VERSEL_TST: get('PORT_VERSEL_TST').required().asPortNumber(),
    USER_VERSEL_TST: get('USER_VERSEL_TST').required().asString(),
    PASS_VERSEL_TST: get('PASS_VERSEL_TST').required().asString(),
    DATABASE_VERSEL_TST: get('DATABASE_VERSEL_TST').required().asString(),
    URL_VERSEL: get('POSTGRES_URL').required().asString(),
    URL_VERSEL_TST: get('POSTGRES_URL_TST').required().asString(),

    IS_CLOUD: get('IS_CLOUD').required().asBool(),

    SCHEMA_TST: get('SCHEMA_TST').required().asString(),
    PREFIX_TST: get('PREFIX_TST').required().asString(),

    SCHEMA_APP: get('SCHEMA_APP').required().asString(),
    PREFIX_APP: get('PREFIX_APP').required().asString(),

    PORT_SERVER: get('PORT_SERVER').required().asPortNumber(),
    SCHEMA_DATABASE: get('SCHEMA_DATABASE').required().asString(),
    SCHEMA_DATABASE_TST: get('SCHEMA_DATABASE_TST').required().asString(),
    PREFIX_DATABASE_TST: get('PREFIX_DATABASE_TST').required().asString(),
    JWT_SEMILLA: get('JWT_SEMILLA').required().asString(),
    JWT_REFRESH_SEMILLA: get('JWT_REFRESH_SEMILLA').required().asString(),
    PRODUCTION: get('IS_PRODUCTION').required().asBool(),
    POSGRES_SQL: get('POSGRES_SQL').required().asString(),
    POSGRES_URL_LOCAL: get('POSGRES_URL_LOCAL').required().asString(),
    POSGRES_SQL_VERSEL: get('tec_tst_URL').required().asString(),

}

export const Envs = {
    HOST: get('HOST').required().asString(),
    PORT: get('PORT').required().asPortNumber(),
    USER: get('USUARIO').required().asString(),
    PASS: get('PASS').required().asString(),
    DATABASE: get('DATABASE').required().asString(),

    HOST_VERSEL_TST: get('HOST_VERSEL_TST').required().asString(),
    PORT_VERSEL_TST: get('PORT_VERSEL_TST').required().asPortNumber(),
    USER_VERSEL_TST: get('USER_VERSEL_TST').required().asString(),
    PASS_VERSEL_TST: get('PASS_VERSEL_TST').required().asString(),
    DATABASE_VERSEL_TST: get('DATABASE_VERSEL_TST').required().asString(),
    URL_VERSEL: get('POSTGRES_URL').required().asString(),
    URL_VERSEL_TST: get('POSTGRES_URL_TST').required().asString(),

    IS_CLOUD: get('IS_CLOUD').required().asBool(),

    SCHEMA_TST: get('SCHEMA_TST').required().asString(),
    PREFIX_TST: get('PREFIX_TST').required().asString(),

    SCHEMA_APP: get('SCHEMA_APP').required().asString(),
    PREFIX_APP: get('PREFIX_APP').required().asString(),

    PORT_SERVER: get('PORT_SERVER').required().asPortNumber(),
    SCHEMA_DATABASE: get('SCHEMA_DATABASE').required().asString(),
    SCHEMA_DATABASE_TST: get('SCHEMA_DATABASE_TST').required().asString(),
    PREFIX_DATABASE_TST: get('PREFIX_DATABASE_TST').required().asString(),
    JWT_SEMILLA: get('JWT_SEMILLA').required().asString(),
    JWT_REFRESH_SEMILLA: get('JWT_REFRESH_SEMILLA').required().asString(),
    PRODUCTION: get('IS_PRODUCTION').required().asBool(),
    POSGRES_SQL: get('POSGRES_SQL').required().asString(),
    POSGRES_URL_LOCAL: get('POSGRES_URL_LOCAL').required().asString(),
    POSGRES_SQL_VERSEL: get('tec_tst_URL').required().asString(),

}