
import React, { useState } from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom";
import postservice from '../route';

const Poem = ({poem, deleteFn}) => {

  const fetchPoem = (votes) => {
    console.log("Fetching...")
    postservice.specific(poem.id)
    .then((response) => {
      console.log("response:", response)
      response.votes = votes+1;
      console.log("votes added----:", response.votes)
      poem.votes = response.votes;
    })
  }

  const [num, setNum] = useState(poem.votes)

  const increment = () => {
      console.log("INNNNNNNNN", num)
      setNum(num+1)
      fetchPoem(num);
  }

  return (
    <Router>
      <div>
        
      <h3 key={poem.id}>
        <Link to={`/api/posts/${poem.id}`}>{poem.title}</Link>
      </h3>
      <h5>{poem.author}</h5>
      <button name="votes" onClick={increment}>Vote = {poem.votes} </button> 
      <button onClick={() => deleteFn(poem)}>Delete</button>
      </div>
    </Router>
  )

}

export default Poem