import { useQuery } from "@tanstack/react-query";
import { ServerService } from "../services/server/ServerService";
import type { FilterGameList } from "../types/gameType";
import { useGamesServerStore } from "../store/gamesServerStore";
import { useEffect } from "react";
const makeGamesKey = (f?: FilterGameList) => [
  "games-server",
  f?.page ?? 1,
  f?.pageSize ?? 20,
  (f?.genres ?? []).join(","), // convierte array -> string
  (f?.tags ?? []).join(","),
  (f?.publishers ?? []).join(","),
  f?.source ?? "",
  f?.search ?? "",
  f?.ordering ?? "",
  f?.dates?.releaseFrom ?? "",
  f?.dates?.releaseTo ?? "",
];
export const useGameById = () => {
  return useQuery({
    queryKey: ["games"],
    queryFn: () => ServerService.searchGame,
  });
};
export const useFetchGameList = () => {
  // Limite default de items x paginas JSONserver: 10
  // si next!=null => filterServer.page+1
  const { gamesServer, filtersServer, setServer } = useGamesServerStore();
  const query = useQuery({
    queryKey: makeGamesKey(filtersServer),
    queryFn: () => ServerService.fetchGameList(filtersServer.page,filtersServer.pageSize),
  });
  useEffect(() => {
    console.log(query.data);
    if (query.data) {
      setServer({ gamesServer: [...gamesServer, ...query.data.data],hasMore:query.data.next!==null });
      console.log(query.data)
    }
  }, [query.data]);
  return query;
};
