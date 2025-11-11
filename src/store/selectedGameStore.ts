import {create} from "zustand";
import type { Game } from "../types/gameType";
interface SelectedGameState {
    game:Game | null,
    set:(state:Partial<SelectedGameState>)=>void
}
const initialState = {
    game: null,
}
export const useSelectedGameStore = create<SelectedGameState>()((set) => ({
    ...initialState,
    set: (newState) => set(newState),
}))