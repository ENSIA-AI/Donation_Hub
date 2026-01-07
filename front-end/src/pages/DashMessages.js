
import "../styles/dashMessages.css";
import "../styles/dashCampaigns.css";
import SearchBar from "../components/SearchBar"; 
import MessageCard from "../components/MessageCard";


const DashMessages = () => {

  const messages = [
    {
      user: "User Name",
      datetime: "14/01/2024 12:00",
      email: "user@example.com",
      content: "Hello, I want to donate but I need more information about the campaign. Please contact me back.",
      status: "read"
    },
    {
      user: "User Name 2",
      datetime: "15/01/2024 08:30",
      email: "user2@example.com",
      content: "I want to know more about the campaign.",
      status: "unread"
    }
  ];

  return (
    <div className="full-page-container">
      <SearchBar /> {}
      <div className="messages-container">
        <h1>Messages</h1>
        {messages.map((msg, idx) => (
          <MessageCard key={idx} {...msg} />
        ))}
      </div>
    </div>
  );
};

export default DashMessages;
