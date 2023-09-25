import { mkdir, rm } from "fs/promises";
import { join } from "path";
import { getErrorMessage } from "@/lib/utils";
import { env } from "@/config/env/server";

const { UPLOAD_DIR, UPLOAD_DIR_ALBUMS } = env;

export const createDirectory = async (id: string) => {
  const path = join(process.cwd(), UPLOAD_DIR, UPLOAD_DIR_ALBUMS, id);
  try {
    await mkdir(path, { recursive: true });
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    throw new Error(`Error creating directory: ${errorMessage}`);
  }
};

export const deleteDirectory = async (id: string) => {
  const path = join(process.cwd(), UPLOAD_DIR, UPLOAD_DIR_ALBUMS, id);
  try {
    await rm(path, { recursive: true, force: true });
  } catch (error: unknown) {
    const errorMessage = getErrorMessage(error);
    throw new Error(`Error deleting directory: ${errorMessage}`);
  }
};
