import {DataTypes} from 'sequelize';
import {sequelize} from '@Sequelize/squelize-config';
import {Envs} from "@Envs/env";

const table_name = Envs.PREFIX_DATABASE_TST+'city_promotores'
export const tecAppPromotores = sequelize.define(
    'CityPromotores',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        promotor_name: {
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
            allowNull: true,
        },
        mercado:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        circuito:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        promotor_status:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        tableName: table_name,
        timestamps: true,
        schema: Envs.SCHEMA_DATABASE_TST
    },
);