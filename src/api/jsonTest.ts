import { Todo } from "../types/todo";
import { jsonInstance } from "./axiosInstance";

export const getTodos = async (): Promise<Todo[]> => {
  const { data } = await jsonInstance.get("/todos");
  return data;
};
