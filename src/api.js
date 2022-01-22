import axios from "axios";

export default axios.create({
  baseURL: "https://dev.to/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  Authorization: `API KEY ${process.env.REACT_APP_DEVTO_API_KEY}`
});
