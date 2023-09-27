import React from "react";

export const ContactGoogleMap = () => {
  return (
    <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
      <iframe
        title="Mapa Parafi Gruszów"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10217.207956565826!2d21.0334529!3d50.1928859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x43123091c4e284d7!2sKo%C5%9Bci%C3%B3%C5%82%20%C5%9Bw.%20Maksymiliana%20Kolbe%20w%20Gruszowie!5e0!3m2!1sen!2spl!4v1672533479972!5m2!1sen!2spl"
        className="w-full mx-auto rounded-xl bg-slate-50  shadow-xl h-full"
      />
    </div>
  );
};
