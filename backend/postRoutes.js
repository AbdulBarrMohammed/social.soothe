const express = require('express')
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})
let postRoutes = express.Router()

// #1 Retrieve All
//http://localhost:3000/posts
postRoutes.route("/posts").get(verifyToken, async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("posts").find({}).toArray()
    if (data.length > 0) {
        res.json(data)

    }
    else {
        throw new Error("Data was not found")
    }


})

// #2 Retrieve one
postRoutes.route("/posts/:id").get(verifyToken, async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("posts").findOne({_id: new ObjectId(req.params.id)})
    if (Object.keys(data).length > 0) {
        res.json(data)

    }
    else {
        throw new Error("Data was not found")
    }


})

// #3 Create one
postRoutes.route("/posts").post(verifyToken, async (req, res) => {
    let db = database.getDb()
    let mongoObject = {
        content: req.body.content,
        dateCreated: req.body.dateCreated,
        author: req.body.user._id

    }
    let data = await db.collection("posts").insertOne(mongoObject)
    res.json(data)


})


// #5 Delete one
postRoutes.route("/posts/:id").delete(verifyToken, async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("posts").deleteOne({_id: new ObjectId(req.params.id)})
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

module.exports = postRoutes
