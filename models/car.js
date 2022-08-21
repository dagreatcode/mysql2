module.exports = function (sequelize, DataTypes) {
  const Car = sequelize.define("Car", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10,2)
    },
  });
  return Car;
};
