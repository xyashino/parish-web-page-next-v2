import { redirect } from "next/navigation";
import { CategorySection } from "@/components/CategorySection";
import { Navigation } from "@/types/enums";
import { CategoryDb } from "@/db/handlers/album";
import { ActiveCategoriesResponse } from "@/types/db/album";

export default async function Gallery() {
  const categories =
    (await CategoryDb.findAllActive()) as ActiveCategoriesResponse;
  if (categories.length === 0) redirect(Navigation.CLIENT_HOME);
  return (
    <div className="bg-background flex flex-col h-full my-auto shadowflex p-4 w-full animate-fadeIn">
      {categories.map((category) => (
        <CategorySection key={category.id} {...category} />
      ))}
    </div>
  );
}
