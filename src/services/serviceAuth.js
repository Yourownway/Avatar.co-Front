import axios from "axios";

const API_URL = "http://localhost:3000/api/";

module.exports = {
  login: async (email, password) => {
    const data = await axios.post(API_URL + "signIn", { email, password });
  },
};
