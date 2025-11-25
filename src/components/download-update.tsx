import { LinkButton } from "@/components/links/link-button";
import { Separator } from "@/components/ui/separator";
import { download } from "@/data/download";

export function DownloadUpdate() {
  return (
    <>
      {/*
        <div id="tutorial" className="space-y-4">
          <h3>Amelia chegou..</h3>
          <div className="flex flex-col items-center justify-center">
            <iframe
              className="h-96 w-full rounded-lg border"
              src="https://www.youtube.com/embed/ipa1qbsi2OQ?si=-Ju26tSAvrUanTkq"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      */}

      <div>
        <p>
          <span className="font-bold">ATENÇÃO:</span> Só funciona se você já
          tiver realizado a primeira instalação!
        </p>

        <p>
          Para instalar é semelhante a primeira instalação, você deve extrair o
          conteúdo do arquivo baixado diretamente na pasta do minecraft.
        </p>

        <Separator className="my-6" />

        <h4>⚠️ Orientações dessa atualizações: ⚠️</h4>

        <p className="font-bold">
          • EXCLUIR todo o conteúdo da pasta MODS antes da atualização!
          <br />• NÃO é necessário excluir a pasta CONFIG, apenas aceitar a
          substituição dos arquivos.
        </p>

        <Separator className="my-6" />

        <p>
          O total de mods dentro da pasta{" "}
          <span className="font-bold underline underline-offset-3">mods</span>{" "}
          deve ser de{" "}
          <span className="font-bold underline underline-offset-3">
            {download.number_of_mods} mods
          </span>{" "}
          após a atualização.
        </p>

        <LinkButton
          href={download.last_update_url}
          text="Download da atualização (.zip)"
          label="Link para download da atualização completa"
        />
      </div>
    </>
  );
}
