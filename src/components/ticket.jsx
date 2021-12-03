import React, { useState } from "react";
import './ticket.scss';
import leftArrow from "../assets/images/left-arrow.png";
import rightArrow from "../assets/images/right-arrow.png";

const Ticket = () => {    
    
    let ticketStyles = "ticket"
    const [ticketCount, setCount] = useState(0);
    //ticketCount = 0

    if(ticketCount < 1){
        ticketStyles = "ticket complete"
    } else if(ticketCount <= 3 && ticketCount > 0) {
        ticketStyles = "ticket outstanding"
    } else if(ticketCount > 3) {
        ticketStyles = "ticket behind"
    }

    const handleIncrement = () => {       
            setCount(ticketCount + 1);       
    };

    const handleDecrement = () => {
        if (ticketCount > 0) {
            setCount(ticketCount - 1);
        }
    };
    
    return <div className={ticketStyles}>
    <img 
        onClick={handleDecrement}
        src={leftArrow} alt="" className="arrow" />
        <p>{ticketCount}</p>
        <img 
        onClick={handleIncrement}
        src={rightArrow} alt="" className="arrow" />
    </div>;
    //<button className="op">subract ticket</button><button className="op">add ticket</button>
}

export default Ticket