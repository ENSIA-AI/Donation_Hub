import axios from "../api/axios";

export const login = async (email, password) => {
  const response = await axios.post("/login", {
    email,
    password,
  });

  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response.data;
};

export const logout = async () => {
  const token = localStorage.getItem("token");

  try {
    await axios.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
  } catch (e) {
    console.error("Error during logout:", e);
  }

  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("adminId");
  localStorage.removeItem("orgId");
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
