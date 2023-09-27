import {
  PageTitleWithPrevBtn,
  PageTitleWithPrevBtnProps,
} from "@/components/PageTitleWithPrevBtn";
import React, { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends HTMLAttributes<HTMLDivElement> {
  headerData: PageTitleWithPrevBtnProps;
}

export const AdminPageWrapper = ({
  children,
  headerData,
  className,
}: Props) => (
  <div
    className={cn(
      "flex flex-col space-y-4 animate-fadeIn transition-opacity mb-4",
      className,
    )}
  >
    <PageTitleWithPrevBtn {...headerData} />
    <div className="p-3 flex flex-col space-y-6 ">{children}</div>
  </div>
);
