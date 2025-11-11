import { create } from "zustand";
import type { FilterGameList, Game } from "../types/gameType";

interface GamesState {
  games: Game[];
  set: (state: Partial<GamesState>) => void;
  clearGames: () => void;
  clearFilters: ()=>void;
  filters: FilterGameList;
  //page_number <- sacarla de filtros
}
const initialState={
  games: [],
  filters: { page: 1, pageSize: 10 }
};
export const useGamesStore = create<GamesState>()((set) => ({
  ...initialState,
  set: (newState) => set(newState),
  clearGames() {
    set((prev)=>({ games: [], filters: { ...prev.filters, page: 1 } }));
  },
  clearFilters:()=>set(()=>({filters:initialState.filters}))
}));
