import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './monday/App';
import App2 from './monday/App2'
import App3 from './tuesday/App3'
import App4 from './tuesday/App4'
import AppJokes from './tuesday/AppJokes'
import ListDemoApp from './tuesday/ListDemoApp'
import ListDemoApp2 from './tuesday/ListDemoApp2'
import App5 from './wednesday/App5'
import FormDemo from './wednesday/FormDemo'
import FormDemoMultiple from './wednesday/FormDemoMultiple'

let app = <ListDemoApp2 />

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
            <a href="/" className="x" id="app1">Exercise 1</a> &nbsp;
         <a href="/" className="x" id="app2">Exercise 2</a> &nbsp;
         <a href="/" className="x" id="app3">Exercise 1 (tues)</a> &nbsp;
         <a href="/" className="x" id="app4">Exercise 2 (tues)</a> &nbsp;
         <a href="/" className="x" id="appjokes">Exercise 3 (tues)</a> &nbsp;
         <a href="/" className="x" id="listdemoapp">List and Keys Exercise 1 (tues)</a> &nbsp;
         <a href="/" className="x" id="listdemoapp2">List and Keys Exercise 2 (tues)</a> &nbsp;
         <a href="/" className="x" id="formdemo">Exercise 1 (wed)</a> &nbsp;
         <a href="/" className="x" id="formdemomultiple">Exercise 2 (wed)</a> &nbsp;
         <a href="/" className="x" id="app5">Lifting State Up (wed)</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
            <h1>Exercises Week 44</h1>
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
        case "appjokes": app = <AppJokes />; break;
        case "listdemoapp": app = <ListDemoApp />; break;
        case "listdemoapp2": app = <ListDemoApp2 />; break;
        case "app5": app = <App5 />; break;
        case "formdemo": app = <FormDemo />; break;
        case "formdemomultiple": app = <FormDemoMultiple />; break;
        default: app = <App3 number={2} />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));