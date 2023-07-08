import React, { useRef } from "react";
import CustomForm from "@/components/Form/CustomForm";
import { FormField } from "@/components/ui/form";
import { z } from "zod";
import CustomFormControlItem from "@/components/Form/CustomFormControlItem";
import { Input } from "@/components/ui/input";
import useWeekIntentionsStore from "@/lib/store/useWeekIntentionsStore";
import MyMarkdownEditor from "@/components/MdEditor";
import { Separator } from "@/components/ui/separator";
import SwitchWithLabel from "@/components/SwitchWithLabel";
import { DropShadowCard } from "@/components/ui/drop-shadow-card";
import useMdEditorStore from "@/lib/store/useMdEditorStore";
import ButtonWithIcon from "@/components/ButtonWithIcon";
import { PlusCircledIcon } from "@radix-ui/react-icons";
interface Props {
  defaultContent?: {
    order: number;
    hour: string;
  };
}

const formSchema = z.object({
  order: z.number().min(-20).max(20),
  hour: z.string().nonempty(),
});

const ModifyWeekIntentionsForm = ({
  defaultContent = { order: 0, hour: "" },
}: Props) => {
  const { createIntention } = useWeekIntentionsStore();
  const { editorValue, setEditorValue } = useMdEditorStore();
  const switchRef = useRef<{ isChecked: boolean }>(null);
  const onSubmit = (e: z.infer<typeof formSchema>) => {
    console.log(e);
    createIntention({
      zIndex: e.order,
      hour: e.hour,
      value: editorValue,
      id: `${Date.now()}}`,
    });
    if (switchRef.current?.isChecked) {
      setEditorValue("");
    }
  };

  return (
    <DropShadowCard>
      <CustomForm
        formSchema={formSchema}
        defaultValues={defaultContent}
        onSubmit={onSubmit}
        className="flex flex-wrap items-center justify-around"
      >
        <div className="w-full space-y-2 mx-8 mb-4">
          <h2 className="text-xl text-foreground indent-4 italic">
            Dodaj pojedynczą Intencje
          </h2>
          <Separator />
        </div>
        <div className="flex  items-center justify-around w-full">
          <FormField
            name="order"
            render={({ field }) => (
              <CustomFormControlItem label="Z-index">
                <Input
                  {...field}
                  type="number"
                  onChange={(e) => {
                    field.onChange(e.target.valueAsNumber);
                  }}
                  min={-20}
                  className="w-[200px]"
                />
              </CustomFormControlItem>
            )}
          />
          <FormField
            name="hour"
            render={({ field }) => (
              <CustomFormControlItem label="Godzina">
                <Input {...field} type="time" className="w-[200px]" />
              </CustomFormControlItem>
            )}
          />
          <SwitchWithLabel
            labelText="Czyść formularz po dodaniu."
            id="clearForm"
            ref={switchRef}
          />
        </div>
        <Separator className="w-5/6 my-4" />
        <MyMarkdownEditor editorHeight={300} />
        <ButtonWithIcon text="Dodaj Intencje" Icon={PlusCircledIcon} />
      </CustomForm>
    </DropShadowCard>
  );
};
export default ModifyWeekIntentionsForm;
