import React from "react";
import Alert from "../ConfirmAlert";
import { ExitIcon } from "@radix-ui/react-icons";

export const LogoutAlert = () => {
  return (
    <Alert
      headerData={{
        title: "Czy na pewno chcesz się wylogować?",
        description: "Zostaniesz przekierowany na stronę główną.",
      }}
      triggerData={{
        triggerValue: <ExitIcon className="text-background" />,
        className: "hover:scale-125 transition-transform w-auto",
      }}
    />
  );
};
