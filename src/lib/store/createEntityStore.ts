import { create, createStore } from "zustand";
import { apiCallWithToast, apiRevalidateCall } from "@/lib/utils";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

interface Entity {
  id?: string;
}

type MethodMessages = {
  loading?: string;
  success?: string;
  error?: string;
};

type Messages = {
  createMethod?: MethodMessages;
  deleteMethod?: MethodMessages;
  updateMethod?: MethodMessages;
};

const DEFAULT_MESSAGES: MethodMessages = {
  loading: "Loading...",
  success: "Success!",
  error: "Error!",
};

interface EntityStore<T extends Entity> {
  entities: T[];
  updateAllEntities: (entities: T[]) => void;
  deleteEntity: (id: T["id"]) => Promise<void>;
  updateEntity: (entity: Partial<T>) => Promise<void>;
  createEntity: (entity: Omit<T, "id">) => Promise<void>;
}

const customApiCall = <T>(
  url: string,
  fetchOptions: RequestInit,
  messages: any
) =>
  apiCallWithToast<T>({
    url,
    fetchOptions,
    msg: { ...DEFAULT_MESSAGES, ...messages },
  });

export const createEntityStore = <T extends Entity>(
  defaultValues: T[],
  baseApiPath: string,
  revalidateTag: RevalidateTag,
  messages: Messages = {}
) => {
  return create<EntityStore<T>>((set, get) => ({
    entities: defaultValues,

    updateAllEntities: (entities: T[]) => {
      set({ entities });
    },

    createEntity: async (entity: Omit<T, "id">) => {
      const result = await customApiCall<T>(
        baseApiPath,
        {
          method: "POST",
          body: JSON.stringify(entity),
        },
        messages?.createMethod
      );
      set(({ entities }) => ({ entities: [...entities, result] }));
      return apiRevalidateCall(revalidateTag);
    },

    updateEntity: async (entityToUpdate: T) => {
      const result = await customApiCall<T>(
        `${baseApiPath}/${entityToUpdate.id}`,
        {
          method: "PUT",
          body: JSON.stringify(entityToUpdate),
        },
        messages?.updateMethod
      );
      set(({ entities }) => ({
        entities: entities.map((entity) =>
          entity.id === result.id ? result : entity
        ),
      }));
      return apiRevalidateCall(revalidateTag);
    },

    deleteEntity: async (id) => {
      await customApiCall(
        `${baseApiPath}/${id}`,
        { method: "DELETE" },
        messages?.deleteMethod
      );
      set(({ entities }) => ({
        entities: [...entities].filter((entity) => entity.id !== id),
      }));
      return apiRevalidateCall(revalidateTag);
    },
  }));
};
