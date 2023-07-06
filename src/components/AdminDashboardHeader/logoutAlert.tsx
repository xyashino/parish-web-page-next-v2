import React from "react";
import Alert from "../ConfirmAlert";
import LogoutIcon from "@/components/icons/LogoutIcon";

const LogoutAlert = () => {
  return (
    <Alert
      headerData={{
        title: "Czy na pewno chcesz się wylogować?",
        description: "Zostaniesz przekierowany na stronę główną.",
      }}
      triggerData={{
        triggerValue: (
          <LogoutIcon className="text-background text-2xl group-hover:text-foreground transition-colors" />
        ),
        className: "hover:bg-background rounded-full group transition-colors",
      }}
    />
  );
};

export default LogoutAlert;
