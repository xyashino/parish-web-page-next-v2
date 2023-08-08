import React, { SyntheticEvent } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Status } from ".prisma/client";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { SelectStatus } from "@/components/SelectStatus";
import { ConfirmAlert } from "@/components/ConfirmAlert";

export const ModifyDayControls = () => {
  const { clearAll, updateStatus, weekIntentions } = useWeekIntentionsStore();
  const onSave = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(weekIntentions);
  };

  return (
    <div className="mx-auto my-4 w-full rounded-xl p-4 md:w-5/6">
      <div className="flex w-full items-center justify-around">
        <ConfirmAlert
          triggerData={{
            triggerValue: (
              <Button onClick={onSave} className="w-1/3">
                Zapisz
              </Button>
            ),
          }}
          headerData={{
            title: "Czy na pewno chcesz zapisać zmiany?",
            description: "Zmiany zostaną zapisane dopóki tego  nie zrobisz.",
          }}
          footerData={{
            confirmText: "Wyczyść wszystko",
            doAfterConfirm: clearAll,
          }}
        />
      </div>

      <div className="m-2 flex items-center justify-around p-2">
        <p>
          <Label className="indent-2 font-bold">Status:</Label>
          <SelectStatus
            doAfterChange={updateStatus}
            defaultValue={weekIntentions.status ?? Status.NONE}
          />
        </p>

        <div className="flex w-1/3 flex-col">
          <Label className="indent-2 font-bold">Data:</Label>
          <input
            type="date"
            className="m-1 rounded-md border border-slate-200 bg-transparent p-2 text-slate-950"
            value={
              weekIntentions.startWeek
                ? new Date(weekIntentions.startWeek).toISOString().slice(0, 10)
                : ""
            }
            // onChange={updateWeekDate}
          />
        </div>
      </div>
    </div>
  );
};
