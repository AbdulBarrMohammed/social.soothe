const express = require('express')
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId

let journalRoutes = express.Router()

// #1 Retrieve All
//http://localhost:3000/journal
journalRoutes.route("/journals").get( async (req, res) => {
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
journalRoutes.route("/journals/:id").get( async (req, res) => {
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
journalRoutes.route("/journals").post( async (req, res) => {
    let db = database.getDb()
    let mongoObject = {
        title: req.body.title,
        mood: req.body.mood,
        content: req.body.content,
        dateCreated: req.body.dateCreated,
        author: req.body.author

    }
    let data = await db.collection("journals").insertOne(mongoObject)
    res.json(data)


})

// #4 Update one
journalRoutes.route("/journals/:id").put( async (req, res) => {
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
journalRoutes.route("/journals/:id").delete( async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("journals").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)


})

module.exports = journalRoutes
