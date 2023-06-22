'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Orders.belongsTo(models.Users, {
        foreignKey:"user_id"
      })
      models.Orders.belongsTo(models.Dishes, {
        foreignKey:"dish_id"
      })
    }
  }
  Orders.init({
    user_id: DataTypes.INTEGER,
    dish_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    timer: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};