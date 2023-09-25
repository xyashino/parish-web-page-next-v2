import { redirect } from "next/navigation";
import { CategorySection } from "@/components/CategorySection";
import { ApiRoute, Navigation, RevalidateTag } from "@/types/enums";
import { apiCall } from "@/lib/utils";
import { ActiveCategoriesResponse } from "@/types/db/album";

export default async function Gallery() {
  const categories = await apiCall<ActiveCategoriesResponse>(
    ApiRoute.ACTIVE_CATEGORIES,
    {
      next: {
        tags: [
          RevalidateTag.CATEGORIES,
          RevalidateTag.ALBUMS,
          RevalidateTag.IMAGES,
        ],
      },
    },
  );
  if (categories.length === 0) redirect(Navigation.CLIENT_HOME);
  return (
    <div className="bg-background flex flex-col h-full my-auto shadowflex p-4 w-full animate-fadeIn">
      {categories.map((category) => (
        <CategorySection key={category.id} {...category} />
      ))}
    </div>
  );
}
