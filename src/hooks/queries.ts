import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../constants/queryKeys";
import { getTodos } from "../api/jsonTest";

export const useTodos = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: getTodos,
    staleTime: 3000,
    gcTime: 6000,
  });
};
