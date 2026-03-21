"use server";

import fs from "fs";
import path from "path";

export async function getGalleryImages() {
  const imagesDirectory = path.join(process.cwd(), "public/gallery");

  try {
    if (!fs.existsSync(imagesDirectory)) {
      return [];
    }

    const filenames = fs.readdirSync(imagesDirectory);

    return filenames
      .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map((filename) => `/gallery/${filename}`);
  } catch (error) {
    console.error("Erro ao ler galeria:", error);
    return [];
  }
}
