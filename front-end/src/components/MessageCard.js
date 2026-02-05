import React, { useState } from "react";
import "../styles/dashMessages.css";

const MessageCard = ({
  user,
  datetime,
  email,
  content,
  initialStatus,
  markRead,
  deleteMessage,
}) => {
  const [status, setStatus] = useState(initialStatus);

  const handleMarkRead = () => {
    if (status === "read") return;
    markRead();
    setStatus("read");
  };

  return (
    <div className={`message-card ${status}`}>
      <div className="message-header">
        <div className="user-info">
          <h3>{user}</h3>
          <span>{email}</span>
        </div>
        <div className="status-time">
          <span className={`status-badge ${status}`}>
            {status === "read" ? "Read" : "Unread"}
          </span>
          <span className="datetime">{datetime}</span>
        </div>
      </div>

      <div className="message-body">
        <p className="message-content">{content}</p>
        <div className="message-settings">
          <button
            className={`message-btn read-btn ${status}`}
            onClick={handleMarkRead}
            disabled={status === "read"}
          >
            {status === "read" ? "Read" : "Mark Read"}
          </button>
          <button className="message-btn delete-btn" onClick={deleteMessage}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
