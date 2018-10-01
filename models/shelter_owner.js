module.exports = function(sequelize, DataTypes) {
    var Shelter_Owner = sequelize.define("Shelter_Owner", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      streetAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      zip: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Shelter_Owner;
  };