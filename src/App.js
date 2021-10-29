import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import PostsHome from "./Components/PostsHome";
import Nav from "./Components/nav";
import About from "./Components/about";
import PostForm from "./Components/add_post";
import postService from './Services/route';
import SinglePost from './Components/SinglePost';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const [posts, setPosts] = useState([])
//   const [user, setUser] = useState(null)
    const { user } = useAuth0()

  const addNewPost = (newPosts) => {
    postService.create(newPosts, user)
    .then(data => {
      console.log("POST response", data)
      setPosts([...posts, data])
      console.log("new things added", newPosts)
    }
   )
  }

 
  useEffect(() => {
    console.log("response:")
    postService.getAll()
    .then(data => {
      console.log("response: ", data)
      setPosts(data)
    })
  },
  [])

  const addComment= (post,formInfo) =>{
    console.log("addComment",post)
    console.log("addVote",formInfo)
      const newPost={...post,comments:post.comments.concat(formInfo)}
      console.log("updata likes in item",newPost)
 
        console.log("working")
        postService.update(newPost)
       .then(data=>{
        console.log("got response",data)
   
        setPosts(data)
      })
      
  
      
       
  }

  const addLike= (post) =>{
    console.log("addVote",post)
      const newPost={...post,likes:post.likes+1}
      console.log("updata likes in item",newPost)
      if(newPost.likes>=1){
        console.log("working")
        postService.update(newPost)
      .then(data=>{
        console.log("got response",data)
   
        setPosts(data)
      })
      }else{

      const newPost={...post,likes:1}
      console.log("updata vote in item",newPost)
      postService.update(newPost)
      .then(data=>{
      console.log("got response",data)
      setPosts(data)    
      })
      }
      
  }
  

  return (
    <Router>
        <div className="App">
            <Nav/>
            {/* <Login user={user} setUser={setUser}/> */}

            
            <Switch>
                
                <Route path="/posts/:id">
                <SinglePost post={posts} addComment={addComment} addLike={addLike}/>  
                </Route>

                <Route path="/add_post">
                    <PostForm user={user} updateFn={addNewPost}/>
                </Route>

                <Route path="/Myposts" > 
                    <PostsHome user={user}/>
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
