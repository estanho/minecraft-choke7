import { LinkButton } from "@/components/links/link-button";
import { download } from "@/data/download";

export function DownloadUpdate() {
  return (
    <>
      {
        <div id="tutorial" className="space-y-4">
          <h3>...</h3>
          <div className="flex flex-col items-center justify-center">
            <iframe
              className="h-96 w-full rounded-lg border-1"
              src="https://www.youtube.com/embed/ipa1qbsi2OQ?si=-Ju26tSAvrUanTkq"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      }

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
          Por favor excluir todo o conteúdo das pastas CONFIG e MODS antes da
          atualização.
        </p>

        <p>Download da atualização completa.</p>
        <LinkButton
          href={download.last_update_url}
          text="Download completo da atualização"
          label="Link para download da atualização completa"
        />
      </div>
    </>
  );
}
