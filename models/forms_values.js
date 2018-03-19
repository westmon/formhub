module.exports = function(sequelize, DataTypes) {
    var FormVals = sequelize.define("FormVals", {
      formRoute: {
        type:DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      value: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {
      timestamps: false
    });

    return FormVals;
  };