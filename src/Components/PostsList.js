
import React from 'react';
import { Link } from "react-router-dom";

//Returns a list of posts on the Home and My Post page.
const PostsList = ({post, deleteFn}) => {

 if(window.location.pathname.includes("Mypost")){
  return (
      <table id="mypostTable">
        <tbody>
          <tr>
            <th> <img width="80px" height="70px"  src={post.image_url} alt='postimg'></img></th>
            <th key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></th>
            <th>By: {post.author}</th>
            <th><button onClick={() => deleteFn(post)}>Delete</button></th>
          </tr>
        </tbody>
      </table> 
  )
  }else{
    return (
      <div id="allPost"> 
        <img width="80px" height="70px"  src={post.image_url} alt='postimg'></img>
        <h3 key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </h3>
        <h5>By: {post.author}</h5>
      </div>
    )
 }
}

export default PostsList