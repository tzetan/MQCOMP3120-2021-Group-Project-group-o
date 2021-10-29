import React, { useState, useEffect } from "react";
import PostsList from "./PostsList";
import postservice from '../Services/route';
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const PostsHome = () => {
  
  const [posts, setposts] = useState([]);
  const { user, loginWithRedirect } = useAuth0()

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


  //const userpost=posts.filter(p => p.user==user.id)

    if(user){
        return (
        <div className="App">
            <div>
                <h1 styles="text-align: center;">List of Posts!</h1>
            </div>
         
            
           
            <div>
                {posts.filter(p => p.author===user.name).map((post) => (
                <PostsList key={post.id} post={post} deleteFn={deletePost} />  
                ))}
          
            </div>   
        </div>
        
        
        
        )
    } else {
        return(
            <>
            <p>You must be logged in to view your posts!</p>
            <Link to="/MyPosts"  onClick={() => loginWithRedirect()}>
                Log In
            </Link> 
            </>
        )
    }
 
  
  
}

export default PostsHome;
