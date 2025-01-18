import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const API_URL = import.meta.env.VITE_API_URL;

export const baseInstance = axios.create({
  baseURL: API_URL,
});
