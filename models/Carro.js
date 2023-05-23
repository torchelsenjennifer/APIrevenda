import { DataTypes } from "sequelize";
import { sequelize } from "../databases/conecta.js";

export const Carro = sequelize.define("carro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  modelo: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});
