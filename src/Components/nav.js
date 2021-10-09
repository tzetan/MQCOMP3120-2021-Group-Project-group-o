import React from 'react';
import {Link} from "react-router-dom";
import '../App.css';

function Nav() {
    return (
        <div className="myNav">
            <ul className="nav-Links">
              <Link to="/">
                <li><a>Home</a></li>
              </Link>

              <Link to="posts">
                <li><a>Posts</a></li>
              </Link>

              <Link to="add_post">
                <li><a>Add Post</a></li>
              </Link>
              
            </ul>
        
        </div>
    );
}

export default Nav;
