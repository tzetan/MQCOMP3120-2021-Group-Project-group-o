import React from "react";
import { BrowserRouter as Router} from "react-router-dom";


const AddedPoem = ({title, content,picUrl}) => {


  return (
    <Router>
      <div> 
        <img width="600px" height="590px"  src={picUrl}></img>
        <h3>{title}</h3>
        <h5>{content}</h5>
    
      </div>
    </Router>
  )

}

export default AddedPoem