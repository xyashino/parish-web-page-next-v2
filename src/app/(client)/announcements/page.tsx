import { Card, CardContent } from "@/components/ui/card";
import { getActiveAnnouncement } from "@/lib/db/announcement";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ImageTextSection } from "@/components/ImageTextSection";

export default async function Announcement() {
  const data = await getActiveAnnouncement();
  if (!data) return <div>null</div>;
  const { subtitle, value } = data;

  return (
    <div className="my-4">
      <ImageTextSection
        src="/biblia.webp"
        alt="Some hands"
        title="Ogłoszenia Parafialne"
        subtitle={subtitle}
      />
      <Card className="mx-auto lg:w-11/12">
        <CardContent className="py-8 w-full lg:w-5/6 mx-auto">
          <div className="mx-auto prose max-w-none">
            <MDXRemote source={value} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
