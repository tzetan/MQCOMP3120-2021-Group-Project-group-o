/**
 * @jest-environment jsdom
 */
 import React, { Component } from 'react'
 import { render, fireEvent } from '@testing-library/react'
 import { BrowserRouter as Router } from 'react-router-dom'; 
 import '@testing-library/jest-dom/extend-expect'
 import fs  from 'fs'
 import SingPost from './SinglePost.js'
 
   const sampleData=(fileName)=>{
      const rawData=fs.readFileSync(fileName)
      const data=JSON.parse(rawData)
      return data.posts
   }
   describe("SinglePost component",()=>{
      test('renders content',()=>{
         const post=sampleData('server/database.json')
         expect(post[0].title).toBe("My 1st Post")
         expect(post[0].text).toBe("'I'm going to rush out and buy this book! I can totally see a clown version of Will Smith.'  \n- Hit the Spoof")
         expect(post[0].likes).toBe(20)
         expect(post[0].comments).toStrictEqual([
            "Sample comment",
            "Sample comment 2"
        ])
      })
   })

