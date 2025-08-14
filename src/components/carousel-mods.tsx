import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { mods } from "@/data/mods";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselMods() {
  return (
    <Carousel
      opts={{
        loop: true,
        dragFree: true,
      }}
      plugins={[
        Autoplay({
          active: true,
          delay: 2000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {mods &&
          mods.map((mod, index) => (
            <CarouselItem key={index} className="basis-1/3 lg:basis-1/9">
              <a
                href={mod.url}
                className="flex flex-col items-center justify-center gap-2"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={mod.img_url}
                  className="h-16 w-16 rounded-md"
                  alt={`Logo do Mod ${mod.name}`}
                />
                <span className="text-center text-sm font-medium text-pretty">
                  {mod.name}
                </span>
              </a>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
