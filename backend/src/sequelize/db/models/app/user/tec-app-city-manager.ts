import {DataTypes, Sequelize} from 'sequelize';
import {sequelize} from '@Sequelize/squelize-config';
import {Envs} from "@Envs/env";
import {tecAppUser} from './tec-app-user'


const table_name = Envs.PREFIX_DATABASE_TST+'city_manager'
export const tecAppCityManager = sequelize.define(
    'CityManager',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code_manager:{
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: tecAppUser,
                key: 'id',
            },
        },
        city_manager: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        departamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cobertura: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manager_status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        tableName: table_name,
        timestamps: true,
        schema: Envs.SCHEMA_DATABASE_TST,
        indexes: [
            {
                unique: true,
                fields: ['id'],
            },
            {
                unique: true,
                fields: ['code_manager'],
            },
            {
                unique: false,
                fields: ['manager_status'],
            },
        ]
    },
);




