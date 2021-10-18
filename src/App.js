import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import postsHome from "./Components/PostsHome";
import Nav from "./Components/nav";
import About from "./Components/about";
import Login from "./Components/Login";
import Add_Post from "./Components/add_post";
import postService from './Services/route';


function App() {

  const [posts, setPosts] = useState([]);

  const addNewPost = (newPosts) => {
    postService.create(newPosts)
    .then(data => {
      console.log("POST response", data)
      setPosts([...posts, data])
      console.log("new things added", newPosts)
    }
   )
  }

  return (
    <Router>
        <div className="App">
            <Nav/>
            <Login/>
            
            <Route path="/" exact component={About}/> 

            <Route path="/add_post">
              <Add_Post updateFn={addNewPost}/>
            </Route>

            <Route path="/posts" exact component={postsHome}/> 
            

        </div>
      </Router>
  );
}

export default App;
