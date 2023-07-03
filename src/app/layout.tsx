import "./globals.css";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
      <html lang="pl">
      <body
          className={`${inter.className} min-h-screen max-w-screen min-w-screen min-w-screen flex flex-col bg-background items-center`}
      >
      {children}
      <Toaster position="bottom-right" />
      </body>
      </html>
  );
}
