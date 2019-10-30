import React, { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("evt.target.value", evt.target.value)
        setName(evt.target.value);
        console.log(name)
        alert(JSON.stringify(name));
    }

    return (
        <div>
            <h2>Exercise 1 wednesday</h2>
            <h3>Forms with React</h3>
            <h3>Forms and Controlled Components</h3>
            <form onChange={handleChange}>
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {name}
        </div>
    );
};

export default function FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}
