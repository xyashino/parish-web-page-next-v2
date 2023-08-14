import { useMdEditorStore } from "@/lib/store/useMdEditorStore";
import { useEffect, useState } from "react";
import { Announcements } from "@prisma/client";
import { useRouter } from "next/navigation";

import { UpdateAnnouncementData } from "@/types/announcement-edit";
import { DEFAULT_ANNOUNCEMENT_DATA } from "@/lib/constants/announcements";
import { AnnouncementsCrud } from "@/lib/services";

export const useModifyAnnouncementLogic = (defaultValue?: Announcements) => {
  const { setEditorValue, editorValue: value } = useMdEditorStore();
  const { back, refresh } = useRouter();

  const [announcementData, setAnnouncementData] = useState(
    DEFAULT_ANNOUNCEMENT_DATA
  );

  useEffect(() => {
    if (defaultValue) {
      const { status, subtitle, value } = defaultValue;
      setEditorValue(value);
      setAnnouncementData((prev) => ({ ...prev, status, subtitle }));
    }
  }, [defaultValue, setEditorValue]);

  const updateAnnouncementData = ({ key, value }: UpdateAnnouncementData) => {
    setAnnouncementData((prev) => ({ ...prev, [key]: value }));
  };

  const clearEverything = () => {
    setEditorValue("");
    setAnnouncementData(DEFAULT_ANNOUNCEMENT_DATA);
  };
  const deleteAnnouncement = async () => {
    if (!defaultValue) return;
    await AnnouncementsCrud.delete(defaultValue.id);
    back();
    refresh();
  };

  const submitAnnouncement = async () => {
    const body = {
      ...announcementData,
      value,
    };
    return defaultValue
      ? AnnouncementsCrud.update(defaultValue.id, body)
      : AnnouncementsCrud.create(body);
  };

  const methods = {
    clearEverything,
    deleteAnnouncement,
    submitAnnouncement,
  };

  return { announcementData, updateAnnouncementData, methods };
};
