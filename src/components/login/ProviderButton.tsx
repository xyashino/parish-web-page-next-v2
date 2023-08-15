"use client";

import React, { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { Navigation } from "@/types/enums";

interface Props {
  provider: "google" | "facebook";
  buttonText: string;
  icon?: ReactNode;
}

export const ProviderButton = ({ provider, buttonText, icon }: Props) => {
  const { NEXT_PUBLIC_APP_URL } = process.env;
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    return signIn(provider, {
      callbackUrl:
        NEXT_PUBLIC_APP_URL ?? "http://localhost:3000" + Navigation.ADMIN_HOME,
      redirect: false,
    });
  };

  return (
    <Button
      className="text-sm space-x-2"
      variant="outline"
      type="button"
      onClick={handleClick}
      disabled={loading}
    >
      {icon && <div>{icon}</div>}
      <span>{buttonText}</span>
    </Button>
  );
};
