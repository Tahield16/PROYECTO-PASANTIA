import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ApiService } from "../services/api/ApiService";
import { useGamesStore } from "../store/gamesStoreApi";
import type { FilterGameList } from "../types/gameType";

const makeGamesKey = (f?: FilterGameList) => [
  "games",
  f?.page ?? 1,
  f?.pageSize ?? 20,
  (f?.genres ?? []).join(","), // convierte array -> string
  (f?.tags ?? []).join(","),
  (f?.publishers ?? []).join(","),
  f?.source ?? "",
  f?.search ?? "",
  f?.ordering ?? "",
];

export const useFetchGameList = () => {
  const {games, set,filters } = useGamesStore();
  console.log("Haciendo querie")
  const query = useQuery({
    queryKey: makeGamesKey(filters),
    queryFn: () => ApiService.getGames(filters),
    // ...otras opciones...
  });
  useEffect(() => {
    if (query.data) {
      set({ games: [ ...games, ...query.data.results] });
    }
  }, [query.data]);
  return query;
};
