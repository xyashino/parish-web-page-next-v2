import client from "@/lib/db";

export const deleteDaysByWeekId = async (id: string) => {
  try {
    return await client.day.deleteMany({
      where: {
        weekId: id,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
