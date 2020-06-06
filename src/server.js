const express = require("express") // module solicitation
const server = express()

//get the database
const db = require("./database/db")


//configuring the public folder
server.use(express.static("public"))

//Habilitation to use the req.body
server.use(express.urlencoded({ extended: true }))


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
    return res.render("index.html", { title: "Seu marketplace de resíduos" })
})

server.get("/create-point", (req, res) => {

    //req.query: Query Strings 
    // console.log(req.query)



    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

    //req.body: the body of the form
    //console.log(req.body)

    //Insert data into the database

    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items

    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }
    db.run(query, values, afterInsertData)


})


server.get("/search", (req, res) => {

    const search = req.query.search

    if (search == "") {
        //Empty search
        return res.render("search-results.html", { total: 0})

    }

    //Get the data from the database

    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }

        const total = rows.length

        // console.log("Aqui estão seus registros:")
        // console.log(rows)

        //Display the html page with datas from the database
        return res.render("search-results.html", { places: rows, total: total })
    })

})



//ligar o servidor
server.listen(3000)