import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";


export const ReviewSubdetail = sequelize.define('ReviewSubdetail', {
    RESULT_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_VALUE: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_TEXT: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    RESULT_COMMENT: {
        type: DataTypes.STRING(4000),
        allowNull: true,
    },
    RESULT_AMOUNT: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_WEIGHT: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    RESULT_CODE: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    RESULT_ALT_CODE: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    RESULT_TAG: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    SUBDETAIL_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    SUBDETAIL_BATCH: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'REVIEW_SUBDETAIL',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_QUESTION_RESULT_DETAIL_1',
            fields: ['RESULT_ID'],
        },
        {
            name: 'I_DIG_QUESTION_RESULT_DETAIL_3',
            fields: ['QUESTION_ID'],
        },
        {
            name: 'I_DIG_QUESTION_RESULT_DETAIL_2',
            fields: ['REVIEW_ID'],
        },
    ],
});