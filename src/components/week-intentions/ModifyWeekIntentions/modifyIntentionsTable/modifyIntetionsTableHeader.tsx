import React from "react";
import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ModifyTableHeader = () => (
  <TableHeader>
    <TableRow className="bg-slate-800 font-bold hover:bg-slate-700">
      <TableHead className="text-slate-50 max-w-[10px]">Lp.</TableHead>
      <TableHead className="text-slate-50 max-w-[50px]">Godzina</TableHead>
      <TableHead className="text-slate-50">Intencja</TableHead>
      <TableHead></TableHead>
    </TableRow>
  </TableHeader>
);
export default ModifyTableHeader;
