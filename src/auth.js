import api from "./api";

const auth = {
  isAuthenticated: function isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  },

  login: async function login(username, password, cb) {
    try {
      const response = await api.post("login", { username, password });
      setSession(response.data);
      return null;
    } catch (error) {
      return error;
    }
  },
};

const setSession = ({ token, expiresAt }) => {
  localStorage.setItem("token", token);
  localStorage.setItem("expires_at", expiresAt);
};

export default auth;
