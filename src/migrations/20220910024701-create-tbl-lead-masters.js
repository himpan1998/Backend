'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_lead_masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      profession: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      lead_type_id: {
        type: Sequelize.INTEGER
      },
      lead_source: {
        type: Sequelize.INTEGER
      },
      assigned_to: {
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER
      },
      location_by_district: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.INTEGER
      },
      state_name: {
        type: Sequelize.STRING
      },
      district_name: {
        type: Sequelize.STRING
      },
      state_id: {
        type: Sequelize.INTEGER
      },
      district_id: {
        type: Sequelize.INTEGER
      },
      plot_size: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('tbl_lead_masters');
  }
};