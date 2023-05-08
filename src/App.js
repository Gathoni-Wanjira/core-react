import React from "react";
import Tweet from "./Tweet";


function App () {


  return(
    <div className="app">
      <Tweet  name = "Mark Robinson" message = "Space X is such a great company!"/>
      <Tweet  name = "Lucia Wayne" message = "Its such a sunday day here in Texas!"/>
      <Tweet  name = "Nonzie Albert" message = "Damn everyone should just go to Therapy!"/>
      <Tweet  name = "Amigoscode Ali" message = "Javascript is the best launguage!"/>
    </div>
  );
}

export default App;