"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/conn");

class Arsip extends Model {
  static associate(models) {}
}

Arsip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    no_surat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING,
      allowNull: true, // Adjust allowNull based on your schema requirements
    },
  },
  {
    sequelize,
    modelName: "Arsip",
    tableName: "arsip",
  }
);

module.exports = Arsip;
