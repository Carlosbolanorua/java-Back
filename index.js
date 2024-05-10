const http = require("http")

function requestController(){
    //Logica de la funcion
    console.log("Hola mundo!")
}
//Configurar servidor
const server = http.createServer(requestController)

server.listen(4000)