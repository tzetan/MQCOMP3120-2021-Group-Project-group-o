import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";

//Displays a navigation bar on top of every page.
function Nav() {
    
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
    console.log(user)

    return (
        <div className="myNav">
            <ul className="nav-Links">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/Myposts">
                <li>My Posts</li>
              </Link>
              <Link to="/add_post">
                <li>Add Post</li>
              </Link>
              {isAuthenticated && (
                <>
              <Link to="/" onClick={() => logout()}>
                    <li>Log Out?</li>
              </Link>
                <div>
                    <img 
                        width="40px" height="40px" 
                        src={user.picture} 
                        alt="User Profile"
                        style={{borderRadius: "25px"}}
                        />
                    <div>
                        <strong >
                            Hi {user.name}, Welcome Back!
                        </strong>
                    </div>
                </div>
                </>
              )}

              {!isAuthenticated && (
                <Link to="/"  onClick={() => loginWithRedirect()}>
                    <li>Log In</li>
                </Link>
              )}
            </ul>
        </div>
    );
}

export default Nav;
