import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import Nav from './components/Nav';
import Viewer from './components/Viewer';


function App() {

 
  return (
    <div className="App">
    <h1>TypeScript Note</h1>
        <div className="grid-x">
          <div className="cell small-2">
            <Nav />
          </div>
          <div className="cell small-8">
            <Viewer />
          </div>
        </div>
    </div>
  );
}

export default App;
