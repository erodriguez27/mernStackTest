import axios from "axios";

const port = process.env.BACKEND_PORT || 3000;

export const toolboxClient = axios.create({
  baseURL: `http://localhost:${port}/`,
  timeout: 5000,
});
