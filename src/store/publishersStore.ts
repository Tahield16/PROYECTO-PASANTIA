import { create } from "zustand";
import type { publishersType } from "../types/publishersType";

interface publishersStoreType {
  publishers: publishersType[];
  set: (state: Partial<publishersStoreType>) => void;
  clearPublishers: () => void;
}
const initialState: publishersStoreType = {
  publishers: [],
  set: () => {},
  clearPublishers: () => {},
};
export const usePublishersStore = create<publishersStoreType>((set) => ({
  ...initialState,
  set: (state: Partial<publishersStoreType>) => set(state),
  clearPublishers: () => set(initialState),
}));
