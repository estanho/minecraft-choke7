import { ModalImg } from "@/components/modal-img";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { getGalleryImages } from "@/lib/get-gallery-images";
import { useEffect, useState } from "react";

export function Gallery() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    getGalleryImages().then((images) => setImages(images));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Carousel
        opts={{
          loop: true,
          dragFree: false,
        }}
        className="w-full max-w-3xl"
      >
        <CarouselContent>
          {images && images.length > 0 ? (
            images.map((image, index) => {
              return (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <ModalImg
                      src={image}
                      alt={`Imagem da Galeria: Foto ${index + 1}`}
                    />
                  </AspectRatio>
                </CarouselItem>
              );
            })
          ) : (
            <CarouselItem>
              <AspectRatio ratio={16 / 9}>
                <Skeleton className="m-auto h-[404px] w-[770px] rounded-2xl" />
              </AspectRatio>
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="hidden cursor-pointer lg:flex" />
        <CarouselNext className="hidden cursor-pointer lg:flex" />
      </Carousel>
      <p className="text-center text-sm text-balance opacity-70">
        Obrigado por fazer parte da Lagoa dos Sapos! 😊
      </p>
    </div>
  );
}
