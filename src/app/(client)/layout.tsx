import React, { PropsWithChildren } from "react";
import { Footer } from "@/components/Footer";
import { ClientNavbar } from "@/components/navigation/ClientNavbar";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen w-screen max-w-full overflow-hidden">
      <ClientNavbar />
      <main className="flex-grow flex flex-col justify-between overflow-hidden overflow-y-scroll   bg-muted relative z-10">
        <div className="w-full lg:w-10/12 mx-auto">{children}</div>
        <Footer showAdminIcon />
      </main>
    </div>
  );
}
