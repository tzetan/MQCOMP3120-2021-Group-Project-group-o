
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import TopPosts from"./TopPosts"
import postService from '../Services/route';

function About() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      console.log("response:")
      postService.getAll()
      .then(data => {
        console.log("response: ", data)
        setPosts(data)
      })
    },
    [])


  const addLike= (post) =>{
    console.log("addVote",post)
      const newPost={...post,likes:post.likes+1}
      console.log("updata likes in item",newPost)
      if(newPost.likes>=1){
        console.log("working")
        postService.update(newPost)
      .then(data=>{
        console.log("got response",data)
        setPosts(data)
      })
      }else{

      const newPost={...post,likes:1}
      console.log("updata vote in item",newPost)
      postService.update(newPost)
      .then(data=>{
      console.log("got response",data)
      setPosts(data)    
      })
      }
      
  }

    const deletePost = (post) => {
        console.log("delete", post)
        postService.delete(post.id)
        .then(data => {
          console.log("delete successfully")
          const newposts = posts.filter(u => u.id !== post.id)
          setPosts(newposts)
        })
      }
    

    return (
        <div className="App">
            <h1>Welcome!</h1>
            <br/>

            <h4>Share your thoughts with us and the rest of the world! Read other's blogs and intract with them.</h4>
            <h6>Let people know you like their writing and give them ideas.</h6>

            <h5>Click on <Link to="/Myposts">MyPosts</Link> to view some of our top Posts</h5>
        
            <div className="seven columns">
                <div>
                  <h1 styles="text-align: center;">List of Posts!</h1>
                </div>
                <br/>
                  
                {posts.map((post) => (
                    <PostsList key={post.id} post={post} deleteFn={deletePost}/>  
                  ))}
           
            </div>
            <div className="four columns">
                <div>
                  <br></br>
                  <h3 styles="text-align: center;">Top 5 Posts!</h3>
                </div>
                <br/>
                  
          
                <TopPosts  posts={posts} addLike={addLike}/>  
               
           
            </div>
        </div>
        
    );
}

export default About;
