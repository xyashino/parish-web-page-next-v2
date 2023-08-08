"use client";
import React, { SyntheticEvent } from "react";
import { Navigation } from "@/types/enums/navigation.enum";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const { push, back } = useRouter();

  const goToHome = (e: SyntheticEvent) => {
    e.preventDefault();
    push(Navigation.CLIENT_HOME);
  };

  const goBack = () => {
    back();
  };

  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r  from-accent-foreground to-neutral-700 select-none">
      <div className="relative">
        <h1 className="text-5xl lg:text-9xl font-extrabold text-background tracking-widest">
          404
        </h1>
        <div className="bg-accent px-2 uppercase italic font-mono rounded rotate-12 absolute top-1/2 left-0 w-full text-center text-foreground font-bold bg-white shadow-black  shadow-xl">
          Strony nie została znaleziona
        </div>
      </div>
      <div className="mt-5 flex space-x-4 flex-wrap">
        <Button
          onClick={goToHome}
          variant="secondary"
          className="p-6 shadow-black  shadow-xl font-mono font-bold uppercase"
        >
          Strona Główna
        </Button>
        <Button
          onClick={goBack}
          variant="secondary"
          className="p-6 shadow-black  shadow-xl font-mono font-bold uppercase"
        >
          Wroc do porzedniej strony
        </Button>
      </div>
    </main>
  );
};
export default NotFound;
