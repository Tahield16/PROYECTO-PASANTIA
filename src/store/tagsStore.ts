import type { Tag } from "../types/tag";
import { create } from "zustand";

interface TagStoreType {
  tags: Tag[];
  set: (state: Partial<TagStoreType>) => void;
  clearTags: () => void;
}
const initialState = {
  tags: [],
  set: () => {},
  clearTags: () => {},
};
export const useTagsStore = create(
  (set): TagStoreType => ({
    ...initialState,
    set: (state: Partial<TagStoreType>) => set({ ...useTagsStore, ...state }),
    clearTags: () => set({ ...initialState }),
  })
);
