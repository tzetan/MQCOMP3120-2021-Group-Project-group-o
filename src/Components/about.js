
import {Link} from "react-router-dom";
import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import postservice from '../Services/route';

function About() {
    const [posts, setposts] = useState([]);

    useEffect(() => {
      console.log("response:")
      postservice.getAll()
      .then(data => {
        console.log("response: ", data)
        setposts(data)
      })
    },
    [])
    const deletePost = (post) => {
        console.log("delete", post)
        postservice.delete(post.id)
        .then(data => {
          console.log("delete successfully")
          const newposts = posts.filter(u => u.id !== post.id)
          setposts(newposts)
        })
      }
    
    return (
        <div className="App">
            <h1>Welcome!</h1>
            <br/>

            <h4>Share your thoughts with us and the rest of the world! Read other's blogs and intract with them.</h4>
            <h6>Let people know you like their writing and give them ideas.</h6>

            <h5>Click on <Link to="/Myposts">MyPosts</Link> to view some of our top Posts</h5>
        
            <div className="App">
                <div>
                  <h1 styles="text-align: center;">List of Posts!</h1>
                </div>
                <br/>
                
                <ul>
                  
                  {posts.map((post) => (
                    <PostsList key={post.id} post={post} deleteFn={deletePost}/>  
                  ))}
                </ul>
                
            </div>
        </div>
        
    );
}

export default About;
