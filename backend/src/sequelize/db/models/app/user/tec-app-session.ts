import {DataTypes} from 'sequelize';
import {sequelize} from '@Sequelize/squelize-config';
import {Envs} from "@Envs/env";

const table_name = Envs.PREFIX_DATABASE_TST+'session'
export const tecAppSession = sequelize.define(
    'AppSession',
    {
        session_id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        start_time:{
          type: DataTypes.DATE,
          allowNull: false,
        },
        last_access:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_code:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type: DataTypes.CHAR,
        },
        ipaddress:{
          type: DataTypes.STRING,
          allowNull: false,
            validate:{
                isIP:true
            }
        },
        urlfwd:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                isURL:true
            }
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        session_cache_reloaded:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        session_cache_command:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        session_cache_version:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        session_badge:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        session_flags:{
            type: DataTypes.STRING
        }
    },
    {
        tableName: table_name,
        timestamps: true,
        schema: Envs.SCHEMA_DATABASE_TST,
        indexes: [
            {
                unique: true,
                fields: ['session_id'],
            },
            {
                unique: true,
                fields: ['session_id'],
            },
        ]
    },
);