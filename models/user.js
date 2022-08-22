module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    fullname: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.DECIMAL(10, 2),
    },
  });

  // User.associate = function (models) {
  //   User.belongsTo(models.Country);
  // };
  User.associate = function (models) {
    User.belongsToMany(models.Car, {
      through: "UserCars",
      foreignKey: "userId",
    });
  };
  return User;
};
