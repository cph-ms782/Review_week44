import React, { useState } from "react";


function MemberTable({ members }) {
    var style = {
        margin: "auto"
    };
    // b.
    return (
        <table style={style} >
            <thead><tr><th>Name</th><th>Age</th></tr></thead>
            <tbody>
                {members.map(member => (
                    <tr key={member.name + member.age}><td>{member.name}</td><td>{member.age}</td></tr>
                ))}
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div >
            <h4>All Members</h4>
            //c.
            <MemberTable members={props.members} />
        </div>
    );
}

export default function ListDemoApp2() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Jan", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Martin", age: 22 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}
