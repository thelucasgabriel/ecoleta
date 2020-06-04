const express = require("express")
const server = express()

// Setting appltication paths

// inicial page

//req: Requisition
//res: Answer
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})



//ligar o servidor
server.listen(3000)