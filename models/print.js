module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Print", {
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      rand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
    },{
        timestamps: true
      });
    return Users;
  };