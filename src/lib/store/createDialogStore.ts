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
    updateDefaultValues: (defaultValues: defaultValues, id: string) => void;
    resetDefaultValues: () => void;
  }

  return create<DialogStore>((set) => ({
    defaultValues: DEFAULT_VALUE,
    id: null,
    updateDefaultValues: (defaultValues: defaultValues, id: string) =>
      set({ defaultValues, id }),
    resetDefaultValues: () => set({ defaultValues: DEFAULT_VALUE, id: null }),
  }));
};
