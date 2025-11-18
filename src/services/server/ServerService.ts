import type { Game } from "../../types/gameType";
import type { GamesResponse } from "../api/ApiService";
import { axiosInstance } from "./serverAxiosInstance";
const searchGame = async (id: Game["id"]): Promise<GamesResponse> => {
  return await axiosInstance.get(`/games/${id}`).then((r) => r.data);
};

const createGame = async (game: Partial<Game>): Promise<GamesResponse> => {
  return axiosInstance.post("/games", game).then((r) => r.data);
};

const editGame = async (game: Partial<Game>): Promise<GamesResponse> => {
  if (!game?.id) {
    throw new Error("El juego necesita un ID para poder editarse.");
  }

  try {
    await searchGame(game.id);
    // Si existe → PATCH
    return axiosInstance.patch(`/games/${game.id}`, game).then((r) => r.data);
  } catch (error: any) {
    // Solo crear si es error 404, o sea: "no existe en la base"
    if (error?.response?.status === 404) {
      return createGame(game);
    }

    // Si es otro error → NO crear, reportarlo
    throw error;
  }
};

export const ServerService = {
  createGame,
  searchGame,
  editGame,
};
