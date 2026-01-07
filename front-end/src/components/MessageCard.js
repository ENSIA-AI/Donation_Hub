import React, { useState } from "react";

const MessageCard = ({ user, datetime, email, content, initialStatus }) => {
  const [status, setStatus] = useState(initialStatus); // 'read' or 'unread'

  const markRead = () => {
    if (status === "read") return;
    setStatus("read");
  };

  return (
    <div className="message-card">
      <div className="message-header">
        <div className="info"><i className="fas fa-user"></i> {user}</div>
        <div className="info"><i className="fas fa-clock"></i> {datetime}</div>
        <div className="info"><i className="fas fa-envelope"></i> {email}</div>
        <div className={`status ${status}`}>
          {status === "read" ? (
            <><i className="fas fa-check"></i> Read</>
          ) : (
            <><i className="fas fa-times"></i> Unread</>
          )}
        </div>
      </div>

      <div className="message-body">
        <div className="message-content">
          <p>{content}</p>
        </div>

        <div className="line"></div>

        <div className="message-settings">
          <div
            className="message-btn read-message"
            onClick={markRead}
            style={{ opacity: status === "read" ? 0.6 : 1, pointerEvents: status === "read" ? "none" : "auto" }}
          >
            {status === "read" ? <><i className="fas fa-check"></i> Read</> : <><i className="fas fa-plus"></i> Mark Read</>}
          </div>

          <div className="message-btn delete-message">
            <i className="fas fa-trash"></i> Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
