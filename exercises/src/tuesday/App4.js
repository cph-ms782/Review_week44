import React, { useState, useEffect } from 'react';
import '../App.css';

// week 44 tuesday

function App4() {

    const [time, setTime] = useState("");
    console.log(time);
    useEffect(() => {
        const interval = setInterval(() => {

            console.log("Time");
            setTime(getTime);
        }, 1000
        );

        return () => clearInterval(interval);
    });

    function Time() {
        return (
            getTime()
        )
    }

    const getTime = () => {
        const hours = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();

        const tim = { hours, min, sec }
        const time = "" + tim.hours + ":" + tim.min + ":" + tim.sec;
        return time;
    }

    return (
        <div className="App4">
            <h2>Exercise 2 tuesday</h2>
            <h3>State and Events with React</h3>
            <h4>Time is: <Time /></h4>
        </div>
    )
}

export default App4;