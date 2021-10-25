import React from "react";
import {withRouter, useParams } from "react-router-dom"


const SinglePost = ({post, addLike}) => {
      const id = useParams().id
      const DisplaySinglePost= post.find(post => post.id === id)
      console.log(DisplaySinglePost)
      
  if(DisplaySinglePost){
    return (
      <div> 
         <h1> Single Post</h1>
              <img width="600px" height="590px"  src={DisplaySinglePost.image_url}></img>
              <li id ="Title">Title: {DisplaySinglePost.title}</li> 
              <li>By {DisplaySinglePost.author}</li>
              <li>Comments {DisplaySinglePost.comments}</li>
              <button onClick={()=> addLike(DisplaySinglePost)}>Like {DisplaySinglePost.likes} </button> 
   
      </div>
  )
    }
}

export default withRouter(SinglePost)