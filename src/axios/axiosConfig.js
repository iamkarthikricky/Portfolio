import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://karthik-portfolio.up.railway.app", // Use environment variable or fallback to localhost
  timeout: 10000, // Optional: Set a timeout
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
