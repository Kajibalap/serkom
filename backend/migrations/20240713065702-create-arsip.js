'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('arsip', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      no_surat: {
        type: Sequelize.STRING
      },
      judul: {
        type: Sequelize.STRING
      },
      id_kategori: {
        type: Sequelize.INTEGER,
        references: {
          model: 'kategori',
          key: 'id'
        }
      },
      file: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('arsip');
  }
  
};