import { redirect } from "next/navigation";
import { getCategoriesWithAlbums } from "@/lib/db/category/get-categories-with-albums";
import { CategorySection } from "@/components/CategorySection";
import { Navigation } from "@/types/enums";

export default async function Gallery() {
  const categories = await getCategoriesWithAlbums();
  if (categories.length === 0) redirect(Navigation.CLIENT_HOME);
  return (
    <div className="bg-background flex flex-col h-full my-auto shadowflex p-4 w-full">
      {categories.map((category) => (
        <CategorySection key={category.id} {...category} />
      ))}
    </div>
  );
}
