import React from 'react';
// import './App.css';
 import Login from './components/Login'
 import Signup from './components/Signup'
 import { useRef } from 'react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Login />
      <Signup/>
      </header>
    </div>
  );
}

export default App;
