import React, {useState} from 'react'
import LoginForm from './LoginForm'

function Login() {
    const [user, setUser] = useState(null)
    return (
        <div className="Loginrow">
          <LoginForm user={user} setUser={setUser}/>
        </div>
    );
}
export default Login;