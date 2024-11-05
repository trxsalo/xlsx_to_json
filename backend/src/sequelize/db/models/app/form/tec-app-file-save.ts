import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const FileSave = sequelize.define('FileSave', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    root_path: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    secondary_path: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    file_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    file_name_original: {
        type: DataTypes.STRING(100),
        allowNull: true,
    },
    extension: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    user_create: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    file_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    file_updated: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    status_file: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'AC',
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST + 'file_save',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: false,
    indexes: [
        {
            name: 'idx_id',
            fields: ['id'],
        },
        {
            name: 'idx_extension',
            fields: ['extension'],
        },
        {
            name: 'idx_file_name_original',
            fields: ['file_name_original'],
        },
    ],
});