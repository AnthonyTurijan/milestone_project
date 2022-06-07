'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Profiles, Comments}) {
      //user
      Events.belongsTo(Users,{
        foreignKey: 'user_name',
        as: 'users'
      })
      //Profiles
      Events.belongsTo(Profiles,{
        foreignKey:'profile_id',
        as: 'profiles'
      })
      //Comments
      Events.hasMany(Comments,{
        foreignKey: 'event_id',
        as: 'events '
      })
    }
  }
  Events.init({
    event_id: {type:
      DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    event_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    event_description: {
      type:DataTypes.STRING,
      allowNull:false
    },
    event_location: {
      type:DataTypes.STRING,
      allowNull:false
    },
    event_time: {
      type:DataTypes.DATE,
      allowNull:true
    },
    user_id: {
      type:DataTypes.STRING,
      allowNull:false
    },
    time_posted: DataTypes.DATE,
    group_size: {type:
      DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, 
  {
    sequelize,
    modelName: 'Events',
    tableName: 'events',
    timestamps:false
  });
  return Events;
};