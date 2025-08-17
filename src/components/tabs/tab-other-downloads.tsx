import { LinkButton } from "@/components/link-button";
import { Separator } from "@/components/ui/separator";

export function TabOtherDownloads() {
  return (
    <>
      <Separator className="my-8" />
      <h3>Outros Downloads</h3>
      <h4>Shaders</h4>
      <p>
        Se quiser utilizar shaders, basta baixar o shader e colocar na pasta
        &apos;shaderpacks&apos; dentro da pasta .minecraft.
      </p>
      <p>Recomendações de shaders bacanas:</p>
      <div className="flex flex-col">
        <LinkButton
          href="https://www.curseforge.com/minecraft/shaders/complementary-unbound/files/all?page=1&pageSize=20&version=1.20.1"
          text="Download Complementary Shaders - Unbound"
          label="Link para download do Shader Complementary Shaders - Unbound"
        />
        <LinkButton
          href="https://www.curseforge.com/minecraft/shaders/sildurs-vibrant-shaders/files/all?page=1&pageSize=20&version=1.20.1"
          text="Download Sildurs Vibrant Shaders"
          label="Link para download do Shader Sildurs Vibrant Shaders"
        />
      </div>
      <Separator className="my-8" />
      <h4>🕑 Arquivo de Download da última atualização</h4>
      <p>
        Download somente dos arquivos modificados pela última atualização.
        Sempre substitua a pasta &quot;mods&quot; por completo!
      </p>
      <LinkButton
        href="https://drive.google.com/file/d/1AVsIRBNAOrAwZA3EG10WfA4zxtwiPPfD/view?usp=sharing"
        text="Download da atualização"
        label="Link para download da atualização"
      />
    </>
  );
}
