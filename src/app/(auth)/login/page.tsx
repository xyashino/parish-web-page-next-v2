import { Metadata } from "next";
import { RightSection } from "@/components/login/RightSection";
import { LeftSection } from "@/components/login/LeftSection";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Navigation } from "@/types/enums";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default async function AuthenticationPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect(Navigation.ADMIN_HOME);
  return (
    <div className="w-full h-full">
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}
