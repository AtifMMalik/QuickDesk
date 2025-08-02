import { Link } from "react-router-dom";
import "./style.css"

const TicketCard = ({title, description, category, status, assignedTo, createdAt, updatedAt}) => {
    return (
        <Link to={"/DisplayTicket"} className="ticketCard">
            <div>
                <h2>{title}</h2>
                
                <div className="assignedTo"><span>Assigned To :</span>{assignedTo}</div>
                
                <div className="tags">
                    <span>{category}</span>
                </div>
            </div>

            <div>
                
                <div className="status"
                    style={{color:status === "open"
                        ? "green"
                        : status === "in progress"
                        ? "orange"
                        : status === "resolved"
                        ? "gray"
                        : status === "closed"
                        ? "tomato"
                        : "black", // default/fallback
                    }}>
                
                    <span style={{backgroundColor:status === "open"
                            ? "green"
                            : status === "in progress"
                            ? "orange"
                            : status === "resolved"
                            ? "gray"
                            : status === "closed"
                            ? "tomato"
                            : "black", // default/fallback
                        }}
                    ></span> 
                    {status}
                </div>
                
                <div className="createdAt time"><span>Created at : </span>{createdAt}</div>
                <div className="updatedAt time"><span>Updated at : </span>{updatedAt}</div>
            </div>
        </Link>
    )
}

export default TicketCard;