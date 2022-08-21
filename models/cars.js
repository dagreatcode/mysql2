module.exports = function (sequelize, DataTypes) {
  const Cars = sequelize.define("Cars", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  });
  return Cars;
};
