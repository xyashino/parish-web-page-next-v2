"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Status } from ".prisma/client";
import { Label } from "@/components/ui/label";
import SelectStatus from "@/components/SelectStatus";
import useWeekIntentionsStore from "@/lib/store/useWeekIntentionsStore";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  status: z.enum([Status.ACTIVE, Status.NONE, Status.UPCOMING]),
});

const ModifyIntentionsStatus = () => {
  const { updateWeek } = useWeekIntentionsStore();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      status: Status.NONE,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  const handleDateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    updateWeek(date);
  };

  return (
    <DropShadowCard className="space-y-4 grid place-items-center">
      <div>
        <Label className="pl-4">Wybierz Status:</Label>
        <SelectStatus />
      </div>
      <div className="w-full">
        <Label className="pl-4">Ustaw Date:</Label>
        <Input type="date" className="w-full" onChange={handleDateInput} />
      </div>
    </DropShadowCard>
  );
};

export default ModifyIntentionsStatus;
