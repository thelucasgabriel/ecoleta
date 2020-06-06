const express = require("express") // module solicitation
const server = express()

//get the database
const db = require("./database/db")


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
    return res.render("index.html", {title: "Seu marketplace de resíduos"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {

    //Get the data from the database

        db.all("SELECT * FROM places", function(err, rows){
        if(err){
            return console.log(err)
        }

        // console.log("Aqui estão seus registros:")
        // console.log(rows)

        //Display the html page with datas from the database
        return res.render("search-results.html",{places: rows})
    })

})



//ligar o servidor
server.listen(3000)