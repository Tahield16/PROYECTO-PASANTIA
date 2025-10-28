import type { Game } from "../../types/gameType";
import { axiosInstance } from "./axiosInstance";
export interface GamesResponse {
  results:Game[];
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

const getGames = ():Promise<GamesResponse> => {
  return axiosInstance.get("/games");
};

export const ApiService = {
  getGames,
};
