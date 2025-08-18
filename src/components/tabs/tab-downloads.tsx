import appdata from "@/assets/orientation/appdata.gif";
import installation from "@/assets/orientation/installation.gif";
import { LinkButton } from "@/components/link-button";
import { LinkInline } from "@/components/link-inline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ImagePlay } from "lucide-react";

export function TabDownloads() {
  return (
    <>
      <h3>Downloads</h3>
      <h4>Primeira Instalação</h4>
      <p>
        O servidor possui diversos mods e configurações que devem ser instaladas
        no seu Minecraft. Siga o passo a passo abaixo para instalar todos os
        mods, emotes e arquivos de configuração.
      </p>
      <p className="font-semibold">
        1. Baixe o arquivo .rar com tudo que é necessário para a primeira
        instalação.
      </p>
      <LinkButton
        href="https://drive.google.com/file/d/1AVsIRBNAOrAwZA3EG10WfA4zxtwiPPfD/view?usp=sharing"
        text="Link para download do arquivo (.rar)"
        label="Link para download do arquivo (.rar)"
      />
      <p className="font-semibold">
        2. O arquivo .rar baixado deve ser extraído na pasta .minecraft.
      </p>
      <p>
        O conteúdo do arquivo .rar deve substituir as pastas e arquivos
        existentes. Se você já tiver mods instalados é importante remove-los da
        pasta &quot;mods&quot; para evitar conflitos.
      </p>
      <Accordion id="appdata" type="multiple">
        <AccordionItem value="appdata">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <ImagePlay />
              GIF mostrando como encontrar a .minecraft
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
              Abra o &apos;Explorador de Arquivos&apos; do Windows, digite{" "}
              <span className="font-bold">%appdata%</span> na barra de endereço
              e aperte Enter. Assim você encontrará a pasta .minecraft.
            </p>
            <img
              src={appdata}
              alt="gif mostrando onde encontrar a pasta .minecraft"
              className="rounded-lg border"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion id="installation" type="multiple">
        <AccordionItem value="installation">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <ImagePlay />
              GIF mostrando como extrair os arquivos do .rar
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Você pode extrair os arquivos com qualquer programa de compressão.
              Estou utilizando o{" "}
              <LinkInline
                href="https://www.win-rar.com/predownload.html?&L=9"
                text="Winrar"
                label="Link para o Winrar"
              />{" "}
              nesse caso.
            </p>
            <img
              src={installation}
              alt="gif mostrando como instalar os mods"
              className="rounded-lg border"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="font-semibold">3. Tudo pronto!</p>
      <p>
        Meus parabéns! 🎉 Você já instalou os mods, emotes e arquivos de
        configuração!
      </p>

      <Separator className="my-6" />

      <h4>Shaders (Opcional)</h4>
      <p>
        Se quiser utilizar shaders, basta baixar o shader e colocar o arquivo
        diretamente na pasta &apos;shaderpacks&apos; dentro da pasta .minecraft.
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
      <p className="mt-12 font-bold">
        Agora é só iniciar o Minecraft e seguir para o próximo passo:
      </p>
    </>
  );
}
