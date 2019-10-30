import React from 'react';
import './App.css';
// 2)
import person, { males, females } from "./file2";

// 3)
const { firstName, email } = person;

function App2() {
    return (
        <div className="App">
            <h2>Exercise 2 monday</h2>
            <h3>Object and Array Destructuring</h3>
            <h4>4.</h4>
            <p>Firstname: {firstName}, Email: {email}</p>
        </div>
    );
}
//6
console.log([...males, ...females])
console.log([...males, "Kurt", "Helle", ...females, "Tina"])

// const personV2 = [...person, [...males, ...females]]
// console.log(personV2)

export default App2;