import { create } from "zustand";
import type { FilterGameList } from "../types/gameType";

interface FilterState {
  filters: FilterGameList;
  setFilterDefault:()=>void
  set:(state:Partial<FilterGameList>)=>void;
}
const initialState={
    filters:{
      page:1,
      pageSize:10
    }
}
export const useFilterStore = create<FilterState>()(
  (set) => ({
    ...initialState,
    setFilterDefault:()=>set(initialState),
    set: (newState: Partial<FilterGameList>) =>
      set((prev) => ({ filters: { ...prev.filters, ...newState } })),
    
  })
)