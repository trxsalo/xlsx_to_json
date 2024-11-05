import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const CircuitosPdv = sequelize.define('CircuitosPdv', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    georreferencia: {
        type: DataTypes.GEOMETRY('POLYGON'),
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST + 'circuitos_pdv',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
});