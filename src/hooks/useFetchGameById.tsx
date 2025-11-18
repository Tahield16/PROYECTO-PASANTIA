import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ApiService } from "../services/api/ApiService";
import { useSelectedGameStore } from "../store/selectedGameStore";

export const useFetchGameById = (id: number) => {
  const { game, set } = useSelectedGameStore();
  const query = useQuery({
    queryKey: [game, id],
    queryFn: () => ApiService.getGameById(id),
  });
  useEffect(() => {
    console.log(query.data);
    if (query?.data) {
      set({ game: query.data });
    }
  }, [query.data]);
  return query;
};
