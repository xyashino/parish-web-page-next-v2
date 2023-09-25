"use client";
import React, { PropsWithChildren } from "react";
import { DataTable } from "@/components/DataTable";
import { categoryColumns } from "./category-columns";
import { CategoriesResponse } from "@/types/db/album";

interface Props extends PropsWithChildren {
  data: CategoriesResponse;
}

export const CategoriesDataTable = ({ data }: Props) => (
  <DataTable
    tableTitle="Wszystkie Kategorie:"
    columns={categoryColumns}
    data={data}
  />
);
