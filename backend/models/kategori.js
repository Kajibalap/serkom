"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/conn");

class Kategori extends Model {
  static associate(models) {}
}

Kategori.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama: { type:DataTypes.STRING},
    keterangan: {type:DataTypes.STRING},
  },
  {
    sequelize,
    modelName: "Kategori",
    tableName: "kategori",
  }
);
module.exports = Kategori;
