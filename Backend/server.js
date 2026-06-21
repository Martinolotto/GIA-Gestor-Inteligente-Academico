//archivo principal que arranca el servidor express
// levantar el servidor express en un puerto y configurar
//debe recibir los datos de login.html, mediante POST

import express from "express";
import sequelize from "./src/config/database.js";
import { TableInstitucion } from "./src/models/institucion.js";
import { TableAdministrador } from "./src/models/administrador.js";
import { TableUsarios } from "./src/models/usuario.js";

const server = express();

const PORT = 3000;
server.use(express.json());

const conexionBD = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la BD exitosa");

    await sequelize.sync({ force: true });
    console.log("Tablas creadas");
  } catch (error) {
    console.log("Error:", error.message);
  }
};

conexionBD();

//tablas de datos

server.listen(PORT, () => {
  console.log(`server prendido en elpuerto ${PORT}`);
});
