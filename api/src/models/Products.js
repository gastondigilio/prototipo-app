const { DataTypes } = require("sequelize");

module.exports = sequelize => {

    sequelize.define('products', {

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
        gender: {
            type: DataTypes.ENUM("FEMALE", "MALE", "UNISEX"),
            allowNull: false,
            defaultValue: "UNISEX",
        },
        // listPrice: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        salePrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
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
        featuredProduct: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        saleProduct: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        productState: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }

    });

}