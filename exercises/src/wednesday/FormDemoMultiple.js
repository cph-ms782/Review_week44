import React, { useState } from "react";

function ReservationForm() {

    //css
    const tStyle = {
        textAlign: 'justify',
        fontWeight: 'bold'
    };
    const tNorm = {
        fontWeight: 'normal',
        color: 'red'
    };

    const initialValue = {
        payByCreditCard: true,
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        zip: "",
        country: ""
    };
    const [reservation, setReservation] = useState(initialValue);

    const handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        setReservation({ ...reservation, [name]: value });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        window.alert(JSON.stringify(reservation))
    }
    return (
        <div>
            <form>
                <h2>Exercise 2 wednesday</h2>
                <h3>Forms with React</h3>
                <h3>Handling multiple inputs</h3>
                <label>Pay by Credit Card: </label>
                <input
                    name="payByCreditCard"
                    type="checkbox"
                    checked={reservation.payByCreditCard}
                    onChange={handleChange}
                />
                <br />
                <input
                    name="firstName"
                    value={reservation.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                />
                <input
                    name="lastName"
                    value={reservation.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                />
                <input
                    name="email"
                    value={reservation.email}
                    onChange={handleChange}
                    placeholder="email"
                />
                <input
                    name="phone"
                    value={reservation.phone}
                    onChange={handleChange}
                    placeholder="phone"
                />
                <input
                    name="street"
                    value={reservation.street}
                    onChange={handleChange}
                    placeholder="street"
                />
                <input
                    name="city"
                    value={reservation.city}
                    onChange={handleChange}
                    placeholder="city"
                />
                <input
                    name="zip"
                    value={reservation.zip}
                    onChange={handleChange}
                    placeholder="zip"
                />
                <input
                    name="country"
                    value={reservation.country}
                    onChange={handleChange}
                    placeholder="country"
                />
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <p>{JSON.stringify(reservation)}</p>
            <br />
            <br />
            <br />
            <ul style={tStyle}>
                <li>In a Controlled Component React state is made the "Single source of truth", so how:</li>
                <ul>
                    <li>Do we ensure that input controls like text, textarea or select always presents the value found in the components state?</li>
                    <p style={tNorm}>By attaching an ID to input tag, to be filtered out later</p>
                    <li>Do we ensure that a controls state, always matches the value found in an input control?</li>
                    <p style={tNorm}>By attaching an event handler that updates the state which also updates the inputs valyue through value=stateValue</p>
                </ul>
                <li>What is the purpose of doing event.preventDefault() in an event handler?</li>
                <p style={tNorm}>Forms has a build in behaviour of reloading page. Not the way a SPA should work</p>
                <li>What would be the effect of NOT doing event.preventDefault in a submit handler</li>
                <p style={tNorm}>Page reloads</p>
                <li>Why don't we want to submit the traditional way, in a single page application?</li>
                <p style={tNorm}>We want to remain on the client and not go to the server. It prevents a blinking page</p>
                <li>Explain in words what it takes to implement the "Controlled Component" pattern for a form</li>
                <p style={tNorm}>Why not in morsecode: -....- -.. ---.....-  ;-)</p>
                <p style={tNorm}>A single source of truth keeps a tap on data received from forms and updates values when changes occur </p>
            </ul>


        </div >
    );
}
export default ReservationForm;