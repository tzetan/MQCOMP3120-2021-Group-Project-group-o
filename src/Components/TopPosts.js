import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const TopPosts = ({posts,addLike}) => {
  const getPopularPosts=(props)=> {
    props.sort(function (a, b) {
        return b.likes - a.likes;
    });
  
    return props.slice(0,5);
    }
    const top=getPopularPosts(posts)
    console.log(top)
return (


    <div>
    <br/>
      
    {top.map((post) => (
           <table id="topTable">
           <tr>
           <th> <img width="50px" height="50px"  src={post.image_url}></img></th>
           <th key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></th>
           <th>By: {post.author}</th>
           <th><button onClick={()=> addLike(post)}>Like {post.likes} </button> </th>
           </tr>
           </table> 
      ))}

    </div>

        
        
        
    )
  
  
}

export default TopPosts;
