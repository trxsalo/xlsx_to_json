import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const Top200General = sequelize.define('Top200General', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    departamento: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    circuito: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shop_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    promotor_nombre: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    totalventas: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST + 'top_200_general',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
});