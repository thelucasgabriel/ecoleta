//import the sqlite3 dependency
const sqlite3 = require("sqlite3").verbose() /*verbose is a method that will handle sqlite messages, warnings visibly. */

//Create the object that ll´ make modifications to the database

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//Use the database object for our operations
// db.serialize(() => {
    
    // With SQL commands I `ll:

    // 1. Create a table with SQL commands
//     db.run(`                
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //template literals or template strings

//     //2. Insert data into the table
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eeletrônicos, Lâmpadas",

//     ]

//     function afterInsertData(err){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }
//     db.run(query, values, afterInsertData)

    //3. Consult the table data
    // db.all("SELECT name FROM places", function(err, rows){
    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão seus registros:")
    //     console.log(rows)
    // })

    //4. Delete a data from the table

    // db.run("DELETE FROM places WHERE id = ?", [1], function(err){

    //     if(err){
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso!")

    // })

//})

