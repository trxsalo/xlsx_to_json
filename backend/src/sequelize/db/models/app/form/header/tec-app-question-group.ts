import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";


export const QuestionGroup = sequelize.define('QuestionGroup', {
    GROUP_ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    GROUP_CODE: {
        type: DataTypes.STRING(16),
        allowNull: true,
    },
    GROUP_DESCRIPTION: {
        type: DataTypes.STRING(64),
        allowNull: true,
    },
    QUESTIONNAIRE_ID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    GROUP_STATUS: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    GROUP_ORDER: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST+'QUESTION_GROUP',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'I_DIG_QUESTION_GROUP_2',
            fields: ['QUESTIONNAIRE_ID'],
            using: 'BITMAP',
        },
    ],
});