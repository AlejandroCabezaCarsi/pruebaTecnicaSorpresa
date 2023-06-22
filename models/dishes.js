'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.Dishes.belongsTo(models.categories,{
        foreignKey: "categoy_id"
      })
      
      
      models.Dishes.hasMany(models.Orders,{
        foreignKey:"dish_id"
      })
    }
  }
  Dishes.init({
    dishname: DataTypes.STRING,
    image: DataTypes.BLOB,
    categoy_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dishes',
  });
  return Dishes;
};