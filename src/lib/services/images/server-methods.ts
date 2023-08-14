"use server";
import sharp from "sharp";
import { unlink, mkdir, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { deleteImage } from "@/lib/db/image";
import { getAlbumWithRelations } from "@/lib/db/album";

const { UPLOAD_DIR, UPLOAD_DIR_ALBUM } = process.env;

export const checkDirectory = async (path: string) => {
  if (!UPLOAD_DIR || !UPLOAD_DIR_ALBUM)
    throw new Error("Upload dir not found , check .env file");
  try {
    await readdir(join(process.cwd(), UPLOAD_DIR, UPLOAD_DIR_ALBUM, path));
  } catch (error) {
    await mkdir(join(process.cwd(), UPLOAD_DIR, path), { recursive: true });
  }
};

export const checkAlbum = async (id: string) => {
  const album = await getAlbumWithRelations(id);
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

export const saveAsWebp = async (buffer: ArrayBuffer, path: string) => {
  let pathCopy = path;
  if (!pathCopy.endsWith(".webp")) pathCopy = pathCopy + ".webp";
  if (!UPLOAD_DIR) throw new Error("Upload dir not found , check .env file");
  const webpBuffer = await sharp(buffer).webp().toBuffer();
  await writeFile(join(process.cwd(), UPLOAD_DIR, `${pathCopy}`), webpBuffer);
};

export const clearImage = async (id: string) => {
  if (!UPLOAD_DIR) throw new Error("Upload dir not found");
  try {
    const deletedImage = await deleteImage(id);
    await unlink(
      join(process.cwd(), UPLOAD_DIR, deletedImage.path ?? "test.png")
    );
    return deletedImage;
  } catch (error) {
    throw new Error("Something went wrong");
  }
};
