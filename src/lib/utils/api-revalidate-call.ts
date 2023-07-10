import { RevalidateTag } from "@/types/enums/revalidate-tag.enum";

export const apiRevalidateCall = async (tag: RevalidateTag) => {
  const url = new URL(`http://localhost:3000/api/revalidate`);
  url.searchParams.append("tag", tag);
  const res = await fetch(url.toString());
  return await res.json();
};
