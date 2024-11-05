import {sequelize} from "@Sequelize/squelize-config";
import {DataTypes} from "sequelize";
import {Envs} from "@Envs/env";

export const ShopPdv = sequelize.define('ShopPdv', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shopid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sourceofcreation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopalias: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    publicid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    supervisorid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    supervisorname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopaddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    citytier: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    contactname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    contactno: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    businessarea: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salesregionone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salesregiontwo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salesregionthree: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salesregionfour: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    salesregionfive: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopgrade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    autocalculateornot: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shoptype: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    commercialareatag: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    retailcustomerid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    retailcustomername: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    manpowertype: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    imagetype: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shoplongitude: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shoplatitude: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shoparea: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopwidth: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopdept: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    monthlyrent: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    annualrent: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bankname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bankswiftcode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    accountholder: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bankaccountname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bankaccountno: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    inventoryuploadmode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    otherbrandsshopid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    carlcareshopid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    posid: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    smartphonecapacity: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    remark: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    creator: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updater: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updatedate: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shopownerno: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rebateornot: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    approver: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: Envs.PREFIX_DATABASE_TST + 'shop_pdv',
    schema: Envs.SCHEMA_DATABASE_TST,
    timestamps: true,
});