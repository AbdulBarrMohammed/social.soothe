const connect = require("./connect")
const express = require("express")
const cors = require("cors")
const journals = require("./journalRoutes")
const users = require("./userRoutes")



const app = express()
const PORT = 3000

//Cors will tell express how to share resources to help connect front and back end
app.use(cors())
app.use(express.json())
app.use(journals)
app.use(users)



//creating our server
app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT}`)
})
