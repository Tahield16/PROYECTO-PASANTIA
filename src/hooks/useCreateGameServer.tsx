import { useMutation } from "@tanstack/react-query";
import { ServerService } from "../services/server/ServerService";
import type { Game } from "../types/gameType";

export const useCreateGame = () => {
  const mutation = useMutation({
    mutationFn: async (game: Partial<Game>) => {
      return await ServerService.createGame(game)
    },
  });

  return mutation;
};
