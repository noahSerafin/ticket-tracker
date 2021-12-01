import React from "react";
import './ticket.scss';

const Ticket = ({tickets, ticketStyles}) => {
    let ticketStyles = "ticket(s)"

    if (tickets > 0){
        ticketStyles += " outstanding";
    } else if (tickets === 0) {
        ticketStyles += " complete";
    } else if (tickets < 0) {
        ticketStyles += " ahead"
    }

    return <div className={ticketStyles}>{tickets}</div>;
    //<button className="op">subract ticket</button><button className="op">add ticket</button>
}

export default Ticket