/**
 * @jest-environment jsdom
 */
 import React from 'react'
 import '@testing-library/jest-dom/extend-expect'
 import { fireEvent, render } from '@testing-library/react'
 import fs from 'fs'
 import List from './Unit'
 
 /**
  * Read sample data for testing
  * 
  * @param {String} fileName JSON data filename
  * @returns {Array} an array of like records
  */
 const sampleData =  (fileName) => {
   const rawData = fs.readFileSync(fileName)
   const data = JSON.parse(rawData)
 
   return data.likes
 }
 
 describe("List component", () => {
   test('renders content', () => {
     const contents = sampleData('server/database.json')
     const addLike = jest.fn()
 
     const component = render(
       <List contents={contents} addLike={addLike} />
     )
 
     // look for some content
     contents.map(c => expect(component.container).toHaveTextContent( c.content ))
   })
   
 
 })
 