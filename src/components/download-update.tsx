import { LinkButton } from "@/components/links/link-button";
//import { Separator } from "@/components/ui/separator";
import { download } from "@/data/download";

export function DownloadUpdate() {
  return (
    <>
      {/* 
      <div id="tutorial" className="space-y-4">
        <h3>Vídeo sobre a atualização</h3>
        <div className="flex flex-col items-center justify-center">
          <iframe
            className="h-96 w-full rounded-lg border-1"
            src="https://www.youtube.com/embed/rvtVgGpzBZo?si=pQHWcIXcKcxzpswU"
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

        <p className="font-bold underline underline-offset-3">
          Por favor excluir todo o conteúdo das pasta mods antes da atualização.
        </p>

        <p>Download da atualização completa.</p>
        <LinkButton
          href={download.last_update_url}
          text="Download completo da atualização"
          label="Link para download da atualização completa"
        />

        {/* 
        <p>Download da nova pasta mods completa.</p>
        <LinkButton
          href={download.download_mods_url}
          text="Download da pasta mods completa"
          label="Link para download da pasta mods completa"
        />
        */}
      </div>
    </>
  );
}
