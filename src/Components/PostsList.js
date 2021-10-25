
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const PostsList = ({post, deleteFn}) => {

 
 if(window.location.pathname.includes("Mypost")){
  return (
    <div> 
      <img width="80px" height="70px"  src={post.image_url}></img>
      <h3 key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <h5>By: {post.author}</h5>
      <button onClick={() => deleteFn(post)}>Delete</button>
    </div>
)
 }else{
  return (
    <div> 
      <img width="80px" height="70px"  src={post.image_url}></img>
      <h3 key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <h5>By: {post.author}</h5>
    </div>
)
 }
 

}

export default PostsList