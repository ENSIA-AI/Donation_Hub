import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AdminRoute = ({ children }) => {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/admin/check", {
        withCredentials: true,
      })
      .then((res) => setAllowed(res.data.authenticated))
      .catch(() => setAllowed(false));
  }, []);

  if (allowed === null) return null; // loading

  return allowed ? children : <Navigate to="/" />;
};

export default AdminRoute;
