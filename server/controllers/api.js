const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const Post = require("../models/posts")

const SECRET = "a secret string"

//load data from JSON file into memory
const rawData = fs.readFileSync("server/database.json")
const data = JSON.parse(rawData)

const getUser = (username) => {
    return data.users.filter((u) => u.username === username)[0]
}

const getTokenFrom = (request) => {
    const authorization = request.get("authorization")
    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7)
    }
    return null
}

const apiRouter = express.Router()

apiRouter.get("/api/posts", (request, response) => {
    Post.find({}).then((result) => {
        console.log(result)
        response.json(result)
    })
})

apiRouter.get("/api/posts/:id", (request, response) => {
    Post.findById(request.params.id).then((result)=>{
        console.log(result)
        response.json(result)
    })    
})

apiRouter.post("/api/posts", (request, response) => {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, SECRET)
    console.log(decodedToken)

    if (!token || !decodedToken.id) {
        return response.status(401).json({error: "permission denied"})
    }

    const body = request.body

    const newPost = new Post({
        title: body.title,
        likes: body.likes,
        comments: body.comments,
        user: decodedToken.id
    })

    if (!body.title) {
        response.status(400).json({
            error: 'title missing'
        })
    } else {
        newPost.save().then(result => {
            response.json(result)
        })
    }
})

apiRouter.put("/api/posts/:id", (request, response) => {
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, SECRET)
    // console.log(token)

    if (!token || !decodedToken.id) {
        return response.status(401).json({error: "permission denied"})
    }
    const body = request.body


    const post = {
        title: body.title,
        likes: body.likes,
        comments: body.comments,
        user: decodedToken.id
    }

    if (!body.title) {
        response.status(400).json({
            error: 'title missing'
        })
    } else {
        Post.findByIdAndUpdate(request.params.id,post)
        .then(result=>{
            response.json(result)
        })
    }
    
})

apiRouter.post("/api/login", async (request, response) => {
    const { username, password } = request.body

    const user = getUser(username)
    console.log(user)

    if (!user) {
    return response.status(401).json({ error: "invalid username or passord" })
    }

    if (await bcrypt.compare(password, user.password)) {
        console.log("password is good")

        const userForToken = {
            id: user.id,
            username: user.username,
        }
        const token = jwt.sign(userForToken, SECRET)

        return response
            .status(200)
            .json({ token, username: user.username, name: user.name })
    } else {
        return response.status(401).json({ error: "invalid username or passord" })
    }
})



apiRouter.delete("/api/posts/:id", (request, response, next) => {
    Post.findByIdAndRemove(request.params.id)
    .then((result) => {
        Post.find({}).then((result) => {
            response.json(result)
        })
    })
    .catch((error) => next(error))
})

module.exports = apiRouter
