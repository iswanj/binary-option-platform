import axios from "axios";

const request = axios.create({
  baseURL: "https://v6.exchangerate-api.com/v6/7f87ef96b4fab1bafd5ea5b5",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export default request;
