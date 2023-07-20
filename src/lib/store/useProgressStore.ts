import { create } from "zustand";
interface ProgressStore {
  value: number;
  maxValue: number;
  currentTrack: number;
  setMaxValue: (maxValue: number) => void;
  setCurrentTrack: (currentTrack: number) => void;
  reset: () => void;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  value: 0,
  maxValue: 1,
  currentTrack: 0,
  setMaxValue: (maxValue) => set({ maxValue }),
  setCurrentTrack: (currentTrack) =>
    set({ currentTrack, value: (currentTrack / get().maxValue) * 100 }),
  reset: () => set({ value: 0, maxValue: 1, currentTrack: 0 }),
}));
