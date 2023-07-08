import { create } from "zustand";

interface CustomDialogStore {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const useCustomDialogStore = create<CustomDialogStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
export default useCustomDialogStore;
