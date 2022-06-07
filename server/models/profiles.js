'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users, Events}) {
      //Comments
      // Profiles.hasMany(Events,{
      //   foreignKey: 'profile_id',
      //   as: 'events'
      // })
      //Users
      Profiles.belongsTo(Users,{
        foreignKey: 'user_id',
        as: 'users'
      })
    }
  }
  Profiles.init({
    profile_id: {
      type:DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement:true
  },
    user_id: {
      type:DataTypes.INTEGER,
    allowNull: false},
    bio: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Profiles',
    tableName: 'profiles',
    timestamps: false
  });
  return Profiles;
};