import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <SayFullName name = "Irina" surname = "Z" link = "vk.com" />
          <SayFullName name = "Vasya" surname = "N" link = "ok.com" />
          <SayFullName name = "Dima" surname = "A" link = "vk.com" />
        </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Name: { props.name }, surname: { props.surname }</h1>
        <a href={props.link}>Link</a>
      </div>
  )
}


export default App;
