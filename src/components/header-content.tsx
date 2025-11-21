import { ClickableSoundImage } from "@/components/jokes/clickable-sound-image";
import { LinkInline } from "@/components/links/link-inline";
import { ModeToggle } from "@/components/mode-toggle";
import { NetworkButtons } from "@/components/network-buttons";
import Image from "next/image";

const images = {
  headSkinChoke: "/head-skin-choke.png",
  enxadahost: "/enxadahost.png",
};

export function HeaderContent() {
  return (
    <div id="header-overlay" className="bg-lime-950/50">
      <ModeToggle />

      <div className="flex flex-col items-center justify-center gap-12 px-18 py-28 lg:flex-row lg:py-44">
        <div id="logo">
          <ClickableSoundImage
            src={images.headSkinChoke}
            alt="Imagem da skin do Choke"
            width={144}
            height={144}
            priority
            className="rounded-lg"
          />
        </div>

        <div id="title-and-description">
          <div className="max-w-2xl space-y-3 text-white text-shadow-lime-950">
            <h1 className="font-title text-pretty">
              Servidor de Minecraft da Choke7
            </h1>
            <p className="text-center text-xl">
              Servidor de Minecraft disponibilizado pela{" "}
              <LinkInline
                href="https://enxadahost.com/"
                text="EnxadaHost"
                label="Link para o site da EnxadaHost"
              />{" "}
              para os SUBS da comunidade.
            </p>
            <div className="mt-6 flex items-center justify-center">
              <NetworkButtons />
            </div>
            <div className="mt-8 flex flex-col items-center justify-center">
              <a
                href="https://enxadahost.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src={images.enxadahost}
                  alt="Logo da EnxadaHost"
                  width={150}
                  height={75}
                  className="cursor-pointer hover:animate-pulse"
                />
              </a>
              <span className="mt-2 text-center text-sm">Cupom: CHOKE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
