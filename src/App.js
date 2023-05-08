import React from "react";
import Hello from "./SayHello"; 


// You create a component by writing a function.
// When i click the hello button its supposed to call the onclick sayHello function which should now printout hello at the back of the inspect code.

function App () {

 


  return(
    <div>
      <h1>This is the app component.</h1>
     <Hello />
    </div>
  );
}

export default App;