const express = require('express')
const database = require("./connect")
const ObjectId = require("mongodb").ObjectId
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config({path: "./config.env"})

let userRoutes = express.Router()
const SALT_ROUNDS = 6


// #1 Retrieve All
//http://localhost:3000/journal
userRoutes.route("/users").get( async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("users").find({}).toArray()
    if (data.length > 0) {
        res.json(data)

    }
    else {
        throw new Error("Data was not found")
    }


})

// #2 Retrieve one
userRoutes.route("/users/:id").get( async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("users").findOne({_id: new ObjectId(req.params.id)})
    if (Object.keys(data).length > 0) {
        res.json(data)

    }
    else {
        throw new Error("Data was not found")
    }


})

// #3 Create one
userRoutes.route("/users").post( async (req, res) => {
    let db = database.getDb()

    //check if email is already in database
    const takenEmail = await db.collection("users").findOne({email: req.body.email})

    if (takenEmail) {
        res.json({message: 'The email is taken'})
    }
    else {
            //turns password into encrypt
        const hash = await bcrypt.hash(req.body.password, SALT_ROUNDS)

        let mongoObject = {
            username: req.body.username,
            email: req.body.email,
            password: hash,
            gender: req.body.gender,
            dateJoined: new Date(),
            journals: []


            //will also need
            //challenges

        }
        let data = await db.collection("users").insertOne(mongoObject)
        res.json(data)

    }



})

// #4 Update one
userRoutes.route("/users/:id").put( async (req, res) => {
    let db = database.getDb()
    let mongoObject = {
        $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            dateJoined: new Date(),
            journals: []
        }

        //will also need
        //challenges

    }
    let data = await db.collection("users").updateOne({_id: new ObjectId(req.params.id)}, mongoObject)
    res.json(data)
})

// #5 Delete one
userRoutes.route("/users/:id").delete( async (req, res) => {
    let db = database.getDb()
    let data = await db.collection("users").deleteOne({_id: new ObjectId(req.params.id)})
    res.json(data)


})



// Login
userRoutes.route("/users/login").post( async (req, res) => {
    let db = database.getDb()

    //get user by email
    const user = await db.collection("users").findOne({email: req.body.email})

    if (user) {
        let confirm = await bcrypt.compare(req.body.password, user.password)
        if (confirm) {
            //encoded user data
            const token = jwt.sign(user, process.env.SECRET_KEY, {expiresIn: "1h"})
            res.json({success: true, token})

        }
        else {
            res.json({success: false, message: "Incorrect Password"})
        }
    }
    else {
        res.json({success: false, message: "User not found"})
    }


})

module.exports = userRoutes
