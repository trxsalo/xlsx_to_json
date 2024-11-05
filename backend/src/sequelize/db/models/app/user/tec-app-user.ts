import {DataTypes} from 'sequelize';
import {sequelize} from '@Sequelize/squelize-config';
import {Envs} from "@Envs/env";

const table_name = Envs.PREFIX_DATABASE_TST+'users'
export const tecAppUser = sequelize.define(
    'AppUsers',
    {
        id_int:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        name_full:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name_full:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        pais:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        status:{
            type: DataTypes.CHAR,
            allowNull: false,
            defaultValue: 'AC',
        },
        email:{
            type: DataTypes.STRING,
            validate: {
                isEmail:true
            },
        },
        rol:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        password_hash:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tableName: table_name,
        timestamps: true,
        schema: Envs.SCHEMA_DATABASE_TST,
        indexes: [
            {
                unique: true,
                fields: ['id_int'],
            },
            {
                unique: true,
                fields: ['id'],
            },
            {
                unique: false,
                fields: ['status'],
            },
        ]
    },
);