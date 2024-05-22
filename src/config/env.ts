import 'dotenv/config';
import {get} from 'env-var';

export const envs = {
    HOST: get('HOST').required().asString(),
    PORT: get('PORT').required().asPortNumber(),
    USER: get('USUARIO').required().asString(),
    PASS: get('PASS').required().asString(),
    DATABASE: get('DATABASE').required().asString(),
}