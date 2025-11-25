import { create } from "zustand";
import type { Genre } from "../types/genreType";

interface GenreStoreType {
  genres: Genre[];
  set: (state: Partial<GenreStoreType>) => void;
  clearStore: () => void;
}
const initialState: GenreStoreType = {
  genres: [],
  set: () => {},
  clearStore: () => {},
};
export const useGenreStore = create<GenreStoreType>((set) => ({
  ...initialState,
  set: (newState) => set((prev) => ({ ...prev, ...newState })),
  clearStore: () => set(initialState),
}));
