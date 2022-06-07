import axios from "axios";

export default {

login: function (username) {
    localStorage.setItem("username", username);
  },
  logout: function () {
    localStorage.removeItem("username");
  },
  isAuthenticated: function () {
    return !!localStorage.getItem("username"); //localStorage è una specie di memoria che serve a salvare e tenere alcuni dati anche se si fa il refresh o altro nel sito 
  },
  getUsername: function () {
    localStorage.getItem("username");
  }
};