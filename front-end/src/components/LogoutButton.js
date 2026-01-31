import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Step 1: get CSRF token from Laravel
      const tokenRes = await axios.get("http://localhost:8000/csrf-token", {
        withCredentials: true,
      });
      const csrfToken = tokenRes.data.csrf_token;

      // Step 2: send logout POST with token
      await axios.post(
        "http://localhost:8000/admin/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "X-CSRF-TOKEN": csrfToken,
          },
        },
      );

      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <div className="Admin_logOut">
      <button onClick={handleLogout} className="Admin-logout-btn">
        <i className="fa-solid fa-right-from-bracket"></i> Log Out
      </button>
    </div>
  );
};

export default LogoutButton;
