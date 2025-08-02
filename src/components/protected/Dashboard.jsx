import { useContext, useEffect, useState } from "react";
import Header from "../Header";
import TicketCard from "../TicketCard";
import "./style.css"
import axios from "axios";
import { URL__TICKETS } from "../../utils/URLs";
import AuthContext from "../../contexts/AuthContext";


const Dashboard = () => {

  const authContext = useContext(AuthContext);

  const [cards , setCards] = useState(null);

  useEffect(() => {

    axios.post(URL__TICKETS,null, {
                headers: {
                    Authorization: `Bearer ${authContext?.token}`,
                }}
      ).then((response) => {
        setCards(response.data);
    })

    // setCards(
    //   [
    //     {
    //       id: 1,
    //       title: "Unable to login to dashboard",
    //       description: "I keep getting a 401 error when trying to login.",
    //       category: "Technical",
    //       status: "open",
    //       assignedTo: "Aarav",
    //       createdAt: "2025-07-28",
    //       updatedAt: "2025-07-29",
    //     },
    //     {
    //       id: 2,
    //       title: "Payment gateway not responding",
    //       description: "Tried making a payment but nothing happens after clicking submit.",
    //       category: "Billing",
    //       status: "in progress",
    //       assignedTo: "Meera",
    //       createdAt: "2025-07-25",
    //       updatedAt: "2025-07-30",
    //     },
    //     {
    //       id: 3,
    //       title: "Issue with OTP verification",
    //       description: "OTP not received even after multiple attempts.",
    //       category: "Security",
    //       status: "resolved",
    //       assignedTo: "Rohan",
    //       createdAt: "2025-07-22",
    //       updatedAt: "2025-07-28",
    //     },
    //     {
    //       id: 4,
    //       title: "Cannot download invoice",
    //       description: "The download button throws an error.",
    //       category: "Billing",
    //       status: "closed",
    //       assignedTo: "Sneha",
    //       createdAt: "2025-07-20",
    //       updatedAt: "2025-07-27",
    //     },
    //     {
    //       id: 5,
    //       title: "Feature request for dark mode",
    //       description: "Please add a dark mode for night usage.",
    //       category: "Feature Request",
    //       status: "open",
    //       assignedTo: "Nikhil",
    //       createdAt: "2025-07-19",
    //       updatedAt: "2025-07-20",
    //     },
    //     {
    //       id: 6,
    //       title: "Data not syncing",
    //       description: "My device isn't syncing data to the cloud.",
    //       category: "Technical",
    //       status: "in progress",
    //       assignedTo: "Anjali",
    //       createdAt: "2025-07-18",
    //       updatedAt: "2025-07-21",
    //     },
    //     {
    //       id: 7,
    //       title: "App crash on startup",
    //       description: "The app crashes every time I try to open it.",
    //       category: "Bug",
    //       status: "resolved",
    //       assignedTo: "Manav",
    //       createdAt: "2025-07-17",
    //       updatedAt: "2025-07-19",
    //     },
    //     {
    //       id: 8,
    //       title: "Change registered email",
    //       description: "I want to change my account email address.",
    //       category: "Account",
    //       status: "open",
    //       assignedTo: "Aisha",
    //       createdAt: "2025-07-15",
    //       updatedAt: "2025-07-16",
    //     },
    //     {
    //       id: 9,
    //       title: "Password reset link not working",
    //       description: "I click on the reset link but it says expired.",
    //       category: "Security",
    //       status: "closed",
    //       assignedTo: "Zaid",
    //       createdAt: "2025-07-10",
    //       updatedAt: "2025-07-12",
    //     },
    //     {
    //       id: 10,
    //       title: "Text overlap on mobile view",
    //       description: "Text overlaps in the mobile layout of the settings page.",
    //       category: "UI/UX",
    //       status: "in progress",
    //       assignedTo: "Neha",
    //       createdAt: "2025-07-08",
    //       updatedAt: "2025-07-09",
    //     },
    //     {
    //       id: 11,
    //       title: "Subscription not activating",
    //       description: "I paid but my account still shows free plan.",
    //       category: "Billing",
    //       status: "resolved",
    //       assignedTo: "Ravi",
    //       createdAt: "2025-07-07",
    //       updatedAt: "2025-07-08",
    //     },
    //     {
    //       id: 12,
    //       title: "Add option to delete account",
    //       description: "I don’t see a way to delete my account permanently.",
    //       category: "Feature Request",
    //       status: "open",
    //       assignedTo: "Isha",
    //       createdAt: "2025-07-06",
    //       updatedAt: "2025-07-06",
    //     },
    //     {
    //       id: 13,
    //       title: "UI glitch on dashboard",
    //       description: "Graph isn't rendering correctly after last update.",
    //       category: "Bug",
    //       status: "open",
    //       assignedTo: "Karan",
    //       createdAt: "2025-07-05",
    //       updatedAt: "2025-07-05",
    //     },
    //     {
    //       id: 14,
    //       title: "Language not saving",
    //       description: "Even after selecting Hindi, the app stays in English.",
    //       category: "Settings",
    //       status: "closed",
    //       assignedTo: "Fatima",
    //       createdAt: "2025-07-03",
    //       updatedAt: "2025-07-04",
    //     },
    //     {
    //       id: 15,
    //       title: "Account locked out",
    //       description: "Too many failed login attempts. Please unlock.",
    //       category: "Security",
    //       status: "in progress",
    //       assignedTo: "Dev",
    //       createdAt: "2025-07-01",
    //       updatedAt: "2025-07-02",
    //     },
    //   ]
    // );
  }, []);

  

  return (
    <>
      <Header/>

      <div className="cardsContainer">
        {cards?.map((ticket) => (
          <TicketCard
            key={ticket.id}
            title={ticket.title}
            description={ticket.description}
            category={ticket.category}
            status={ticket.status}
            assignedTo={ticket.assignedTo}
            createdAt={ticket.createdAt}
            updatedAt={ticket.updatedAt}
          />
        ))}
      </div>

    </>
  )
}

export default Dashboard