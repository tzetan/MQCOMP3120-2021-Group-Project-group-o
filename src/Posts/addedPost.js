import React from "react";
import { BrowserRouter as Router} from "react-router-dom";

//Display the post content if added successfully 
const AddedPoem = ({title, content,image_url}) => {
  return (
    <Router>
      <div id="addPost"> 
        <img width="420px" height="420px"  src={image_url} alt='postimg'></img>
        <h3>{title}</h3>
        <h5>{content}</h5>
    
      </div>
    </Router>
  )
}

export default AddedPoem