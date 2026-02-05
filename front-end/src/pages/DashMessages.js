import { useEffect, useState } from "react";
import "../styles/dashMessages.css";
import "../styles/dashCampaigns.css";
import "../styles/AdminDashStat.css";
import SearchBar from "../components/SearchBar";
import MessageCard from "../components/MessageCard";
import Sidebar from "../components/Sidebar";
const DashMessages = () => {
  const [messages, setMessages] = useState([]);

  // Fetch messages from Laravel backend
  const fetchMessages = () => {
    fetch("http://localhost:8000/api/messages") // replace with your backend URL
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Mark message as read
  const handleMarkRead = (id) => {
    fetch(`http://localhost:8000/api/messages/${id}/read`, { method: "PATCH" })
      .then(() => fetchMessages()) // refresh messages
      .catch((err) => console.error(err));
  };

  // Delete message
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/messages/${id}`, { method: "DELETE" })
      .then(() => fetchMessages()) // refresh messages
      .catch((err) => console.error(err));
  };

  return (
   <section id="dash_section">
      <div className="fluid_container flex-row">
        {/* ===============================start sidebar ============================= */}
        <Sidebar />
        {/* ===============================end sidebar ============================= */}

        {/* ===============================dash content  ============================= */}
        <div className="dash_stat_content dash_stat_container">
        <div className="full-page-container">
         
          <div className="messages-container">
            <h1>Messages</h1>
            {messages.length === 0 && <p>No messages yet.</p>}
            {messages.map((msg) => (
              <MessageCard
                key={msg.id}
                user={`${msg.fname} ${msg.lname}`}
                datetime={new Date(msg.created_at).toLocaleString()}
                email={msg.email}
                content={msg.message}
                initialStatus={msg.status}
                markRead={() => handleMarkRead(msg.id)}
                deleteMessage={() => handleDelete(msg.id)}
              />
            ))}
          </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default DashMessages;
