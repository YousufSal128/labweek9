import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const title = "Welcome to Fullstack Development - I";
  const subtitle = "React JS Programming Week09 Lab exercise";
  const studentId = "101298914";
  const name = "Yousuf Salihi";
  const college = "George Brown College, Toronto";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React Logo" />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{studentId}</p>
        <p>{name}</p>
        <p>{college}</p>
      </header>
    </div>
  );
}

export default App;
