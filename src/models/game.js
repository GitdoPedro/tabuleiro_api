const createGameModel = (sequelize, DataTypes) => {
    return sequelize.define('Game', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      },
      description: {
          type: DataTypes.STRING,
          allowNull: false
      },
      quantityOfPlayers: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      ageGroup: {
          type: DataTypes.STRING,
          allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
    });
  };
  
  module.exports = createGameModel;