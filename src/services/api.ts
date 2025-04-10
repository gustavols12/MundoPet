import axios from "axios";

export const api = axios.create({
  baseURL: "https://mundopet-api-1.onrender.com",
});
