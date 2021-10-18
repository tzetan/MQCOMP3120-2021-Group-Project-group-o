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
                setErrorMessage("")
        })
        .catch(error => {
            console.log("Login Error", error)
            setErrorMessage("Wrong username and/or password. Please try again.")
        })
    
    }

    const logoutHandler = () => {
        setUser(null)
    }

    if (user) {
        return (
            <div className="row">
                <p>Logged in As {user.username}
                    <button onClick={logoutHandler}>Logout</button>
                </p>
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
                       
                     
                            <input type="submit" value="Login"/>
                            {errorMessage && <div className="error">  {errorMessage} </div>}
                    </div>
            </form> 
            )
    }

}
export default LoginForm