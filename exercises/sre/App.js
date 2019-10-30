import React from 'react';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";

function App() {
  return (
    <div className="App">
      <h2>Exercise 1 monday</h2>
      <h3>Understanding ES6 Modules – import and export</h3>
      <h4>b.</h4>
      <p>text1: {text1}</p>
      <p>text2: {text2}</p>
      <p>text3: {text3}</p>
      <p>upper("please uppercase me"): {upper("please uppercase me")}</p>
    </div>
  );
}

export default App;
