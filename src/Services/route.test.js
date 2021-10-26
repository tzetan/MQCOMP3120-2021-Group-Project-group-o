/**
 * @jest-environment jsdom
 */
 import  '@testing-library/jest-dom/extend-expect'
 import axios from 'axios'

 import postService from './route.js'

 jest.mock('axios')

 describe('postsService',()=>{
    test('getAll',done=>{
        const thedata=[1,2,3,4,5,6]
        axios.get.mockResolvedValue({data:thedata})
        
        postService.getAll().then(data=>{
            expect(data).toBe(thedata)

            expect(axios.get.mock.calls).toHaveLength(1)
            expect(axios.get.mock.calls[0][0]).toBe('/api/posts')

            done()
        })
    })

    test("create",done=>{
        const thedata=[1,2,3,4,5,6,7]
        const thePost={
                  title:"test",
                  text:"hop"  ,
                  image_url:"working"
                  
            }
        axios.post.mockResolvedValue({data:thedata})

        postService.create(thePost)
        .then(data=>{
            expect(data).toBe(thedata)
            expect(axios.post.mock.calls).toHaveLength(1)
            expect(axios.post).toBeCalledWith(
                '/api/posts',
                theUnit,
            )
            done()
        })
    })

    test('update',done=>{
        const thedata=[1,2,3,4,5,6]
        const thePost={
            id:"1",
            title:"test",
            text:"hop"  ,
            image_url:"working"
            
      }
        const id=1
        axios.put.mockResolvedValue({data:thedata})
        
        postService.update(thePost).then(data=>{
            expect(data).toBe(thedata)
            expect(axios.put.mock.calls).toHaveLength(1)
            expect(axios.put.mock.calls[0][0]).toBe('/api/posts/1')

            done()
        })
    })
   
    test('delete',done=>{
        const thedata=[1,2,3,4,5,6]
        const id=1
        axios.delete.mockResolvedValue({data:thedata})
        
        postService.delete(id)
        .then(data=>{
            expect(data).toBe(thedata)
            expect(axios.delete.mock.calls).toHaveLength(1)
            expect(axios.delete.mock.calls[0][0]).toBe('/api/posts/1')
            done()
        })
    })


    test('specific',done=>{
        const thedata=[1,2,3,4,5,6]
        const id=1
        axios.get.mockResolvedValue({data:thedata})
        
        postService.specific(id).then(data=>{
            expect(data).toBe(thedata)
            expect(axios.get.mock.calls).toHaveLength(1)
            expect(axios.get.mock.calls[0][0]).toBe('/api/posts/1')

            done()
        })
    })

    test('login',done=>{
        const thedata={"password": "ttt", "username": "test"}
        const id=1
        const thePost={
            username:"test",
            password:"ttt"
            
      }
        axios.post.mockResolvedValue({data:thePost})
        
        postService.login(thePost.username,thePost.password).then(data=>{
            expect(data).toStrictEqual(thedata)
            expect(axios.post.mock.calls).toHaveLength(1)
            expect(axios.post.mock.calls[0][0]).toBe('/api//login')

            done()
        })
    })

   

 })