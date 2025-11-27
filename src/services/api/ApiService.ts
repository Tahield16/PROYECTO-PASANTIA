import type { GamesResponse } from "../../types/gamesAPIResponse";
import type { FilterGameList, Game } from "../../types/gameType";
import type { GenreApiResponse } from "../../types/genreType";
import type { PlatformResponse } from "../../types/platformType";
import type { StoreApiResponse } from "../../types/storesType";
import type { TagResponse } from "../../types/tag";
import { verifyDates } from "../../utils/verifyDates";
import { axiosInstance } from "./axiosInstance";

const getGames = async (filters: FilterGameList): Promise<GamesResponse> => {
  return await axiosInstance.get("/games", {
    params: {
      genres: filters.genres?.join(","),
      search: filters?.search,
      page: filters.page,
      dates: verifyDates(filters.dates),
      page_size: filters.pageSize,
      publishers: filters.publishers?.join(","),
      developers: filters.developmentTeam?.join(","),
      ordering: filters.ordering?.toString(),
      tags: filters.tags?.join(","),
    },
  });
};
const getGameById = (id: number): Promise<Game> => {
  return axiosInstance.get(`/games/${id.toString()}`);
};
const getGenres = (): Promise<GenreApiResponse> => {
  return axiosInstance.get("/genres");
};
const getTags = (): Promise<TagResponse> => {
  return axiosInstance.get("/tags");
};
const getPlatforms = (): Promise<PlatformResponse> => {
  return axiosInstance.get("/platforms").then((r) => {
    return r as unknown as PlatformResponse;
  });
};
const getStoreList= ():Promise<StoreApiResponse>=> {
  return axiosInstance.get("/stores").then((r)=>{
    return r as  unknown as StoreApiResponse;
  })
  
}
export const ApiService = {
  getGames,
  getGameById,
  getGenres,
  getTags,
  getPlatforms,
  getStoreList
};
