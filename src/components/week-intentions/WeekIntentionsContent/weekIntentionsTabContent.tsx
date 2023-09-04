import { TabsContent } from "@/components/ui/tabs";
import { weekdayTranslator } from "@/lib/utils";
import { MDXRemote } from "next-mdx-remote/rsc";
import { WeekIntentionsDay } from "@/types/db/week-intentions";

export const WeekIntentionsTabContent = ({
  day,
  dateOfDay,
  intentions,
  id,
}: WeekIntentionsDay) => {
  return (
    <TabsContent
      value={id}
      className="mx-auto mt-4 w-full rounded-2xl shadow "
      id={`${id}`}
    >
      <header className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-3xl text-background italic bg-foreground p-4 rounded-t select-none">
        <h2 className="font-extrabold text-center">
          {weekdayTranslator.get(day)?.toUpperCase()}
        </h2>
        <span className="font-light text-2xl text-center">
          {dateOfDay && new Date(dateOfDay).toLocaleDateString("pl-PL")}
        </span>
      </header>

      <div className="flex flex-col">
        {intentions.map((intention) => (
          <div
            key={intention.id}
            className="flex flex-col md:flex-row w-full justify-around items-center p-4 border-2 divide-y-2 md:divide-y-0 md:divide-x-2"
          >
            <h5 className="text-2xl font-extrabold uppercase italic text-center w-full md:w-1/6">
              <span className="md:hidden font-medium">Godzina:</span>{" "}
              {intention.hour}
            </h5>
            <div className="w-full md:w-5/6 px-8 p-2 mx-auto prose prose-sm max-w-none">
              <MDXRemote source={intention.value} />
            </div>
          </div>
        ))}
      </div>
    </TabsContent>
  );
};
