//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

//REQUIRE DOTENV
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

  
//LISTEN
app.listen(process.env.PORT, () => {
console.log(`Server listening on ${process.env.PORT}`);
});