// import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8000/api",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log(" Token added to request");
    } else {
      console.log(" No token in localStorage");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized - Token invalid or expired");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("adminId");
      localStorage.removeItem("orgId");

      // Redirect to login
      if (window.location.pathname !== "/Login") {
        window.location.href = "/Login";
      }
    }
    return Promise.reject(error);
  },
);

export default instance;
