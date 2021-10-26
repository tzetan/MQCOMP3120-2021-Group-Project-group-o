import React, { useState } from "react";
import "../App.css";
import AddedPost from "../Posts/addedPost";
import {Link} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const PostForm = ({updateFn}) => {

    const initialState = {title: '', content: '', picUrl: ''}

    const [formInfo, setFormInfo] = useState(initialState)
    const [title, setTitle] = useState('') 
    const [content, setContent] = useState('') 
    const [picUrl, setpicUrl] = useState('') 

    const { user, loginWithRedirect } = useAuth0()

    const updateField = (event) => {
        const name = event.target.attributes.name.value
        console.log(name, event.target.value)
        if (name === "title") {
            setFormInfo({...formInfo, title: event.target.value})
        } else if (name === "content") {
            setFormInfo({...formInfo, content: event.target.value})
        } else if (name === "picUrl") {
            setFormInfo({...formInfo, picUrl: event.target.value})
        }
    }
    const [state, setState] = useState('start') 

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted: ", formInfo)

        setTitle(`${formInfo.title}`)
        setContent(`${formInfo.content}`)
        setpicUrl(`${formInfo.picUrl}`)

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
            <input className="u-full-width" placeholder="enter post title" name="title" onChange={updateField}></input>
                   
           
                 
            <label  htmlFor="content">Content</label>
                    
            <input className="u-full-width" placeholder="enter content" name="content" onChange={updateField}></input>
                
                  
            <label htmlFor="picUrl">PictureURL</label>
            <input className="u-full-width" placeholder="enter picture url" name="picUrl" onChange={updateField}></input>
              
              
    
            <button type="submit">Submit</button>
            </form>
            {state === 'added' && (<AddedPost title={title} content={content} picUrl={picUrl} />)}
            </div>
        )
    } else {
        return (
            <>
            <p>Login to uplaod the posts!</p>
            <Link to="/add_post"  onClick={() => loginWithRedirect()}>
                Log In
            </Link> 
            </>
        )
    }
}

export default PostForm