import { create } from "zustand";
import type { FilterGameList, Game } from "../types/gameType";

interface PaginationInfo {
  pages: number;
  next: number | null;
  prev: number | null;
  items: number;
}

interface GamesState {
  gamesServer: Game[];
  filtersServer: FilterGameList;
  pagination: PaginationInfo | null;
  hasMore:boolean;
  // Setters
  setServer: (state: Partial<GamesState>) => void;
  updateFiltersServer: (filters: Partial<FilterGameList>) => void;

  // Reset
  clearGamesServer: () => void;
  clearFiltersServer: () => void;
}
const initialFilters: FilterGameList = {
  page: 1,
  pageSize: 10,
  source: "DATABASE",
};
const initialState: GamesState = {
  gamesServer: [],
  filtersServer: initialFilters,
  pagination: null,
  setServer:()=>null,
  updateFiltersServer:()=>null,
  clearGamesServer:()=>null,
  clearFiltersServer:()=>null,
  hasMore:false
};


export const useGamesServerStore = create<GamesState>()((set) => ({
  ...initialState,

  setServer: (partial) =>
    set((prev) => ({
      ...prev,
      ...partial,
    })),

  clearGamesServer() {
    set((prev) => ({
      ...prev,
      gamesServer: [],
      filtersServer: { ...prev.filtersServer, page: 1 },
    }));
  },

  clearFiltersServer: () =>
    set((prev) => ({
      ...prev,
      filtersServer: initialState.filtersServer,
    })),
}));
