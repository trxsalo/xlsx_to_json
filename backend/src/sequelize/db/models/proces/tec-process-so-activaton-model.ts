import {DataTypes} from "sequelize";
import {sequelize} from "@Sequelize/squelize-config";
import {Envs} from "@Envs/env";

export const DailyActivationModelNew = sequelize.define('DailyActivationModelNew', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, // Si `id` debe ser auto-incremental, habilita esta línea
    },
    day: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    month: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mes: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mesn: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    semana: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    series: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    code: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    capacity: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    selloutactivation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST + 'daily_activation_model_new',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'idx_year',
            fields: ['year'],
        },
        {
            name: 'idx_month',
            fields: ['month'],
        },
        {
            name: 'idx_day',
            fields: ['day'],
        },
        {
            name: 'idx_year_month_day',
            fields: ['year', 'month', 'day'],
        },
        {
            name: 'idx_month_day',
            fields: ['month', 'day'],
        },
        {
            name: 'idx_year_month',
            fields: ['year', 'month'],
        },
    ],
});