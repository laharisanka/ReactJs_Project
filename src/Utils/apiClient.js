import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.yourdomain.com", // Replace with your API base URL
});

export default apiClient;
