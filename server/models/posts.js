const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

// Database connection occurs synchronously
const doConnect = async () => {
    await mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology:true })
        .catch((error) => {
            console.log('error connecting to MongoDB', error.message)
        })
}

doConnect()

const postSchema = new mongoose.Schema({
    title: String,
    text:String,
    image_url:String,
    likes: Number,
    author:String,
    comments: Array,
    user:Number
})

postSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Post = mongoose.model("Post", postSchema)

module.exports = Post