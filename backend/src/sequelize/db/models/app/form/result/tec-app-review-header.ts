import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const ReviewHeader = sequelize.define('ReviewHeader', {
    REVIEW_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    REVIEW_DATE: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('TRUNC(SYSDATE)'),
    },
    REVIEW_DATETIME: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('SYSDATE'),
    },
    REVIEW_PARENT: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_STATUS_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    QUESTIONNAIRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_QUESTION_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    REVIEW_AUDITOR_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    REVIEW_PERSON_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_PERSON: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: null,
    },
    REVIEW_TERRITORY_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_VALUE: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_AMOUNT: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_TEXT: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    REVIEW_COMMENT: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    REVIEW_TAG: {
        type: DataTypes.STRING(64),
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
    REVIEW_REGUSER: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    REVIEW_REGDATE: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('SYSDATE'),
    },
    REVIEW_REGTEXT: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    REVIEW_MODUSER: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    REVIEW_MODDATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    REVIEW_MODTEXT: {
        type: DataTypes.STRING(512),
        allowNull: true,
    },
    REVIEW_ATTACHED_FOLDER: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    REVIEW_PHASE_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    REVIEW_REGLAT: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: true,
    },
    REVIEW_REGLNG: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: true,
    },
    REVIEW_MODLAT: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: true,
    },
    REVIEW_MODLNG: {
        type: DataTypes.DECIMAL(20, 10),
        allowNull: true,
    },
    REVIEW_CODE: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    REVIEW_ALT_CODE: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'REVIEW_HEADER',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_QUESTION_REVIEW_5',
            fields: ['QUESTIONNAIRE_ID'],
        },
        {
            name: 'I_DIG_QUESTION_REVIEW_1',
            fields: ['REVIEW_ID'],
            unique: true,
        },
        {
            name: 'I_DIG_QUESTION_REVIEW_2',
            fields: ['REVIEW_DATE'],
            using: 'BITMAP',
        },
    ],
});
