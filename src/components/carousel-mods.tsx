import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { mods } from "@/data/mods";
import Autoplay from "embla-carousel-autoplay";

export function CarouselMods() {
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
              <a href={mod.url} target="_blank" rel="noreferrer">
                <Card className="flex h-full flex-col items-center justify-center gap-2 p-2">
                  <img
                    src={mod.img_url}
                    className="h-14 w-14 rounded-md"
                    alt={`Logo do Mod ${mod.name}`}
                  />
                  <span className="text-center text-sm font-medium text-balance">
                    {mod.name}
                  </span>
                </Card>
              </a>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
}
