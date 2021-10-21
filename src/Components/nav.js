import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
    
    const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
    console.log(user)

    return (
        <div className="myNav">
            <ul className="nav-Links">
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/posts">
                <li>Posts</li>
              </Link>

              {isAuthenticated && (
                <>
                <Link to="/add_post">
                    <li>Add Post</li>
                </Link>

                <strong>Logged in as {user.nickname},  
                    <button onClick={() => logout()}>Log Out?</button>
                </strong>

                </>
              )}

              {!isAuthenticated && (
                <button onClick={() => loginWithRedirect()}>Log In</button>
              )}

            </ul>
        
        </div>
    );
}

export default Nav;
