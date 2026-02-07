import axios from "../api/axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });

    console.log(" Login successful");

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      // Store user/admin data
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      if (response.data.organization) {
        localStorage.setItem(
          "organization",
          JSON.stringify(response.data.organization),
        );
      }
    }

    return response.data;
  } catch (error) {
    console.error(" Login error:", error.response?.data || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    console.log(" Logging out...");
    await axios.post("/logout");
  } catch (e) {
    console.warn(" Error during logout:", e.message);
  }

  // Always clear localStorage
  localStorage.removeItem("token");
  localStorage.removeItem("role");
  localStorage.removeItem("adminId");
  localStorage.removeItem("orgId");
  localStorage.removeItem("user");
  localStorage.removeItem("organization");

  console.log(" Logged out successfully");
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get("/admin/me");
    console.log(" Current user fetched");
    return response.data;
  } catch (error) {
    console.error(
      " Error fetching current user:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const updateAdminProfile = async (profileData) => {
  try {
    const response = await axios.post("/admin/profile/update", profileData);
    console.log(" Profile updated successfully");
    return response.data;
  } catch (error) {
    console.error(
      " Error updating profile:",
      error.response?.data || error.message,
    );
    throw error;
  }
};
