import React from 'react'
import LoginForm from './LoginForm'

const Login = ({user, setUser}) => {
    return (
        <div className="Loginrow">
          <LoginForm user={user} setUser={setUser}/>
        </div>
    );
}
export default Login;