import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ImageTextSection } from "@/components/ImageTextSection";
import { AnnouncementDb } from "@/db/handlers/announcement";
import { notFound } from "next/navigation";

export default async function Announcement() {
  const announcements = await AnnouncementDb.getActiveAnnouncement();
  if (!announcements) return notFound();
  return (
    <div className="my-4 animate-fadeIn">
      <ImageTextSection
        src="/images/biblia.webp"
        alt="Some hands"
        title="Ogłoszenia Parafialne"
        subtitle={announcements?.subtitle}
      />
      <Card className="mx-auto lg:w-11/12">
        <CardContent className="py-8 w-full lg:w-5/6 mx-auto">
          {announcements ? (
            <div className="mx-auto prose max-w-none">
              <MDXRemote source={announcements.value} />
            </div>
          ) : (
            <h3 className="text-3xl text-foreground text-center uppercase italic font-light">
              Spróbuj ponownie później
            </h3>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
