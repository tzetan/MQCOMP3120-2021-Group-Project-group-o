import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Post from "./postList";
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

  const addLike= (post) =>{
    console.log("addVote",post)
      const newPost={...post,likes:post.likes+1}
      console.log("updata likes in item",newPost)
      if(newPost.likes>=1){
        console.log("working")
        postservice.update(newPost)
      .then(data=>{
        console.log("got response",data)
   
        setposts(data)
      })
      }else{

      const newPost={...post,likes:1}
      console.log("updata vote in item",newPost)
      postservice.update(newPost)
      .then(data=>{
      console.log("got response",data)
      setposts(data)    
      })
      }
      
  }
  //const userpost=posts.filter(p => p.user==user.id)

    if(user){
        return (
        <div className="App">
            <div>
                <h1 styles="text-align: center;">List of Posts!</h1>
            </div>
            <br/>
            
            <ul>
                
                {posts.filter(p => p.author===user.name).map((post) => (
                <Post key={post.id} post={post} deleteFn={deletePost} addLike={addLike}/>  
                ))}
            </ul>
            
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
