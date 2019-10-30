import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'

let app = <App4 />

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" className="x" id="app1">Exercise 1</a> &nbsp;
         <a href="/" className="x" id="app2">Exercise 2</a> &nbsp;
         <a href="/" className="x" id="app3">Exercise 1 (tues)</a> &nbsp;
         <a href="/" className="x" id="app4">Exercise 2 (tues)</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
            <h1>Monday/tuesday week 44</h1>
            {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if (event.target.className !== "x") {
        return
    }
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app4": app = <App4 />; break;
        default: app = <App3 number={2} />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));