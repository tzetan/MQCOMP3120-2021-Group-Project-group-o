import React, {useState} from 'react'
import postservice from '../Services/route';

const LoginForm = ({user, setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('');

    const formHandler = (event) => {
        event.preventDefault()
        console.log("Submitted Form", username, password)
    
        postservice.login({username, password})
        .then(data => {
                console.log("Login Success:", data)
                setUser(data)
        })
        .catch(error => {
            console.log("Login Error", error)
        })
    
    }
    const handleClick = () => {
            setErrorMessage("Wrong username and/or password. Please try again.")
        }
    if (user) {
        return (
            <div className="row">
            
                <p>Loggggged in {user.username}</p>
            </div>
        )
    } else {
        return (
            <form onSubmit={formHandler}>
                    <div className="row">
                        
                            <label htmlFor="username">Username</label>
                            <input id="username" type="text" name="username" onChange={e => setUsername(e.target.value)} />
                        
                        
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} />
                       
                     
                            <input onClick ={handleClick} type="submit" value="Login"/>
                            {errorMessage && <div className="error">  {errorMessage} </div>}
                    </div>
            </form> 
            )
    }

}
export default LoginForm