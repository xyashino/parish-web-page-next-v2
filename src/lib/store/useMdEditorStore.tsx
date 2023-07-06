import { create } from "zustand";

interface MdEditorStore {
  editorValue: string;
  setEditorValue: (editorValue: string) => void;
}

const useMdEditorStore = create<MdEditorStore>((set) => ({
  editorValue: "",
  setEditorValue: (editorValue: string) => set({ editorValue }),
}));
export default useMdEditorStore;
