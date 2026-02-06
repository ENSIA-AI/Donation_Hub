import { useEffect, useState } from "react";
import "../styles/dashMessages.css";
import "../styles/dashCampaigns.css";
import "../styles/AdminDashStat.css";
import SearchBar from "../components/SearchBar";
import MessageCard from "../components/MessageCard";
import Sidebar from "../components/Sidebar";

const DashMessages = () => {
  const [messages, setMessages] = useState([]);
  const [displayedCount, setDisplayedCount] = useState(5);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch messages from Laravel backend
  const fetchMessages = () => {
    setLoading(true);
    fetch("http://localhost:8000/api/messages")
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.data || data);
        setError("");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load messages");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // Mark message as read
  const handleMarkRead = (id) => {
    fetch(`http://localhost:8000/api/messages/${id}/read`, { method: "PATCH" })
      .then(() => fetchMessages())
      .catch((err) => console.error(err));
  };

  // Delete message
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/api/messages/${id}`, { method: "DELETE" })
      .then(() => fetchMessages())
      .catch((err) => console.error(err));
  };

  // Get displayed messages
  const displayedMessages = messages.slice(0, displayedCount);
  const hasMoreMessages = displayedCount < messages.length;

  // Handle show more
  const handleShowMore = () => {
    setDisplayedCount((prev) => prev + 5);
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

              {/* Loading State */}
              {loading && (
                <p className="loading-message">Loading messages...</p>
              )}

              {/* Error State */}
              {error && <p className="error-message">{error}</p>}

              {/* No Messages */}
              {!loading && messages.length === 0 && (
                <p className="no-messages">No messages yet.</p>
              )}

              {/* Messages List */}
              {!loading && messages.length > 0 && (
                <>
                  {displayedMessages.map((msg) => (
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

                  {/* Show More Button */}
                  {hasMoreMessages && (
                    <div className="show-more-container">
                      <button
                        className="show-more-button"
                        onClick={handleShowMore}
                      >
                        +
                      </button>
                    </div>
                  )}

                  {/* All Loaded Message */}
                  {displayedCount >= messages.length && messages.length > 5 && (
                    <div className="all-loaded-message">
                      <p>All {messages.length} messages loaded</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashMessages;
