import { LinkButton } from "@/components/links/link-button";
//import { Separator } from "@/components/ui/separator";
import { download } from "@/data/download";

export function DownloadUpdate() {
  return (
    <>
      {/* 
        <div id="tutorial" className="space-y-4">
          <h3>Tutorial em Vídeo</h3>
          <p>
            Tutorial feito pelo Tutti explicando como atualizar se você já
            tiver realizado a primeira instalação.
          </p>
          <div className="flex flex-col items-center justify-center">
            <iframe
              className="h-96 w-full rounded-lg border-1"
              src="https://www.youtube.com/embed/cNrTvnWX0EY?si=tuT6xGp6i_aIeYnI"
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
          conteúdo do arquivo baixado na pasta{" "}
          <span className="font-bold underline underline-offset-3">
            .minecraft
          </span>
          . O total de mods dentro da pasta{" "}
          <span className="font-bold underline underline-offset-3">mods</span>{" "}
          deve ser de{" "}
          <span className="font-bold underline underline-offset-3">
            {download.number_of_mods} mods
          </span>{" "}
          após a atualização.
        </p>
        <p className="font-bold">
          Um dos mods foi removido, exclua a pasta de mods antiga e baixe a
          nova!
        </p>
        {/* 
        <p>Download somente dos mods adicionados.</p>
        <LinkButton
          href={download.last_update_url}
          text="Download dos mods adicionados"
          label="Link para download dos mods adicionados"
        />
        <Separator />
        */}
        <p>Download da nova pasta mods completa.</p>
        <LinkButton
          href={download.download_mods_url}
          text="Download da pasta mods completa"
          label="Link para download da pasta mods completa"
        />
      </div>
    </>
  );
}
