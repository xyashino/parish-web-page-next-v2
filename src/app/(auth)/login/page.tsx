import React from "react";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Navigation } from "@/types/enums";
import { LeftSection } from "@/components/login/LeftSection";
import { RightSection } from "@/components/login/RightSection";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function AuthenticationPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect(Navigation.ADMIN_HOME);
  return (
    <div className="w-full h-full">
      <div className="relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
