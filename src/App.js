import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi,this is Ajith P</h1>
        <p>Elements are wrapped in a parent tag</p>
        <Person name='Ajith' age='32'/>
        <Person name='Clod' age='20'>My hobbies:Cricket</Person>
        <Person/>
        <Person/>s
      </div>      
    );
    //return React.createElement('div',{className: 'App'},React.createElement('h1','null',"This is my first React App"));
  }
}

export default App;
