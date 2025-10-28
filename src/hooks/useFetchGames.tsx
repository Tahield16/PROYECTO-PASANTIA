import { useQuery } from "@tanstack/react-query";
import { useGamesStore } from "../store/gamesStoreApi"
import { ApiService } from "../services/api/ApiService";
import { useEffect } from "react";

export const useFetchGames=()=>{
    const {set}= useGamesStore();

    const query=useQuery({
        queryKey:['games'], // Poner filtros/ ordenamientos junto a queryKey.
        queryFn:()=>ApiService.getGames(),
    });
    useEffect(()=>{
        if(query.data){
            set({games:query.data.results})
        }
    },[query.data])
    return query;
}