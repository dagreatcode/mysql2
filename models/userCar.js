module.exports = function (sequelize, DataTypes) {
  const UserCars = sequelize.define(
    "UserCars",
    {
      userId: DataTypes.INTEGER,
      carId: DataTypes.INTEGER,
    },
    {
      timestamp: false,
    }
  );
  return UserCars;
};
