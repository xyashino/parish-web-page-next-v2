import React, { PropsWithChildren } from "react";

export const DashboardCardContainer = ({ children }: PropsWithChildren) => (
  <div className="flex flex-col md:flex-row space-y-6 lg:space-y-0 justify-around items-center w-11/12 lg:w-10/12 mx-auto">
    {children}
  </div>
);
