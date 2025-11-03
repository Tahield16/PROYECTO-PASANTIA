import { create } from "zustand";
import type { Game } from "../types/gameType";

interface GamesState {
    games:Game[],
    set:(state:Partial<GamesState>)=>void,
    page_number:number
}
const initialState={
    games:[],
    page_number:1
}
export const useGamesStore=create<GamesState>()(
    (set)=>({
        ...initialState,
        set:(newState)=>set(newState)
    })
)