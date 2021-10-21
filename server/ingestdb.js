require("dotenv").config()
const mongoose = require("mongoose")
const Post = require("./models/posts")
const fs = require("fs")

// Load data from JSON file into memory
const rawData = fs.readFileSync("server/database.json")
const data = JSON.parse(rawData)

data.posts.map(record => {

    console.log(record)
    const newPost = new Post({
        title: record.title,
        image_url:record.image_url,
        author:record.author,
        likes: record.likes,
        comments: record.comments,
        user:record.user
    })
    newPost.save().then(result => {
        console.log("like record saved")
    })
})