import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";


export const QuestionDetail = sequelize.define('QuestionDetail', {
    QUESTION_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    QUESTION_NAME: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    QUESTION_DESCRIPTION: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    QUESTION_TYPE: {
        type: DataTypes.STRING(10),
        allowNull: true,
    },
    QUESTIONNAIRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_STATUS: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_ORDEN: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_CODE: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    QUESTION_REGUSER: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_REGDATE: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    QUESTION_LEVEL: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_GROUP_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    QUESTION_ATTACHED_QUANTITY: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    QUESTION_REQUIRED: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    QUESTION_VISIBLE_LEVEL: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    QUESTION_NEXT_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    QUESTION_ACTION: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    QUESTION_IMG_URL: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    QUESTION_REF_URL: {
        type: DataTypes.STRING(128),
        allowNull: true,
    },
    QUESTION_TAG: {
        type: DataTypes.STRING(32),
        allowNull: true,
    },
    QUESTION_ALT_CODE: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'QUESTION_DETAIL',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_QUESTION_2',
            fields: ['QUESTIONNAIRE_ID'],
        },
        {
            name: 'I_DIG_QUESTION_1',
            fields: ['QUESTION_ID'],
            unique: true,
        },
    ],
});