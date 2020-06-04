const express = require("express")
const server = express()


//Public folder configuration
server.use(express.static("public"))


// Setting appltication paths

// inicial page

//req: Requisition
//res: Answer
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})



//ligar o servidor
server.listen(3000)