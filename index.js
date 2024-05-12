require("dotenv").config()
const http = require("http")

function requestController(req,res){
    //Logica de la funcion
    const url = req.url
    const method = req.method
    console.log({url,method})

    if(method==="GET" && url==="/"){
        res.setHeader("Content-type","text/html; charset=utf-8")
        res.write("<h1>Hola mundo desde la pagina Principal</h1>")
        res.end()
        return
    }
    
    if(method==="GET" && url==="/about"){
        
    }

}
//Configurar servidor
const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT,function (){
    console.log("Puerto: "+PORT)
})