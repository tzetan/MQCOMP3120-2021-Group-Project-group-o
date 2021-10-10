import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Poem from "./post";
import postservice from '../Services/route';


const PostsHome = () => {
  
  const [posts, setposts] = useState([]);

  useEffect(() => {
    console.log("response:")
    postservice.getAll()
    .then(data => {
      console.log("response: ", data)
      setposts(data)
    })
  },
  [])

  const deletePoem = (poem) => {
    console.log("delete", poem)
    postservice.delete(poem.id)
    .then(data => {
      console.log("delete successfully")
      const newposts = posts.filter(u => u.id !== poem.id)
      setposts(newposts)
    })
  }

  console.log("response:")
  return (
    <Router>
      <div className="App">
          <div>
            <h1 styles="text-align: center;">Poetry</h1>
          </div>
          <br/>
          
          <ul>
            {posts.map((poem) => (
              <Poem key={poem.id} poem={poem} deleteFn={deletePoem}/>  
            ))}
          </ul>
          
      </div>
    </Router>
  );
}

export default PostsHome;
