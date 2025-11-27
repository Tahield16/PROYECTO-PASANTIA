import { create } from "zustand";
import type { Store } from "../types/storesType";
interface storesStore {
  stores: Store[];
  set: (state: Partial<storesStore>) => void;
  clear: () => void;
}
const initialState = {
  stores: [],
  set: () => {},
  clear: () => {},
};
export const useStoresStore = create(
  (set): storesStore => ({
    ...initialState,
    set:(state:Partial<storesStore>)=>set({...state}),
    clear:()=>set({...initialState})
  })
);
