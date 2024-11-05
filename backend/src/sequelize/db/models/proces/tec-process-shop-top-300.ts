import {DataTypes} from "sequelize";
import {sequelize} from "@Sequelize/squelize-config";
import {Envs} from "@Envs/env";

export const Top300ModelGamaAlta = sequelize.define(
    'Top300ModelGamaAlta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shop_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shop_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    departamentro: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    circuito: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mercado: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    promotor_responsable: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopgrade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    total_gama_alta: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    weeken: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST + 'top_300_model_gama_alta',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
});