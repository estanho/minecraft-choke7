import headSkinChoke from "@/assets/head-skin-choke.png";
import ServerStatus from "@/components/server-status";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { mods } from "@/data/mods";
import Autoplay from "embla-carousel-autoplay";

export default function App() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col">
      <header className="flex flex-col items-center justify-center gap-8 p-18 lg:flex-row">
        <div id="logo">
          <img
            src={headSkinChoke}
            alt="Imagem da skin do Choke"
            className="rounded-md object-contain"
          />
        </div>
        <div id="title-and-description">
          <h1>Servidor de Minecraft da Choke7</h1>
          <p className="text-center text-pretty">
            Servidor de Minecraft disponibilizado pela{" "}
            <a href="https://enxadahost.com/" target="_blank" rel="noreferrer">
              EnxadaHost
            </a>{" "}
            para os SUBS da comunidade.
          </p>
        </div>
      </header>

      <main className="text-pretty">
        <section id="mods" className="px-12 py-4">
          <div className="px-4 lg:px-12">
            <Carousel
              opts={{
                loop: true,
                dragFree: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnMouseEnter: true,
                  stopOnInteraction: false,
                }),
              ]}
            >
              <CarouselContent>
                {mods &&
                  mods.map((mod, index) => (
                    <CarouselItem
                      key={index}
                      className="flex basis-1/3 flex-col items-center justify-center lg:basis-1/7"
                    >
                      <img src={mod.img_url} className="h-16 w-16 rounded-md" />
                      <span>{mod.name}</span>
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <ServerStatus />
        <section id="informations" className="px-12 py-4">
          <div className="flex flex-col items-center justify-center">
            <h2>Informações Gerais</h2>
            <ul>
              <li>Minecraft (1.20.1) - Forge (47.4.0).</li>
              <li>Servidor dedicado (24/7).</li>
              <li>Backup realizado todos os dias durante a madrugada.</li>
            </ul>
          </div>
        </section>

        <section className="px-12 py-4">
          <div className="flex flex-col items-center justify-center">
            <h2>Regras</h2>

            <ul>
              <li>Não destrua a contrução dos outros jogadores!</li>
              <li>Não será tolerado nenhum tipo de preconceito ou ofensa!</li>
              <li>Não abuse de bugs e não utilize trapaças!</li>
            </ul>
            <p>
              Qualquer problema ou denúncia, converse com os ADM&apos;s no
              Discord. Mantenha o respeito e não seja um cuzão!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
