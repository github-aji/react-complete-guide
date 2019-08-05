import React from 'react';
//Using ES6
//Make sure function name is in lower case.
//Arrow functions are used.
const person = (props)=>{
    return(
        <div>
     <p>I'm a {props.name} from Person class and I am {props.age}</p>
     <p>{props.children}</p>
     </div>
    )
};

export default person;

