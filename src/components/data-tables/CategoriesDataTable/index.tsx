"use client";
import React, { PropsWithChildren, useEffect, useLayoutEffect } from "react";
import DataTable from "@/components/DataTable";
import { Category } from "@prisma/client";
import categoryColumns from "./category-columns";
import { useCategoriesStore } from "@/lib/store/categories/useCategoriesStore";

interface Props extends PropsWithChildren {
  data: Category[];
}

const CategoriesDataTable = ({ data }: Props) => {
  const { entities, updateAllEntities } = useCategoriesStore();
  useEffect(() => {
    updateAllEntities(data);
  }, []);
  return <DataTable columns={categoryColumns} data={entities} />;
};

export default CategoriesDataTable;
