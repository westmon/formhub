module.exports = function(sequelize, DataTypes) {
    var FormTemplates = sequelize.define("FormTemplates", {
      formName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      formRoute: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len:[1]
        }
      }
    }, {
      timestamps: false
    });

    return FormTemplates;
  };

  // If you need to add the formRoutes to properly test, simply run this
  // in your db query:

  // INSERT INTO FormTemplates (formName, formRoute)
  // VALUES 
  // (“New Patient”, “new_patient”),
  // (“Medical History”, “medical_history”),
  // (“Insurance”, “insurance”),
  // (“Consent”, “consent”),
  // (“Emergency Contact”, “form_emergency”);
  