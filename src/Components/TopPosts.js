import React from "react";
import {Link} from "react-router-dom";

//Display and sort the top five posts in descending order by likes on the Home page.
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
           <table id="topTable"  key={post.id} >
             <tbody>
                <tr>
                  <th> <img width="50px" height="50px"  src={post.image_url} alt='postimg'></img></th>
                  <th key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></th>
                  <th>By: {post.author}</th>
                  <th><button onClick={()=> addLike(post)}>Like {post.likes} </button> </th>
                </tr>
            </tbody>
           </table> 
        ))}
    </div>    
  )
}

export default TopPosts;
