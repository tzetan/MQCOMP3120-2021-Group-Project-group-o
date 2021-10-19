
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import postservice from '../Services/route';

const Post = ({post, deleteFn,addLike}) => {

  const fetchPost = (likes) => {
    console.log("Fetching...")
    postservice.specific(post.id)
    .then((response) => {
      console.log("response:", response)
      response.likes = likes+1;
      console.log("votes added----:", response.likes)
      post.likes = response.likes;
    })
  }

  const [num, setNum] = useState(post.likes)

  const increment = () => {
      console.log("INNNNNNNNN", num)
      setNum(num+1)
      fetchPost(num);
  }

  return (
      <div>
        
        <h3 key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h3>
        <h5>{post.author}</h5>
        <button onClick={()=> addLike(post)}>Like {post.likes} </button> 
        <button onClick={() => deleteFn(post)}>Delete</button>
      </div>
  )

}

export default Post