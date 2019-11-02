import React, { useState, useEffect } from 'react';
import '../App.css';
import AppDadJokes from './AppDadJokes'
import AppChuck from './AppChuck'
import facade from './jokesFacade'

// week 44 tuesday

function AppJokes() {

    const [fact, setFact] = useState("");
    const [joke, setJoke] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {

            console.log("joke");
            const getDadJokes = async () => {
                try {
                    const data = await facade.getDadJokes();
                    console.log("data", data);
                    setJoke(data.joke);
                } catch (err) {
                    console.log("err", err);
                }
            }
            getDadJokes();
        }, 10000
        );

        return () => clearInterval(interval);
    });

    const handleChuck = (e) => {
        console.log("handleChuck");
        e.preventDefault();
        const getFacts = async () => {
            console.log("getFacts");
            try {
                const data = await facade.getChuckFacts();
                console.log("data", data);
                setFact(data.value);
            } catch (err) {
                console.log("err", err);
            }
        }
        getFacts();
    }

    return (
        <div className="AppJokes">
            <h2>Exercise 3 tuesday</h2>
            <h3>State and Events with React</h3>
            <form>
                <button onClick={handleChuck}>Get ChuckNorris</button>
            </form>
            <AppChuck fact={fact} />
            <br />
            <AppDadJokes joke={joke} />
        </div>
    )
}

export default AppJokes;