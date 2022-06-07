'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Events, Profiles}) {
      //events
      Users.hasMany(Events,{
        foreignKey: 'user_name',
        as: 'events'
      })
      //profile
      Users.hasOne(Profiles,{
        foreignKey: 'user_id',
        as: 'profiles'
      })
    }
  }
  Users.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    first_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    last_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    password_hash: {
      type:DataTypes.STRING,
      allowNull:false
    },
    profile_id: {
      type:DataTypes.INTEGER,
      allowNull: false
    },
    registered_at: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    timestamps: false
  });
  return Users;
};