import React, { useState, useEffect } from "react";

// e.
const ListItem = (props) => {
    return <li>{props.value}</li>;
}

function NumberList({ numbers }) {
    console.log("--NUMBERS -->", numbers)
    // d. by placing a key in each list item react works better
    const listItems = numbers.map(number =>
        <ListItem key={number.toString()}
            value={number}
        />);
    return listItems;
}

// f.
const NumberTable = (props) => {
    console.log("NumberTable");
    console.log("props.value", props.numbre)
    var style = {
        margin: "auto"
    };
    return (
        <table style={style}>
            <tbody>
                <tr>
                    <td>{props.numbre}</td>
                </tr>
            </tbody>
        </table>);
}

function ListDemo(props) {
    console.log("props.numbers", props.numbers)
    return (
        <div>
            <h2>Exercise 1 tuesday</h2>
            <h3>List and Keys</h3>
            <h2>All numbers passed in via props</h2>
            <ul>
                <NumberList numbers={props.numbers} />
            </ul>
            <NumberTable numbre={props.numbers} />
        </div>
    );
}
export default function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4]);

    // g.
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("adding to array");
            numbers.push(numbers[numbers.length - 1] + 1);
            setNumbers([...numbers]);
        }, 5000
        );

        return () => clearInterval(interval);
    });

    return <ListDemo numbers={numbers} />;
}
