/**
 * @jest-environment node
 */

 const mongoose = require('mongoose')
 const supertest=require('supertest')
 const fs=require('fs')
 const app=require('../app')
 const Post=require("../models/posts")

 const api=supertest(app)
 
 /**
  * Load sample data into the database for testing
  * 
  * @param {String} fileName JSON data filename
  */
 
 const  sampleData=(fileName)=>{
     const rawDate=fs.readFileSync(fileName)
     const data=JSON.parse(rawDate)
 
     data.posts.map(async record =>{
         const l =new Post(record)
         await l.save()
     })
 }
 
 describe('api',()=>{
 
     beforeEach(async()=>{
         sampleData("server/database.json")
     })

     test('get request returns JSON', async () => {
         await api.get('/api/posts')
             .expect(200)
             .expect('Content-Type',/application\/json/)
     })
 
     test('there are ssic post records', async()=>{
         const response = await api.get('/api/posts')
         expect(response.body).toHaveLength(6)
     })
 
     test('POST request adds a record',async()=>{
         const newPost={
             title:"test title",
             text:"test",
             image_url:"text"
         }
 
         await api.post('/api/posts')
             .send(newPost)
             .expect(200)
             .expect('Content-Type',/application\/json/)
         const response=await api.get('/api/posts')
         expect(response.body).toHaveLength(7)
     })
     afterEach(async()=>{
         await Post.deleteMany({})
     })
 
     afterAll(()=>{
         mongoose.connection.close()
     })
 })