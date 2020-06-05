const express = require("express") // module solicitation
const server = express()


//configuring the public folder
server.use(express.static("public"))



// Using template engine

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Setting appltication paths
// inicial page
//req: Requisition
//res: Answer
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Um título"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})



//ligar o servidor
server.listen(3000)