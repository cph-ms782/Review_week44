import React, { useState, useEffect } from 'react';
import '../App.css';

// week 44 tuesday
//State and Events with React

function App3() {

    // 1c+1c.
    var oldNumber = localStorage.getItem("count");
    console.log("oldNumber", oldNumber)
    if (oldNumber === undefined) { oldNumber = 0 }
    return (
        <Help number={oldNumber} inc={5} />
    )
}

// 1d.
function Help(props) {
    useEffect(() => {
        console.log("saving old number in session")
        localStorage.setItem("count", count)
    });

    const inc = props.inc;
    const [count, setCount] = useState(props.number);
    return (
        <div className="App3">
            <h2>Exercise 1 tuesday</h2>
            <h3>State and Events with React</h3>
            <h4>1a.</h4>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + inc)}>
                1a. Increase
      </button>
            {/* 1b. */}
            <button onClick={() => setCount(count - inc)}>
                1b. Decrease
      </button>
        </div>
    );
}

export default App3;