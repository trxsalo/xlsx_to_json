import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";


export const QuestionResult = sequelize.define('QuestionResult', {
    RESULT_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    RESULT_NAME: {
        type: DataTypes.STRING(800),
        allowNull: true,
    },
    RESULT_POINT: {
        type: DataTypes.DECIMAL(10),
        allowNull: true,
    },
    RESULT_STATUS: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_CODE: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    RESULT_REGUSER: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_REGDATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    NEXT_QUESTION_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_ORDER: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    RESULT_ACTION: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    RESULT_TAG: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    RESULT_ALT_CODE: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    RESULT_ACTION_PARAMS: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'QUESTION_RESULT',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_QUESTION_RESULT_1',
            fields: ['RESULT_ID'],
            unique: true,
        },
        {
            name: 'I_DIG_QUESTION_RESULT_2',
            fields: ['QUESTION_ID'],
        },
    ],
});