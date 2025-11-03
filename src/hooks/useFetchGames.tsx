import { useQuery } from "@tanstack/react-query";
import { useGamesStore } from "../store/gamesStoreApi";
import { ApiService } from "../services/api/ApiService";
import { useEffect } from "react";
import type { Game, GamesFilter } from "../types/gameType";

const makeGamesKey = (f?: GamesFilter) => [
  "games",
  f?.page ?? 1,
  f?.pageSize ?? 20,
  (f?.genres ?? []).join(","), // convierte array -> string
  (f?.tags ?? []).join(","),
  (f?.publishers ?? []).join(","),
  f?.source ?? "",
  f?.search ?? "",
  f?.sort ?? "",
];

export const useFetchGames = (filters?: GamesFilter) => {
  const { set } = useGamesStore();

  const query = useQuery({
    queryKey: makeGamesKey(filters),
    queryFn: () => ApiService.getGames(filters),
    // ...otras opciones...
  });
  useEffect(() => {
    if (query.data) {
      set({ games: query.data.results });
    }
  }, [query.data]);
  return query;
};
