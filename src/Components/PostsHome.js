import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Post from "./postList";
import postservice from '../Services/route';


const PostsHome = () => {
  
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

      const newPost={...post,votes:1}
      console.log("updata vote in item",newPost)
      postservice.update(newPost)
      .then(data=>{
      console.log("got response",data)
      setposts(data)    
      })
      }
      
  }

  console.log("response:")
  return (
      <div className="App">
          <div>
            <h1 styles="text-align: center;">List of Posts!</h1>
          </div>
          <br/>
          
          <ul>
            {posts.map((post) => (
              <Post key={post.id} post={post} deleteFn={deletePost} addLike={addLike}/>  
            ))}
          </ul>
          
      </div>
  );
}

export default PostsHome;
