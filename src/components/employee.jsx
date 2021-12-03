import React from "react";
import './employee.scss';
import Ticket from "./ticket";

const EmployeeCards = (props) => {

    const {roles} = props;
    
    //console.log(roles)

    const employeeCards = roles.map((employee) => {
        return (
            <div className="employee-card">
                <h4>{employee.name}</h4>
                <p>{employee.role}</p>
                <Ticket />
            </div>
        )
    })
    
    return (
        employeeCards
    )    
}

export default EmployeeCards;