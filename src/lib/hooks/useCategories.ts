import { Category } from "@prisma/client";
import { useLayoutEffect, useState } from "react";
import { apiCall } from "@/lib/utils";
import { ApiRoute } from "@/types/enums/api-route.enum";
import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";
import { useCategoriesStore } from "@/lib/store";

export const useCategories = (initialCategories?: Category[]) => {
  const { entities } = useCategoriesStore();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useLayoutEffect(() => {
    if (initialCategories || entities.length > 0) {
      setCategories(initialCategories || entities);
      return;
    }

    (async () => {
      setIsLoading(true);
      const categories = await apiCall<Category[]>(ApiRoute.GET_CATEGORIES, {
        next: { tags: [RevalidateTag.CATEGORIES] },
      });
      setCategories(categories);
      setIsLoading(false);
    })();
  }, [initialCategories]);

  const getCategoryName = (id: Category["id"]) => {
    const category = categories.find((category) => category.id === id);
    return category?.name ?? null;
  };
  return { isLoading, categories, getCategoryName };
};
