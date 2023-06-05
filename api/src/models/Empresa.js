const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('empresa', {

    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    linkLogo: {
      type: DataTypes.TEXT,
    },
    color1: {
      type: DataTypes.STRING,
    },
    color2: {
      type: DataTypes.STRING,
    },
    color3: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    }

  });

};
