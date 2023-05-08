import React from "react";

// When i click the hello button its supposed to call the onclick sayHello function which should now printout hello at the back of the inspect cod
// Always remember that the function name is the  component name.

function Hello() {

    const sayHello = () => {
        console.log('hello');
    };

    return (
        <div>
            <h3>Thi is the Hello Component!</h3>
            <button onClick = {sayHello}> Say Hello</button>
        </div>

    )
}

export default Hello;