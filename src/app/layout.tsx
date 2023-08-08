import "./globals.css";
import { Inter } from "next/font/google";
import React, { PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-background overflow-hidden`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
