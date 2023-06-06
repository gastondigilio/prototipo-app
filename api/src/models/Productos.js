const { DataTypes } = require("sequelize");

module.exports = sequelize => {

    sequelize.define('productos', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // gender: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // listPrice: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // price: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        salePrice: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image1: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image2: {
            type: DataTypes.TEXT,
        },
        image3: {
            type: DataTypes.TEXT,
        },
        image4: {
            type: DataTypes.TEXT,
        },
        image5: {
            type: DataTypes.TEXT,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },

    });

}