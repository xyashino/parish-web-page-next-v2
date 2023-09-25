"use server";
import { mkdir, readdir, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { AlbumDb, ImageDb } from "@/db/handlers/album";
import { env } from "@/config/env/server";

const { UPLOAD_DIR, UPLOAD_DIR_ALBUMS } = env;

export const checkDirectory = async (path: string) => {
  try {
    await readdir(join(process.cwd(), UPLOAD_DIR, UPLOAD_DIR_ALBUMS, path));
  } catch (error) {
    await mkdir(join(process.cwd(), UPLOAD_DIR, UPLOAD_DIR_ALBUMS, path), {
      recursive: true,
    });
  }
};

export const checkAlbum = async (id: string) => {
  const album = await AlbumDb.getOneWithRelations(id);
  if (!album) throw new Error("Album not found");
  await checkDirectory(album.id);
  return album;
};

export const validateImage = (file: [string, File | string]) => {
  const [_key, value] = file;
  if (typeof value === "string") throw new Error("File is not an image");
  const { type, size } = value;
  if (!type.includes("image")) throw new Error("File is not an image");
  if (size > 10000000) throw new Error("File is too big");

  return value;
};

export const validateFormData = (formData: [string, File | string][]) => {
  if (formData.length !== 1) throw new Error("Only one file allowed");

  const file = validateImage(formData[0]);

  return {
    albumId: formData[0][0],
    file,
  };
};

export const saveImage = async (buffer: ArrayBuffer, path: string) => {
  await writeFile(
    join(process.cwd(), UPLOAD_DIR, `${path}`),
    Buffer.from(buffer),
  );
};

export const clearImage = async (id: string) => {
  try {
    const deletedImage = await ImageDb.delete(id);
    if (deletedImage && deletedImage.path) {
      await unlink(join(process.cwd(), UPLOAD_DIR, deletedImage.path));
    }
    return deletedImage;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
