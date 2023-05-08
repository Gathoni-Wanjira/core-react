import React from "react";
import Tweet from "./Tweet";


function App () {


  return(
    <div className="app">
      <Tweet
        name = "Mark Robinson"
         message = "Space X is such a great company!"
         likes = "754 Likes" />
      <Tweet 
       name = "Lucia Wayne" 
       message = "Its such a sunday day here in Texas!"
       likes = "564 Likes" />
      <Tweet 
       name = "Nonzie Albert" 
       message = "Damn everyone should just go to Therapy!"
       likes = "487 Likes" />
      <Tweet  
      name = "Amigoscode Ali"
       message = "Javascript is the best launguage!"
       likes = "591 Likes" />
    </div>
  );
}

export default App;