import React, { useState } from 'react';

const App5 = () => {
    const initialState = { name: "", age: null, email: "" };

    const handleSubmit = (evt) => { console.log("evt", evt) }

    const handleInput = (event) => { console.log("evt", event) }

    return (
        <div style={{ marginTop: 25 }}>
            <form onSubmit={handleSubmit} onChange={handleInput}>
                <input id="name" type="text"
                    placeholder="Name" />
                <br />
                <input id="age" type="number"
                    placeholder="Age" />
                <br />
                <input id="email" type="text"
                    placeholder="email" />
                <br />
                <button >Submit</button>
            </form>
        </div>
    );
}

export default App5;


