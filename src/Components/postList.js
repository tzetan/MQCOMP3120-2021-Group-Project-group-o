
import React, { useState } from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import postservice from '../Services/route';

const Post = ({post, deleteFn}) => {

  const fetchPost = (votes) => {
    console.log("Fetching...")
    postservice.specific(post.id)
    .then((response) => {
      console.log("response:", response)
      response.votes = votes+1;
      console.log("votes added----:", response.votes)
      post.votes = response.votes;
    })
  }

  const [num, setNum] = useState(post.votes)

  const increment = () => {
      console.log("INNNNNNNNN", num)
      setNum(num+1)
      fetchPost(num);
  }

  return (
    <Router>
      <div>
        
      <h3 key={post.id}>
        <Link to={`/api/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <h5>{post.author}</h5>
      <button name="votes" onClick={increment}>Vote = {post.votes} </button> 
      <button onClick={() => deleteFn(post)}>Delete</button>
      </div>
    </Router>
  )

}

export default Post