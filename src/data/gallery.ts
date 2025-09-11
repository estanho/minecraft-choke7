interface IGallery {
  image: string;
}

interface ImageModule {
  default: string;
}

const images = import.meta.glob<ImageModule>("@/assets/gallery/*.png", {
  eager: true,
});

export const gallery: IGallery[] = Object.values(images).map((module) => ({
  image: module.default,
}));
