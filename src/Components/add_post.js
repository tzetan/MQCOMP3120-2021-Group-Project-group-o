import React, { useState } from "react";
import "../App.css";
import AddedPost from "../Posts/addedPost";


const PoemForm = ({updateFn}) => {

    const initialState = {title: '', author: '', text: ''}

    const [formInfo, setFormInfo] = useState(initialState)
    const [title, setTitle] = useState('') 
    const [author, setAuthor] = useState('') 
    const [text, setText] = useState('') 

    const updateField = (event) => {
        const name = event.target.attributes.name.value
        console.log(name, event.target.value)
        if (name === "title") {
            setFormInfo({...formInfo, title: event.target.value})
        } else if (name === "author") {
            setFormInfo({...formInfo, author: event.target.value})
        } else if (name === "text") {
            setFormInfo({...formInfo, text: event.target.value})
        }
    }
    const [state, setState] = useState('start') 

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Form submitted: ", formInfo)

        setTitle(`${formInfo.title}`)
        setAuthor(`${formInfo.author}`)
        setText(`${formInfo.text}`)

        updateFn(formInfo)
        setFormInfo(initialState)
        alert(`Poem "${formInfo.title} ${formInfo.author}" is now added! Click OK to visit the Poem.`)
        setState('added')
    }
    

    return (
        <div>
            <br/>
        <form onSubmit={formHandler}>
            <ul id="add_form">
                <li>
                    <label htmlFor="title">Post Subject</label>
                    <br/>
                    <input name="title" onChange={updateField}></input>
                </li>
                <br/>
                <li>
                    <label htmlFor="author">Post Author</label>
                    <br/>
                    <input name="author" onChange={updateField}></input>
                </li>
                <br/>
                <li>
                    <label htmlFor="text">Text</label>
                    <br/>
                    <input name="text" onChange={updateField}></input>
                </li>
                <br/>
            </ul>

            <button type="submit">Submit</button>
        </form>
        {state === 'added' && (<AddedPost title={title} author={author} text={text} />)}
        </div>
    )
}

export default PoemForm