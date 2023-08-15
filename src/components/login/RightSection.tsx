"use client";
import React from "react";
import { ProviderButton } from "@/components/login/ProviderButton";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { Separator } from "@/components/ui/separator";

export const RightSection = async () => (
  <div className="lg:p-8">
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Zaloguj się do swojego konta.
        </h1>
        <Separator />
        <ProviderButton
          provider="google"
          buttonText="Google"
          icon={<GoogleIcon />}
        />
        <ProviderButton
          provider="facebook"
          buttonText="Facebook"
          icon={<FacebookIcon />}
        />
      </div>
    </div>
  </div>
);
