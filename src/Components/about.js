import React from 'react';
import {Link} from "react-router-dom";

function About() {
    return (
        <div className="App">
            <h1>Welcome!</h1>
            <br/>
            <br/>
            <br/>

            <h4>Share your thoughts with us and the rest of the world! Read other's blogs and intract with them.</h4>
            <h6>Let people know you like their writing and give them ideas.</h6>

            <h5>Click on <Link to="/api/posts">Posts</Link> to view some of our top Posts</h5>
        
        </div>
    );
}

export default About;
