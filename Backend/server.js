//archivo principal que arranca el servidor express
// levantar el servidor express en un puerto y configurar
//debe recibir los datos de login.html, mediante POST

import express from 'express';
import sequelize from './src/config/database.js';
const server = express();

const PORT = 3000;
server.use(express.json())

const conexionBD = async ()=>{
    try {
        const verificacion = await sequelize.authenticate();
        console.log(verificacion);
        console.log('Conexión a la BD exitosa');
    } catch (error) {
        console.log('Error:', error.message);
    }
}

conexionBD()

server.listen(PORT, ()=>{
    console.log(`server prendido en elpuerto ${PORT}`);
})