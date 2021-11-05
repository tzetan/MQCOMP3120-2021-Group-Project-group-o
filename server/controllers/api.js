const express = require("express")
const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
const fs = require("fs")
const Post = require("../models/posts")

const jwksRsa = require("jwks-rsa")
const jwt = require('express-jwt')
const authConfig = require("../../src/auth_config.json")

const SECRET = "a secret string"

//load data from JSON file into memory
const rawData = fs.readFileSync("server/database.json")
const data = JSON.parse(rawData)

const getUser = (username) => {
    return data.users.filter((u) => u.username === username)[0]
}

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),
    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"]
  });

const apiRouter = express.Router()

apiRouter.get("/api/posts", (request, response) => {
    Post.find({}).then((result) => {
        response.json(result)
    })
})

apiRouter.get("/api/posts/:id", (request, response) => {
    Post.findById(request.params.id)
    .then((result)=>{
        response.json(result)
    })    
})

apiRouter.post("/api/posts",  async (request, response, next) => {
    console.log(checkJwt)

    const body = request.body

    const newPost = new Post({
        title: body.title,
        text: body.content,
        likes: body.likes,
        image_url:body.image_url,
        comments: body.comments,
        author: body.author
    })

    if (!body.title) {
        response.status(400).json({
            error: 'title missing'
        })
    } else {
        newPost.save().then(result => {
            response.json(result)
        })
            .catch(error => next(error))
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
            .json({ token, username: user.username, name: user.name, id:user.id })
    } else {
        return response.status(401).json({ error: "invalid username or passord" })
    }
})

apiRouter.put("/api/posts/:id", (request, response, next) => {
    
    const body = request.body

    const post = {
        comments: body.comments,
        likes: body.likes,
        title: body.title

    }

    Post.findByIdAndUpdate(request.params.id,post)
    .then(result=>{
        Post.find({}).then((result) => {
            response.json(result)
        })
    })
    .catch((error) => next(error))
    
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
