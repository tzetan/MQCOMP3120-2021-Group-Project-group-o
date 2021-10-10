import './App.css';
import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import postsHome from "./Components/PostsHome";
import Nav from "./Components/nav";
import About from "./Components/about";
import Login from "./Components/Login"


function App() {
  return (
    <Router>
        <div className="App">
            <Nav/>
            <Login/>
            
            <Route path="/" exact component={About}/> 

            <Route path="/posts" exact component={postsHome}/> 

        </div>
      </Router>
  );
}

export default App;
