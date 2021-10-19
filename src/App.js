import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import PostsHome from "./Components/PostsHome";
import Nav from "./Components/nav";
import About from "./Components/about";
import Login from "./Components/Login";
import PoemForm from "./Components/add_post";
import postService from './Services/route';
import SinglePost from './Components/post';


function App() {

  const [posts, setPosts] = useState([])
  const [user, setUser] = useState(null)

  const addNewPost = (newPosts) => {
    postService.create(newPosts, user)
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
            <Login user={user} setUser={setUser}/>

            
            <Switch>
                
                <Route path="/posts/:id">
                    <SinglePost />
                </Route>

                <Route path="/add_post">
                    <PoemForm updateFn={addNewPost}/>
                </Route>

                <Route path="/posts" > 
                    <PostsHome />
                </Route>
                
                <Route path="/"> 
                    <About/>
                </Route>

            </Switch>

        </div>
      </Router>
  );
}

export default withRouter(App);
