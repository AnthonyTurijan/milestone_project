'use strict';
const {
  Model
} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Comments extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }


  module.exports = (sequelize, DataTypes) => {
    class Comments extends Model {
      static associate({Events}, user) {
        Comments.belongsTo(Events, {foreignKey: "event_id", as: "events"})
      }
    }

  Comments.init({
    comment_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement:true
    },
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    event_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    time_posted: {
      type:DataTypes.DATE,
      allowNull: false
    },
    time_updated: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Comments',
    tableName: 'comments',
    timestamps:false
  });
  return Comments;
};