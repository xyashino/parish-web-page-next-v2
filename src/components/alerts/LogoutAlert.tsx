"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { ExitIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { ConfirmAlert } from "./ConfirmAlert";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
}

export const LogoutAlert = ({ className }: Props) => (
  <div className={cn("space-y-2 w-11/12 mx-auto", className)}>
    <Separator className="w-5/6 mx-auto" />
    <ConfirmAlert
      headerConfig={{
        title: "Czy na pewno chcesz się wylogować?",
        description: "Zostaniesz przekierowany na stronę główną.",
      }}
      triggerItem={
        <Button className="w-full text-background space-x-4 uppercase font-mono font-extrabold">
          <ExitIcon />
          <p>Wyloguj</p>
        </Button>
      }
      footerConfig={{
        doAfterConfirm: () => signOut(),
      }}
    />
  </div>
);
