import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const ReviewSummary = sequelize.define('ReviewSummary', {
    REVIEW_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    REVIEW_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    REVIEW_DATETIME: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    QUESTIONNAIRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_REGUSER: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    RESULT_ID: {
        type: DataTypes.INTEGER,
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
    },
    RESULT_VALUE: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_LATITUDE: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: true,
    },
    REVIEW_LONGITUDE: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: true,
    },
    REVIEW_STATUS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 11003,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'REVIEW_SUMMARY',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_REVIEW_SUMMARY_1',
            fields: ['REVIEW_ID'],
        },
    ],
});