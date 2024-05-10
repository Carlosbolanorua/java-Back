const http = require("http")
const exportfromAnothers=require('./anothers')
console.log({exportfromAnothers});
function requestController(){
    //Logica de la funcion
    console.log("Recibimos una nueva request")
}
//Configurar servidor
const server = http.createServer(requestController)

//server.listen(4000)