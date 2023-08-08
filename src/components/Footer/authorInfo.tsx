import React from "react";

export const AuthorInfo = () => {
  return (
    <p className="text-sm text-background sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © {new Date().getFullYear()} Stworzone przez -
      <a
        href="https://github.com/xyashino"
        target="_blank"
        rel="noreferrer"
        className="font-bold hover:underline ml-1"
      >
        xyashino
      </a>
    </p>
  );
};
