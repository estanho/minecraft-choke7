import { ModalImg } from "@/components/modal-img";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { gallery } from "@/data/gallery";

export function Gallery() {
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
          {gallery &&
            gallery.length > 0 &&
            gallery.map((image, index) => {
              return (
                <CarouselItem key={index}>
                  <AspectRatio ratio={16 / 9}>
                    <ModalImg
                      src={image.image}
                      alt={`Imagem da galeria ${index}`}
                    />
                  </AspectRatio>
                </CarouselItem>
              );
            })}
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
