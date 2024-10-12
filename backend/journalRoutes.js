const express = require('express')
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})
let journalRoutes = express.Router()

// #1 Retrieve All
//http://localhost:3000/journal
journalRoutes.route("/journals").get(verifyToken, async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("journals").find({}).toArray()
    if (data.length > 0) {
        res.json(data)

    }
    else {
        throw new Error("Data was not found")
    }


})

// #2 Retrieve one
journalRoutes.route("/journals/:id").get(verifyToken, async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("journals").findOne({_id: new ObjectId(req.params.id)})
    if (Object.keys(data).length > 0) {
        res.json(data)

    }
    else {
        throw new Error("Data was not found")
    }


})

// #3 Create one
journalRoutes.route("/journals").post(verifyToken, async (req, res) => {
    let db = database.getDb()
    let mongoObject = {
        title: req.body.title,
        mood: req.body.mood,
        content: req.body.content,
        dateCreated: req.body.dateCreated,
        author: req.body.user._id

    }
    let data = await db.collection("journals").insertOne(mongoObject)
    res.json(data)


})

// #4 Update one
journalRoutes.route("/journals/:id").put(verifyToken, async (req, res) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            title: req.body.title,
            mood: req.body.mood,
            content: req.body.content,
            dateCreated: req.body.dateCreated,
            author: req.body.author
        }
    }
    let data = await db.collection("journals").updateOne({_id: new ObjectId(req.params.id)}, mongoObject)
    res.json(data)


})

// #5 Delete one
journalRoutes.route("/journals/:id").delete(verifyToken, async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("journals").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)


})


//function used to verify if user has authentication to view and interact with journal functions
function verifyToken(req, res, next) {
    const authHeaders = req.headers["authorization"]
    const token = authHeaders && authHeaders.split(' ')[1]
    if (!token) {
        return res.status(401).json({message: "Auhentication token missing"})

    }

    jwt.verify(token, process.env.SECRET_KEY, (error, user) => {
        //if token not valid
        if (error) {
            return res.status(403).json({message: "invalid token"})
        }

        req.body.user = user
        next()
    })


}

module.exports = journalRoutes
