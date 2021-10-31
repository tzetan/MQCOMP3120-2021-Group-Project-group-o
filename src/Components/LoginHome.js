import React from 'react'
import LoginForm from './LoginForm'

//Displays login content for the Log In page.
const Login = ({user, setUser}) => {
    return (
        <div className="Loginrow">
          <LoginForm user={user} setUser={setUser}/>
        </div>
    );
}
export default Login;