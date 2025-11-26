import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ServerService } from "../services/server/ServerService";
import { useSelectedGameServerStore } from "../store/selectedGameServerStore";
export const useFetchGameServerById=(id:number)=>{
    const {set} = useSelectedGameServerStore();
    const query=useQuery({
        queryKey:["game-server",id],
        queryFn:()=>ServerService.searchGame(id)
    })
     useEffect(() => {
    if (query?.data) {
      set({ game: query.data });
    }
  }, [query.data]);
  return query;
}