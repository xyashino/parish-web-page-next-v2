import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";

export const SidebarLastPageSection = () => {
  const {} = useRouter();
  return (
    <div className="py-2">
      <h2 className="relative px-7 text-lg font-semibold tracking-tight"></h2>
      <ScrollArea className="h-[300px] px-1">
        <div className="space-y-1 p-2">
          {/*{playlists?.map((playlist, i) => (*/}
          {/*  <Button*/}
          {/*    key={`${playlist}-${i}`}*/}
          {/*    variant="ghost"*/}
          {/*    className="w-full justify-start font-normal"*/}
          {/*  >*/}
          {/*    <svg*/}
          {/*      xmlns="http://www.w3.org/2000/svg"*/}
          {/*      viewBox="0 0 24 24"*/}
          {/*      fill="none"*/}
          {/*      stroke="currentColor"*/}
          {/*      strokeWidth="2"*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      className="mr-2 h-4 w-4"*/}
          {/*    >*/}
          {/*      <path d="M21 15V6" />*/}
          {/*      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />*/}
          {/*      <path d="M12 12H3" />*/}
          {/*      <path d="M16 6H3" />*/}
          {/*      <path d="M12 18H3" />*/}
          {/*    </svg>*/}
          {/*    {playlist}*/}
          {/*  </Button>*/}
          {/*))}*/}
        </div>
      </ScrollArea>
    </div>
  );
};
