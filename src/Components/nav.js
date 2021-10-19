import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function Nav() {
    return (
        <div className="myNav">
            <ul className="nav-Links">
              <Link to="/">
                <li>Home</li>
              </Link>

              <Link to="/posts">
                <li>Posts</li>
              </Link>

              <Link to="/add_post">
                <li>Add Post</li>
              </Link>
              
            </ul>
        
        </div>
    );
}

export default Nav;
