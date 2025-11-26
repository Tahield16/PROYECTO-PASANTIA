import type { Game } from "../../types/gameType";
import type { serverGamesResponse } from "../../types/serverGamesResponse";
import { axiosInstance } from "./serverAxiosInstance";

const searchGame = async (id: Game["id"]): Promise<Game> => {
  return axiosInstance.get(`/games/${id}`).then((r) => {

    return r as unknown as Game;
  });
};

const createGame = async (game: Partial<Game>): Promise<Game> => {
  return axiosInstance.post("/games", game).then((r) => r.data);
};

const editGame = async (game: Partial<Game>): Promise<Game> => {
  if (!game?.id) {
    throw new Error("El juego necesita un ID para poder editarse.");
  }

  try {
    await searchGame(game.id);
    return axiosInstance.patch(`/games/${game.id}`, game).then((r) => r.data);
  } catch (error: any) {
    if (error?.response?.status === 404) {
      return createGame(game);
    }
    throw error;
  }
};

const fetchGameList = async (
  page: number,
): Promise<serverGamesResponse> => {
  return axiosInstance.get("/games", {
    params: {
      _page: page,
    },
  });
};

export const ServerService = {
  createGame,
  searchGame,
  fetchGameList,
  editGame,
};
