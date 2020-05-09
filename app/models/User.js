'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    todo: DataTypes.STRING,
    contentType:DataTypes.STRING,
    headlines:DataTypes.STRING,
    scheduled:DataTypes.DATE,
    channels:DataTypes.STRING,
    producers:DataTypes.STRING,
    sourceOfProducers:DataTypes.STRING,
    desiredActions:DataTypes.STRING,
    likes:DataTypes.INTEGER,
    shares:DataTypes.INTEGER,
    createdAt:DataTypes.DATE,
    publishedAt:DataTypes.DATE
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};