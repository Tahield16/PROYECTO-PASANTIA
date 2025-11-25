import type { FilterGameList, Game } from "../../types/gameType";
import { axiosInstance } from "./axiosInstance";
import { verifyDates } from "../../utils/verifyDates";
import type { GamesResponse } from "../../types/gamesAPIResponse";
import type { GenreApiResponse } from "../../types/genreType";

const getGames = async (filters: FilterGameList): Promise<GamesResponse> => {

  console.log(filters);
  
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
  console.log(id);

  return axiosInstance.get(`/games/${id.toString()}`);
};
const getGenres=():Promise<GenreApiResponse>=>{
  return axiosInstance.get('/genres');
}
export const ApiService = {
  getGames,
  getGameById,
  getGenres
};
