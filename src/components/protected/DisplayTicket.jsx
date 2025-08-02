import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { URL__TICKET_DETAILS } from "../../utils/URLs"
import AuthContext from "../../contexts/AuthContext";
import Header from "../Header"
import { IoMdSend } from "react-icons/io";

import "./style.css"

const DisplayTicket = () => {

    const [ticketData , setTicketData] = useState(null);

    const authContext = useContext(AuthContext);

    useEffect(() => {
        // axios.post(URL__TICKET_DETAILS,null, {
        //         headers: {
        //             Authorization: `Bearer ${authContext?.token}`,
        //         },
        // }).then((response)=>{
        //     setTicketData(response.data);
        // })

        setTicketData({
            id: 1,
            title: "Unable to login to dashboard",
            description: "I keep getting a 401 error when trying to login.",
            category: "Technical",
            status: "open",
            assignedTo: "Aarav",
            reply: "Hi, thanks for reporting this. A 401 error usually indicates an authentication issue. Please make sure you're using the correct credentials and that your account is verified. Let me know if the issue persists after trying that.",
            createdAt: "2025-07-28",
            updatedAt: "2025-07-29"
        })
    }, [])
    

    return (
        <>
            <Header/>

            <div className="ticketDisplayContainer">
                <div>
                    <div>
                        <h1>{ticketData?.title}</h1>
                        <div><span>Created at:</span> {ticketData?.createdAt} </div>
                        <div><span>Updated at:</span> {ticketData?.updatedAt} </div>
                    </div>

                    <div className="messages">
                        <div className="description sent">{ticketData?.description}</div>

                        <div className="reply">
                            <div className="customerSupportAgentProfile">
                                <div className="agentName"><span>Agent name:</span> {ticketData?.assignedTo}</div>
                            </div>
                            {ticketData?.reply}
                        </div>

                    </div>

                </div>
                <div className="bottomBar">

                    <div className="chat">
                        <input type="text" placeholder="enter message." />
                        <IoMdSend />
                    </div>

                    <div>
                        <div className="status"
                            style={{color:ticketData?.status === "open"
                                ? "green"
                                : ticketData?.status === "in progress"
                                ? "orange"
                                : ticketData?.status === "resolved"
                                ? "gray"
                                : ticketData?.status === "closed"
                                ? "tomato"
                                : "black", // default/fallback
                            }}>
                        
                            <span style={{backgroundColor:ticketData?.status === "open"
                                    ? "green"
                                    : ticketData?.status === "in progress"
                                    ? "orange"
                                    : ticketData?.status === "resolved"
                                    ? "gray"
                                    : ticketData?.status === "closed"
                                    ? "tomato"
                                    : "black", // default/fallback
                                }}
                            ></span> 
                            {ticketData?.status}
                        </div>
                        <div className="tags">
                            <span>{ticketData?.category}</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default DisplayTicket