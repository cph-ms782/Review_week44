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
            <h3>Forms and Controlled Components</h3>
            <form onSubmit={handleSubmit} onChange={handleChange}>
                <label>
                    Name:
    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            {name}
            <p>Could get onSubmit to fire. So Submit button doesn't work</p>
            <p>But onChange works fine when typing</p>
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
