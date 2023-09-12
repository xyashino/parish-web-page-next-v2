import React from "react";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactGoogleMap } from "@/components/contact/ContactGoogleMap";
import { ContactItem } from "@/components/contact/ContactItem";
import { CONTACT_DATA } from "@/config/contact";

export default function Contact() {
  return (
    <section className="bg-background h-full my-auto animate-fadeIn">
      <div className="container px-6 py-12 mx-auto">
        <ContactHeader />
        <div className="grid grid-cols-1 gap-12 mt-6 lg:grid-cols-3">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {CONTACT_DATA.map((data, i) => (
              <ContactItem key={`${data.title}-${i}`} {...data} />
            ))}
          </div>
          <ContactGoogleMap />
        </div>
      </div>
    </section>
  );
}
