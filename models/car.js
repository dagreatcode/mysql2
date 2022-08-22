module.exports = function (sequelize, DataTypes) {
  const Car = sequelize.define("Car", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });
  Car.associate = function (models) {
    Car.belongsToMany(models.User, {
      through: "UserCars",
      foreignKey: "carId",
    });
  };
  return Car;
};
