import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
