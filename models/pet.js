module.exports = function(sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      breed: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true
      },
      temperament: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 10 }
      },
      photoURL: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      shelter_owner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    });
    return Pet;
  };