import axios from "axios";

export const HttpAPI = axios.create({
  baseURL: "http://localhost:5173/api",
});
