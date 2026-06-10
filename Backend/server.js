//archivo principal que arranca el servidor express
// levantar el servidor express en un puerto y configurar
//debe recibir los datos de login.html, mediante POST

//al recibir los datos los guarda en un array y debe responder
//si el registro es exitoso, entonces redirige a la institucion a panel-control.html, donde se le habilita el menu expandible para que completen su perfil

//importante, si solo vamos a simular la base de datos con el array con objetos o si vamos a usarla para testear y despues en un futuro vincular todo,
// aca es donde se debe importar datos.js  con un:
require("./database/datos.js");
// si no se importa el servidor no va a saber donde guardar los datos nuevos
// Crear una ruta, para que el html pida las instituciones por acá.
