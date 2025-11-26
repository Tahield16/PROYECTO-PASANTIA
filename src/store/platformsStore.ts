import { create } from "zustand";
import type { platform } from "../types/platformType";

interface PlatformStoreType {
  platforms: platform[];
  set: (state: Partial<PlatformStoreType>) => void;
  clearStore: () => void;
}
const initialState: PlatformStoreType = {
  platforms: [],
  set: () => {},
  clearStore: () => {},
};
export const usePlatformStore = create<PlatformStoreType>((set) => ({
  ...initialState,
  set: (newState) => set((prev) => ({ ...prev, ...newState })),
  clearStore: () => set(initialState),
}));
