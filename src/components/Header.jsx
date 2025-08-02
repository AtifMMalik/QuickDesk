import LogoName from "./LogoName";
import "./style.css"
import { GoBell } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiPlusCircle } from "react-icons/fi";

const Header = () => {
    return (
        <header>
            <div className="topBar headerBars">
                <LogoName/>

                <div className="">
                    {/* <GoBell/> */}
                    <span id="userRole">Customer</span>
                </div>
            </div>

            <div className="actionsBar headerBars">
                <div className="searchBarContainer">
                    <input type="text" className="searchBar" placeholder="Search" />
                    <FaSearch />
                </div>

                <div>

                    <Link to={"/createTicket"} className="createTicketBtn">
                        Create Ticket
                        <FiPlusCircle />
                    </Link>

                    <select name="status" id="statusFilter">
                        <option value="" disabled selected>status</option>

                        <option value="all">all</option>
                        <option value="open">open</option>
                        <option value="in progress">in progress</option>
                        <option value="resolved">resolved</option>
                        <option value="closed">closed</option>
                    </select>
                </div>
                
                
                {/* <input type="text" /> */}
            </div>        
        </header>
    )
}

export default Header