'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todo: {
        type: Sequelize.STRING
      },
      contentType: {
        type: Sequelize.STRING
      },
      headlines: {
        type: Sequelize.STRING
      },
      scheduled: {
        type: Sequelize.DATE
      },
      channels: {
        type: Sequelize.STRING
      },
      producers: {
        type: Sequelize.STRING
      },
      sourceOfProducers: {
        type: Sequelize.STRING
      },
      desiredActions: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER
      },
      shares: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      publishedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};