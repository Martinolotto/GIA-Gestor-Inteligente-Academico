//archivo principal que arranca el servidor express
// levantar el servidor express en un puerto y configurar
//debe recibir los datos de login.html, mediante POST

import express from 'express';
const server = express();


const PORT = 3000;
server.use(express.json())


server.listen(PORT, ()=>{
    console.log(`server prendido en elpuerto ${PORT}`);
})