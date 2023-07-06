import React from "react";
import { Separator } from "@/components/ui/separator";

interface Props {
  title: string;
}

const AdminPageTitle = ({ title }: Props) => {
  return (
    <div className="w-full space-y-3 p-4 rounded-xl">
      <h2 className="text-3xl indent-2 italic capitalize font-light text-foreground">
        {title}
      </h2>
      <Separator className="indent-2" />
    </div>
  );
};

export default AdminPageTitle;
