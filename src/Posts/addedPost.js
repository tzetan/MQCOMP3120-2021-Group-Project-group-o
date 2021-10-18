import React from "react";
import { BrowserRouter as Router} from "react-router-dom";


const AddedPoem = ({title, author, text}) => {


  return (
    <Router>
      <div> 
        <h3>{title}</h3>
        <h5>{author}</h5>
        {text}
      </div>
    </Router>
  )

}

export default AddedPoem