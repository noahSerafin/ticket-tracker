import React from "react";
import data from "../data/data";
import 'empolyee.scss';
import Ticket from "ticket";

const Empolyee = (props) => {

    data.team.forEach(i => {
        props.name = data.team[i].name;
        props.role = data.team[i].role;
    });    

    return (
        <div className="employee-card">
            <h3>{props.name}</h3>
            <h4>{props.role}</h4>
            <Ticket />
        </div>
    )
}

export default Empolyee;