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
              <img id="spImg" src={DisplaySinglePost.image_url}></img>
              <p id ="Title">Title: {DisplaySinglePost.title} By {DisplaySinglePost.author}</p> 
              <p>Content: {DisplaySinglePost.text}</p>
              <p>Comments {DisplaySinglePost.comments}</p>
              <button onClick={()=> addLike(DisplaySinglePost)}>Like {DisplaySinglePost.likes} </button> 
   
      </div>
  )
    }
}

export default withRouter(SinglePost)