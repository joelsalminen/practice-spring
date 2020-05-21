const auth = {
  isAuthenticated: function isAuthenticated() {
    const token = localStorage.getItem("token");
    return !!token;
  },

  login: function login(username, password) {
    console.log(username);
  },
};

export default auth;
