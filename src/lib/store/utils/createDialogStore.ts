import { create } from "zustand";
import { z } from "zod";

export const createDialogStore = <T extends z.ZodType<any, any>>(
  modifySchema: T,
  DEFAULT_VALUE: z.infer<typeof modifySchema>
) => {
  type defaultValues = z.infer<typeof modifySchema>;
  interface DialogStore {
    defaultValues: defaultValues;
    id: string | null;
    isOpen: boolean;
    open: (defaultValues?: defaultValues, id?: string | null) => void;
    close: () => void;
    setIsOpen: (isOpen: boolean) => void;
  }

  return create<DialogStore>((set) => ({
    defaultValues: DEFAULT_VALUE,
    id: null,
    close: () => set({ isOpen: false, defaultValues: DEFAULT_VALUE, id: null }),
    open: (defaultValues = DEFAULT_VALUE, id = null) =>
      set({ isOpen: true, defaultValues, id }),
    setIsOpen: (isOpen: boolean) =>
      set({ isOpen, ...(!isOpen ? { defaultValues: DEFAULT_VALUE } : {}) }),
    isOpen: false,
  }));
};
