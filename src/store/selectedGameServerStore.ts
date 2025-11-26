import {create} from "zustand";
import type { Game } from "../types/gameType";
interface SelectedGameState {
    game:Game | null,
    set:(state:Partial<SelectedGameState>)=>void
    clearGame:()=>void
}
const initialState = {
    game: null,
}
export const useSelectedGameServerStore = create<SelectedGameState>()((set) => ({
    ...initialState,
    set: (newState) => set(newState),
    clearGame:()=>set(initialState)
}))