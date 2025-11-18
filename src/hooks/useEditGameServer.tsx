import { useMutation } from "@tanstack/react-query";
import { ServerService } from "../services/server/ServerService";
import type { Game } from "../types/gameType";

export const useEditGameServer=()=>{
   const mutation= useMutation({
    mutationFn:(game:Partial<Game>)=>ServerService.editGame(game),
   })
   return mutation;
}