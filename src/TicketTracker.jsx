import "./ticketTracker.scss"
import EmployeeCards from "./components/employee";
//import Ticket from "./components/ticket";
import team from "./data/data";

const TicketTracker = () => {

    const rolesArr = team.filter(employee => {
        return employee.role;
    });

    const namesArr = team.filter(employee => {
        return employee.name;
    });

   return(
       <div className="app">
        <h1>Ticket Tracker</h1>
        <div className="employee-card-container">
           <EmployeeCards names={namesArr} roles={rolesArr}/>
        </div>
        </div>
    )    
}

export default TicketTracker;