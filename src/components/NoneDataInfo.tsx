import React from "react";

interface Props {
  text: string;
}

export const NoneDataInfo = ({ text }: Props) => {
  return (
    <div className="w-5/6 mx-auto shadow my-8 p-8 rounded bg-white my-4">
      <h2 className="text-2xl font-bold">{text}</h2>
    </div>
  );
};
