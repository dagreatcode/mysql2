module.exports = function (sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
      fullname: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.DECIMAL(10,2)
      },
    });
    return Users;
  };
  