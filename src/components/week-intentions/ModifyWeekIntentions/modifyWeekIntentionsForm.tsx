import React from "react";
import { z } from "zod";
import { CustomForm, CustomFormInputItem } from "@/components/form";
import { MdEditor } from "@/components/MdEditor";
import { Separator } from "@/components/ui/separator";
import { ButtonWithIcon } from "@/components/ButtonWithIcon";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useWeekIntentionsStore } from "@/lib/store/useWeekIntentionsStore";
import { useMdEditorStore } from "@/lib/store/useMdEditorStore";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeaderWithSeparator } from "@/components/cards/CardHeaderWithSeparator";
import { weekIntentionsFormSchema } from "@/lib/schemas/week-intentions";

type TypeFormSchema = z.infer<typeof weekIntentionsFormSchema>;

interface Props {
  defaultContent?: TypeFormSchema;
}

export const ModifyWeekIntentionsForm = ({
  defaultContent = { order: 0, hour: "" },
}: Props) => {
  const { createIntention } = useWeekIntentionsStore();
  const { editorValue } = useMdEditorStore();

  const onSubmit = (e: TypeFormSchema) => {
    createIntention({
      order: e.order,
      hour: e.hour,
      value: editorValue,
      id: `${Date.now()}}`,
    });
  };

  return (
    <Card>
      <CardHeaderWithSeparator
        title="Dodaj pojedynczą Intencje"
        description="Tutaj możesz dodać pojedynczą intencje. Godzina jest wymagana."
      />
      <CardContent>
        <CustomForm
          formSchema={weekIntentionsFormSchema}
          defaultValues={defaultContent}
          onSubmit={onSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          <div className="flex flex-col space-y-2  items-center justify-around">
            <CustomFormInputItem
              fieldName="order"
              label="Z-index"
              type="number"
              onChange={(e, field) => {
                field.onChange(e.target.valueAsNumber);
              }}
              min={-20}
              className="w-[200px]"
            />
            <CustomFormInputItem
              fieldName="hour"
              label="Godzina"
              type="time"
              className="w-[200px]"
            />
          </div>
          <div className="flex flex-col justify-around items-center space-y-4">
            <ButtonWithIcon
              text="Dodaj Intencje"
              Icon={PlusCircledIcon}
              className="w-max-[100px]"
            />
          </div>
        </CustomForm>
        <Separator className="w-5/6 my-4" />
        <MdEditor editorHeight="300px" />
      </CardContent>
    </Card>
  );
};
