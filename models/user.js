module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isUnique: true,
        validate: {
            isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      // value should be 'Shelter', 'Owner', 'Borrower'
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true
      }
    });
    return User;
  };