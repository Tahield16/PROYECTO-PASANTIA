import { create } from "zustand";
import type { Game } from "../types/gameType";

interface GamesState {
    games:Game[],
    set:(state:Partial<GamesState>)=>void
}
const initialState={
    games:[]
}
export const useGamesStore=create<GamesState>()(
    (set)=>({
        ...initialState,
        set:(newState)=>set(newState)
    })
)