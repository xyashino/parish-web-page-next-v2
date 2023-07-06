import React from "react";
import Logo from "@/components/Logo";

const LogoWithDescription = () => {
  return (
    <div className="space-y-2">
      <Logo
        className="hover:bg-transparent lg:text-3xl font-bold px-0 text-background"
        renderAsLink={false}
      />
      <p className="text-background text-sm md:text-md italic">
        Witaj w panelu administracyjnym!
      </p>
    </div>
  );
};

export default LogoWithDescription;
