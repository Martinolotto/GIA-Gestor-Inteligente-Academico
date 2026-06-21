import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

export const TableUsarios = sequelize.define(
  "usuario",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      type: DataTypes.INTEGER,
    },
    role: {
      type: DataTypes.ENUM("administrador", "representante"),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    contrasenia: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "usuario",
  },
);
