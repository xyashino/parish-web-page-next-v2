import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { AlbumCard } from "@/components/CategorySection/AlbumCard";
import { Separator } from "@/components/ui/separator";
import { EmptySection } from "@/components/CategorySection/emptySection";
import { CategoryWithAlbumsResponse } from "@/types/db/category";

export const CategorySection = ({
  name,
  albums,
}: CategoryWithAlbumsResponse) => {
  return (
    <section className="mb-12">
      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-center">
          &ldquo; {name} &rdquo;
        </h2>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea>
          <div className="flex space-x-8 bg-muted p-4 rounded-xl">
            {albums.map((album) => (
              <AlbumCard key={album.id} {...album} />
            ))}
            {albums.length === 0 && <EmptySection />}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};
