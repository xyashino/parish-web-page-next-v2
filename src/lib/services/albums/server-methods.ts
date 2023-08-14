import { mkdir, rm } from "fs/promises";
import { join } from "path";
import { getErrorMessage } from "@/lib/utils";

const getEnvConfigData = () => {
  const { UPLOAD_DIR, UPLOAD_DIR_ALBUM } = process.env;
  if (!UPLOAD_DIR || !UPLOAD_DIR_ALBUM)
    throw new Error("Upload directories not found in environment variables");
  return { UPLOAD_DIR, UPLOAD_DIR_ALBUM };
};

const getPath = (id: string) => {
  const { UPLOAD_DIR, UPLOAD_DIR_ALBUM } = getEnvConfigData();
  return join(process.cwd(), UPLOAD_DIR, UPLOAD_DIR_ALBUM, id);
};

export const createDirectory = async (id: string) => {
  try {
    await mkdir(getPath(id), { recursive: true });
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    throw new Error(`Error creating directory: ${errorMessage}`);
  }
};

export const deleteDirectory = async (id: string) => {
  try {
    await rm(getPath(id), { recursive: true, force: true });
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    throw new Error(`Error deleting directory: ${errorMessage}`);
  }
};
