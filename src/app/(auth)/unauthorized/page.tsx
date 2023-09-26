"use client";
import React, { SyntheticEvent } from "react";
import { Navigation } from "@/types/enums";
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
    <section className="bg-background">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div>
          <p className="text-2xl font-extrabold text-destructive dark:text-blue-400">
            401 Unauthorized
          </p>
          <h1 className="mt-3 text-4xl font-extrabold text-gray-800">
            Brak dostępu
          </h1>
          <p className="mt-4 text-gray-500">
            Konto nie posiada uprawnień do przeglądania tej strony. Możesz dodać
            uprawnienia w panelu administracyjnym.
          </p>

          <div className="flex flex-wrap items-center mt-6 gap-4">
            <Button
              variant="outline"
              className="font-semibold uppercase grow"
              onClick={goBack}
            >
              Spróbuj ponownie
            </Button>

            <Button
              onClick={goToHome}
              variant="destructive"
              className="px-5 py-2 font-semibold uppercase shrink-0 grow"
            >
              Strona Główna
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
