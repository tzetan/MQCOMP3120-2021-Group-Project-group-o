import React, { useState } from "react";
import "../App.css";
import AddedPost from "../Posts/addedPost";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

//Returns a form to allow users to add a post.
const PostForm = ({updateFn}) => {

    const initialState = {title: '', content: '', image_url: '', author: ''}
    const [formInfo, setFormInfo] = useState(initialState)
    const [title, setTitle] = useState('') 
    const [content, setContent] = useState('') 
    const [image_url, setimage_url] = useState('')  
    const { user, loginWithRedirect } = useAuth0()

    const updateField = (event) => {
        const name = event.target.attributes.name.value
        console.log(name, event.target.value)
        if (name === "title") {
            setFormInfo({...formInfo, title: event.target.value, author: user.name})
        } else if (name === "content") {
            setFormInfo({...formInfo, content: event.target.value})
        } else if (name === "image_url") {
            setFormInfo({...formInfo, image_url: event.target.value})
        }
    }
    
    const [state, setState] = useState('start') 
    
    const formHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted: ", formInfo)
        
        setTitle(`${formInfo.title}`)
        setContent(`${formInfo.content}`)
        setimage_url(`${formInfo.image_url}`)

        updateFn(formInfo)
        setFormInfo(initialState)
        alert(`Poem "${formInfo.title}" is now added! Click OK to visit the Poem.`)
        setState('added')
    }
    
    if(user){
        return (
            <div>
                <br/>
            <form onSubmit={formHandler}>
               
            <label htmlFor="title">Post Subject</label>
            <input className="u-half-width" placeholder="Enter Post Title" name="title" onChange={updateField}></input>
                      
            <label  htmlFor="content">Content</label>
                    
            <input className="u-half-width" placeholder="Enter Content" name="content" onChange={updateField}></input>
                  
            <label htmlFor="image_url">PictureURL</label>
            <input className="u-half-width" placeholder="Enter Picture URL" name="image_url" onChange={updateField}></input>
              
             <br></br> 
    
            <button type="submit">Submit</button>
            </form>
            {state === 'added' && (<AddedPost title={title} content={content} image_url={image_url} />)}
            </div>
        )
    } else {
        return (
            <>
            <p>Login to upload the posts!</p>
            <Link to="/add_post"  onClick={() => loginWithRedirect()}>
                Log In
            </Link> 
            </>
        )
    }
}

export default PostForm