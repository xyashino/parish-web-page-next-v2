import { useMdEditorStore } from "@/lib/store/useMdEditorStore";
import { useEffect, useState } from "react";
import { Announcements } from "@prisma/client";
import { useRouter } from "next/navigation";

import { UpdateAnnouncementData } from "@/types/announcement-edit.types";
import { DEFAULT_ANNOUNCEMENT_DATA } from "@/lib/constants/default-announcement-data.constant";
import {
  createAnnouncementApiCall,
  deleteAnnouncementApiCall,
  updateAnnouncementApiCall,
} from "@/lib/services";

export const useModifyAnnouncementLogic = (defaultValue?: Announcements) => {
  const { setEditorValue, editorValue: value } = useMdEditorStore();
  const { back } = useRouter();

  const [announcementData, setAnnouncementData] = useState(
    DEFAULT_ANNOUNCEMENT_DATA
  );

  useEffect(() => {
    if (defaultValue) {
      const { status, subtitle, value } = defaultValue;
      setEditorValue(value);
      setAnnouncementData((prev) => ({ ...prev, status, subtitle }));
    }
  }, [defaultValue]);

  const updateAnnouncementData = ({ key, value }: UpdateAnnouncementData) => {
    setAnnouncementData((prev) => ({ ...prev, [key]: value }));
  };

  const clearEverything = () => {
    setEditorValue("");
    setAnnouncementData(DEFAULT_ANNOUNCEMENT_DATA);
  };
  const deleteAnnouncement = async () => {
    if (!defaultValue) return;
    await deleteAnnouncementApiCall(defaultValue.id);
    back();
  };

  const submitAnnouncement = async () => {
    const body = {
      ...announcementData,
      value,
    };
    return defaultValue
      ? updateAnnouncementApiCall(defaultValue.id, body)
      : createAnnouncementApiCall(body);
  };

  const methods = {
    clearEverything,
    deleteAnnouncement,
    submitAnnouncement,
  };

  return { announcementData, updateAnnouncementData, methods };
};
