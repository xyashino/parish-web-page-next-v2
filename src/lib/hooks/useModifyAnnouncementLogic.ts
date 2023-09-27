import { useMdEditorStore } from "@/lib/store/useMdEditorStore";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UpdateAnnouncementData } from "@/types/announcement-edit";
import { DEFAULT_ANNOUNCEMENT_DATA } from "@/config/constants/announcements";
import { AnnouncementsApiService } from "@/lib/services/announcements";
import { AnnouncementResponse } from "@/types/db/announcement";

export const useModifyAnnouncementLogic = (
  defaultValue?: AnnouncementResponse,
) => {
  const { setEditorValue, editorValue: value } = useMdEditorStore();
  const { back, refresh } = useRouter();
  const [announcementData, setAnnouncementData] = useState(
    defaultValue ?? DEFAULT_ANNOUNCEMENT_DATA,
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
    await AnnouncementsApiService.delete(defaultValue.id);
    back();
    refresh();
  };

  const submitAnnouncement = async () => {
    const body = {
      ...announcementData,
      value,
    };
    return defaultValue
      ? AnnouncementsApiService.update(defaultValue.id, body)
      : AnnouncementsApiService.create(body);
  };

  const methods = {
    clearEverything,
    deleteAnnouncement,
    submitAnnouncement,
  };

  return { announcementData, updateAnnouncementData, methods };
};
