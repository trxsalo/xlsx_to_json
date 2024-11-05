import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";


export const ReviewDetail = sequelize.define('ReviewDetail', {
    REVIEW_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    RESULT_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    QUESTION_ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    QUESTIONNAIRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_POINT: {
        type: DataTypes.DECIMAL(10),
        allowNull: true,
    },
    REVIEW_VALUE: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    SECOND_VALUE: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    LATITUDE: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    LONGITUDE: {
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    THIRD_VALUE: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    DETAIL_CODE: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    DETAIL_ALT_CODE: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    DETAIL_TAG: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'REVIEW_DETAIL',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_REVIEW_DETAIL_2',
            fields: ['REVIEW_ID'],
        },
        {
            name: 'I_DIG_REVIEW_DETAIL_3',
            fields: ['QUESTION_ID'],
        },
        {
            name: 'I_DIG_REVIEW_DETAIL_4',
            fields: ['QUESTIONNAIRE_ID'],
        },
        {
            name: 'I_DIG_REVIEW_DETAIL_5',
            fields: ['RESULT_ID'],
        },
    ],
});