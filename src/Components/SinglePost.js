import React,{ useState } from "react";
import {withRouter, useParams } from "react-router-dom"



const SinglePost = ({post, addLike,addComment}) => {
      const id = useParams().id
      const DisplaySinglePost= post.find(post => post.id === id)
      console.log(DisplaySinglePost)
   
   

 

      const [formInfo, setFormInfo] = useState('')
  
      const updateField = (event) => {
        event.preventDefault()
          console.log(event.target.value)
          setFormInfo(event.target.value)
          

      }

     
      const formHandler = (event) => {
          event.preventDefault()
          console.log("Form submitted: ", formInfo)
  
          addComment(DisplaySinglePost,formInfo)
          setFormInfo(" ")
      }

  if(DisplaySinglePost){
    return (
      <div> 
         <h1> Single Post</h1>
              <img id="spImg" src={DisplaySinglePost.image_url} alt='postimg'></img>
              <p id ="Title">Title: {DisplaySinglePost.title} By {DisplaySinglePost.author}</p> 
              <p>Content: {DisplaySinglePost.text}</p>
              <button onClick={()=> addLike(DisplaySinglePost)}>Like {DisplaySinglePost.likes} </button> 
              <div>
              <p className="six columns">Comments:{DisplaySinglePost.comments.map(text=>(<li>{text}</li>))} </p>
       
               
     
             <form className="six columns" onSubmit={formHandler}>
              <label htmlFor="comment">add Comment</label>
              <input className="u-half-width" placeholder="enter comment" value={formInfo} onChange={updateField}></input>
              <button type="submit">Submit</button>
              </form>
              </div>
            
          
           
        
                   
           
            
              
    
           
              
   
      </div>
  )
    }
}

export default withRouter(SinglePost)