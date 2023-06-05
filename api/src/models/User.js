const { DataTypes } = require("sequelize");

module.exports = sequelize => {

    sequelize.define("user", {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phone3: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address3: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

}