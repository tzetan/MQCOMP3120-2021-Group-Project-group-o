/**
 * @jest-environment jsdom
 */
 import React, { Component } from 'react'
 import { render, fireEvent } from '@testing-library/react'
 import { BrowserRouter as Router } from 'react-router-dom'; 
 import '@testing-library/jest-dom/extend-expect'
 import fs  from 'fs'
 import PostsHome from './PostsHome.js'
 import PostsList from "./PostsList";
 
   const sampleData=(fileName)=>{
      const rawData=fs.readFileSync(fileName)
      const data=JSON.parse(rawData)

      return data.posts
   }

   describe("PostsHome component",()=>{
      test('renders content',()=>{
         const post=sampleData('server/database.json')
         const deletePost=jest.fn()
      
        const component=render(
            <PostsList  post={post} deletePost={deletePost} /> 
        )

        post.map(p=>expect(component.container).toHaveTextContent(p.title,p.img_url,p.likes,p.text,p.comments))
    
       
      
      })

   })

