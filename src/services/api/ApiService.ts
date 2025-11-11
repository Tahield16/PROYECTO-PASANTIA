import type { FilterGameList, Game } from "../../types/gameType";
import { axiosInstance } from "./axiosInstance";
export interface GamesResponse {
  results: Game[];
  seo_title: string;
  seo_description: string;
  seo_keywords: string;
  seo_h1: string;
  noindex: boolean;
  nofollow: boolean;
  description: string;
  filters: any;
  nofollow_collections: string[];
}

const getGames = (filters: FilterGameList): Promise<GamesResponse> => {
  console.log(filters);
  return axiosInstance.get("/games", {
    params: {
      genres: filters.genres?.join(","),
      search: filters?.search,
      page: filters.page,
      dates:
        filters.releaseFrom && filters.releaseTo
          ? `${filters.releaseFrom},${filters.releaseTo}`
          : undefined,
      page_size: filters.pageSize,
      publishers: filters.publishers?.join(","),
      developers: filters.developmentTeam?.join(","),
      ordering: filters.ordering?.toString(),
      tags: filters.tags?.join(","),
    },
  });
};
const getGameById = (id: number):Promise<Game> => {
  
    console.log(id);

    return axiosInstance.get(`/games/${id.toString()}`);
  
};
export const ApiService = {
  getGames,
  getGameById,
};
