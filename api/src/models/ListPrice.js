const { DataTypes } = require("sequelize");

module.exports = sequelize => {

    sequelize.define('listPrice', {

        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        porcenList: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        }

    });

}