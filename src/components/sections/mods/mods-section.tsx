"use client";

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
import Image from "next/image";

export function ModsSection() {
  return (
    <section id="mods">
      <div className="lg:px-12">
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
                    <Card className="flex h-full flex-col items-center justify-center gap-2 p-2 select-none">
                      <Image
                        src={mod.img_url}
                        className="rounded-md"
                        alt={`Logo do Mod ${mod.name}`}
                        width={56}
                        height={56}
                        unoptimized
                      />
                      <span className="text-center text-sm font-medium text-balance">
                        {mod.name}
                      </span>
                    </Card>
                  </a>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="hidden cursor-pointer lg:flex" />
          <CarouselNext className="hidden cursor-pointer lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
