require("dotenv").config()
const http = require("http")

function requestController(){
    //Logica de la funcion
    console.log("Hola mundo!")
}
//Configurar servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT
server.listen(PORT,function (){
    console.log("Puerto:"+PORT);
})