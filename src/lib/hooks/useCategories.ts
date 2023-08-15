import { useLayoutEffect, useState } from "react";
import { Category } from "@prisma/client";
import { ApiRoute, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";

export const useCategories = (initialCategories?: Category[]) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useLayoutEffect(() => {
    (async () => {
      setIsLoading(true);
      const categories = await apiCall<Category[]>(ApiRoute.BASE_CATEGORIES, {
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
