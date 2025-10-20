import appdata from "@/assets/orientation/appdata.gif";
import curseforge2 from "@/assets/orientation/curseforge2.gif";
import installation from "@/assets/orientation/installation.gif";
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
import { ImagePlay } from "lucide-react";

export function TabDownloads() {
  return (
    <>
      <h3>Downloads</h3>
      <h4>Instalando os mods, emotes e arquivos de configuração</h4>
      <p>
        O servidor possui diversos mods e configurações que devem ser instaladas
        no seu Minecraft. Siga o passo a passo abaixo para instalar todos os
        mods, emotes e arquivos de configuração.
      </p>

      <Separator />

      <p className="font-semibold">
        1. Baixe o arquivo .zip com tudo que é necessário para a primeira
        instalação.
      </p>
      <LinkButton
        href={download.download_url}
        text="Link para download do arquivo (.zip)"
        label="Link para download do arquivo (.zip)"
      />

      <Separator />

      <p className="font-semibold">
        2. O arquivo .zip baixado deve ser extraído na pasta do minecraft.
      </p>
      <p>
        O conteúdo do arquivo .zip deve substituir as pastas e arquivos
        existentes.
      </p>

      <p className="font-bold">CurseForge:</p>

      <Accordion id="curseforge" type="multiple">
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
              src={curseforge2}
              alt="GIF mostrando como extrair os arquivos do .zip (CURSEFORGE)"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <p className="font-bold">SKLauncher:</p>

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
            <p className="text-base">
              Abra o &apos;Explorador de Arquivos&apos; do Windows, digite{" "}
              <span className="font-bold">%appdata%</span> na barra de endereço
              e aperte Enter. Assim você encontrará a pasta .minecraft.
            </p>
            <ModalImg
              src={appdata}
              alt="GIF mostrando onde encontrar a pasta .minecraft"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

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
              Você pode extrair os arquivos com qualquer programa de compressão.
              Estou utilizando o{" "}
              <LinkInline
                href="https://www.win-rar.com/predownload.html?&L=9"
                text="WinRAR"
                label="Link para o WinRAR"
              />{" "}
              nesse caso.
            </p>
            <ModalImg
              src={installation}
              alt="GIF mostrando como instalar os mods"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <p className="font-semibold">3. Tudo pronto!</p>
      <p>
        Meus parabéns! 🎉 Você já instalou os mods, emotes e arquivos de
        configuração!
      </p>

      <Separator className="my-6" />

      <h4>Shaders (Opcional)</h4>
      <Accordion id="shaders" type="multiple">
        <AccordionItem value="shaders">
          <AccordionTrigger>Recomendações de Shaders</AccordionTrigger>
          <AccordionContent>
            <p>
              Se quiser utilizar shaders, basta baixar o shader e colocar o
              arquivo diretamente na pasta{" "}
              <span className="font-bold underline underline-offset-3">
                shaderpacks
              </span>{" "}
              dentro da pasta{" "}
              <span className="font-bold underline underline-offset-3">
                .minecraft
              </span>
              .
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

      <Separator />

      <p className="mt-12 font-bold">
        Agora é só iniciar o Minecraft e seguir para o próximo passo:
      </p>
    </>
  );
}
