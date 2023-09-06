import React from "react";
import { AdminPageWrapper } from "@/layouts/AdminPageWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Admin = () => {
  return (
    <AdminPageWrapper
      headerData={{
        title: "Strona główna",
      }}
    >
      <div className="prose max-w-none mx-auto w-5/6 bg-white p-8 rounded shadow">
        <h1>Witaj w panelu administracyjnym</h1>
        <p>Dzięki niemu możesz zarządzać treścią strony internetowej.</p>
        <h2>Faq:</h2>
        <Accordion type="single">
          <AccordionItem value="status">
            <AccordionTrigger>
              <h2>O co chodzi ze statusem?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <h3>Strona posiada 3 statusy:</h3>
              <p>
                <strong className="text-green-700 uppercase">
                  Active <i>(aktywna)</i>
                </strong>{" "}
                - treść wyświetla się na stronie.
              </p>
              <p>
                <strong className="text-orange-700 uppercase">
                  Upcoming <i>(oczekujące)</i>
                </strong>{" "}
                - treść nie wyświetla się na stronie (oczekuje najbliższy
                poniedziałek).
              </p>
              <p>
                <strong className="text-red-700 uppercase">
                  None <i>(brak)</i>
                </strong>{" "}
                - treść nie wyświetla się na stronie.
              </p>
              <p className="italic font-bold text-xl">Uwaga:</p>
              <p className="uppercase font-bold ">
                W każdy poniedziałek przez
                <span className="text-red-500"> CRON </span>
                statusy ulegają zmianie.
              </p>
              <p>
                <span>
                  <strong className="text-green-700 uppercase">
                    Active <i>(aktywna)</i>
                  </strong>{" "}
                  - zmienia się na{" "}
                  <strong className="text-red-700 uppercase">
                    None <i>(brak)</i>
                  </strong>
                </span>
                <br />
                <span>
                  <strong className="text-orange-700 uppercase">
                    Upcoming <i>(oczekujące)</i>
                  </strong>{" "}
                  - zmienia się na{" "}
                  <strong className="text-green-700 uppercase">
                    Active <i>(aktywna)</i>
                  </strong>
                </span>
                <br />
                <span>
                  <strong className="text-red-700 uppercase">
                    None <i>(brak)</i>
                  </strong>{" "}
                  - nie ulega zmianie.
                </span>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="login">
            <AccordionTrigger>
              <h2>Jak działa logowanie?</h2>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Logowanie odbywa się za pomocą konta
                <strong> Google/Facebook</strong> lub <strong>Email</strong>.
              </p>
              <p>
                <span className="text-xl italic font-bold">Uwaga:</span>
                <br />
                <span>
                  Nie każdy może się zalogować. Ponieważ istnieje lista
                  dozwolonych użytkowników.
                </span>
                <ul>
                  <li>Jedna znajduje się w pliku konfiguracyjnym .env</li>
                  <li>
                    Druga znajduje się w bazie danych (możesz dodać email w
                    zakładce <strong>&ldquo;Administratorzy&ldquo;</strong>).
                  </li>
                </ul>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </AdminPageWrapper>
  );
};

export default Admin;
