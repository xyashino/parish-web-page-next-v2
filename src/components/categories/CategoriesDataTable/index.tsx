"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { Category } from "@prisma/client";
import { categoryColumns } from "./category-columns";

interface Props extends PropsWithChildren {
  data: Category[];
}

export const CategoriesDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Kategorie:"
    columns={categoryColumns}
    data={data}
  />
);
