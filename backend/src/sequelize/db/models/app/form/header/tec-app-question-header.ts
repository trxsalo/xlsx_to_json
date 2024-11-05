import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const QuestionHeader = sequelize.define('QuestionHeader', {
    QUESTIONNAIRE_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    QUESTIONNAIRE_NAME: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    QUESTIONNAIRE_STATUS: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTIONNAIRE_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    QUESTIONNAIRE_REGUSER: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTIONNAIRE_REGDATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    QUESTIONNAIRE_DOMAIN: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: 'TRADE',
    },
    QUESTIONNAIRE_ORDER: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    QUESTIONNAIRE_CODE: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    QUESTIONNAIRE_TAG: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    QUESTIONNAIRE_ALT_CODE: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    QUESTIONNAIRE_GPS_REQUIRED: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'QUESTION_HEADER',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_QUESTIONNAIRE_1',
            fields: ['QUESTIONNAIRE_ID'],
            unique: true,
        },
    ],
});
