"use server";

import fs from "fs";
import path from "path";

export async function getGalleryImages() {
  const imagesDirectory = path.join(process.cwd(), "public/gallery");

  if (!fs.existsSync(imagesDirectory)) {
    fs.mkdirSync(imagesDirectory, { recursive: true });
  }

  const filenames = fs.readdirSync(imagesDirectory);

  const images = filenames
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map((filename) => `/gallery/${filename}`);

  return images;
}
