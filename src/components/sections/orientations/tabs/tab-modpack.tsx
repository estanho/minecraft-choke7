import { LinkButton } from "@/components/links/link-button";
import { LinkInline } from "@/components/links/link-inline";
import { ModalImg } from "@/components/modal-img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { download } from "@/data/download";
import { ImagePlay, Layers } from "lucide-react";

const images = {
  appdata: "/images/orientation/appdata.gif",
  curseforge: "/images/orientation/curseforge2.gif",
  installation: "/images/orientation/installation.gif",
};

export function TabModpack() {
  return (
    <>
      <h3>Download do modpack</h3>
      <div>
        <h4 className="orientation-step">
          1. Baixando os mods, emotes e arquivos de configuração
        </h4>

        <p>
          Baixe o arquivo .zip com os os mods, emotes e arquivos de
          configuração.
        </p>

        <LinkButton
          href={download.download_url}
          text="Link para download do arquivo (.zip)"
          label="Link para download do arquivo (.zip)"
        />
      </div>

      <Separator />

      <div>
        <h4 className="orientation-step">2. Instalando o modpack</h4>

        <p>O arquivo baixado deve ser extraído na pasta do minecraft.</p>

        <p className="orientation-step text-lg font-bold">CurseForge:</p>

        <p>
          • Você deve clicar nos três pontinhos e em &quot;Open Folder&quot;
          para abrir a pasta do minecraft do modpack. <br /> • Depois disso você
          extrai os arquivos do .zip diretamente na pasta do minecraft.
        </p>
        <p className="mb-3">Veja o GIF abaixo:</p>
        <Accordion id="curseforge" type="multiple" className="mb-6">
          <AccordionItem value="curseforge">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <ImagePlay />
                GIF mostrando como extrair os arquivos do .zip (CURSEFORGE)
                <span className="animate-pulse font-light">
                  (Clique aqui para visualizar)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center">
              <ModalImg
                src={images.curseforge}
                alt="GIF mostrando como extrair os arquivos do .zip (CURSEFORGE)"
                isGif
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Separator />

        <p className="orientation-step text-lg font-bold">SKLauncher:</p>

        <p className="mb-3">
          • Para encontrar a pasta do minecraft, abra o &quot;Explorador de
          Arquivos&quot; do Windows, digite{" "}
          <span className="text-lg font-bold">%appdata%</span> na barra de
          endereço e aperte Enter.
        </p>

        <Accordion id="appdata" type="multiple">
          <AccordionItem value="appdata">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <ImagePlay />
                GIF mostrando como encontrar a pasta do minecraft
                <span className="animate-pulse font-light">
                  (Clique aqui para visualizar)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col items-center">
              <ModalImg
                src={images.appdata}
                alt="GIF mostrando onde encontrar a pasta .minecraft"
                isGif
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <p className="mb-3">
          • Depois disso você extrai o arquivo .zip diretamente na pasta do
          minecraft.
        </p>

        <Accordion id="installation" type="multiple">
          <AccordionItem value="installation">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <ImagePlay />
                GIF mostrando como extrair os arquivos do .zip (SKLAUNCHER)
                <span className="animate-pulse font-light">
                  (Clique aqui para visualizar)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Você pode extrair os arquivos com qualquer programa de
                compressão. Estou utilizando o{" "}
                <LinkInline
                  href="https://www.win-rar.com/predownload.html?&L=9"
                  text="WinRAR"
                  label="Link para o WinRAR"
                />{" "}
                nesse caso.
              </p>
              <ModalImg
                src={images.installation}
                alt="GIF mostrando como instalar os mods"
                isGif
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Separator className="my-6" />

      <div>
        <h4 className="orientation-step mb-3">4. Shaders (Opcional)</h4>

        <Accordion id="shaders" type="multiple">
          <AccordionItem value="shaders">
            <AccordionTrigger>
              <div className="flex items-center gap-4">
                <Layers />
                Recomendações de Shaders
                <span className="animate-pulse font-light">
                  (Clique aqui para visualizar)
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p>
                Se quiser utilizar shaders, basta baixar o shader e colocar o
                arquivo diretamente na pasta{" "}
                <span className="font-bold">shaderpacks</span> dentro da pasta
                do <span className="font-bold">minecraft</span>.
              </p>
              <p>Recomendações de shaders bacanas:</p>

              <div className="mt-4 flex max-w-fit flex-col">
                <LinkButton
                  href="https://www.curseforge.com/minecraft/shaders/complementary-unbound/files/all?page=1&pageSize=20&version=1.20.1"
                  text="Download Complementary Shaders"
                  label="Link para download do Shader Complementary Shaders - Unbound"
                />
                <LinkButton
                  href="https://www.curseforge.com/minecraft/shaders/sildurs-vibrant-shaders/files/all?page=1&pageSize=20&version=1.20.1"
                  text="Download Sildurs Vibrant Shaders"
                  label="Link para download do Shader Sildurs Vibrant Shaders"
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <Separator className="my-6" />

      <div>
        <h4 className="orientation-step">3. Tudo pronto!</h4>
        <p>
          Meus parabéns! 🎉 Você já instalou os mods, emotes e arquivos de
          configuração!
        </p>
      </div>

      <Separator />

      <p className="orientation-step mt-12 font-bold">
        Agora é só iniciar o Minecraft e seguir para o próximo passo:
      </p>
    </>
  );
}
