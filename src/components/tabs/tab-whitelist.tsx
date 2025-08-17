import { LinkInline } from "@/components/link-inline";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function TabWhitelist() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <>
      <h3>Whitelist</h3>
      <p>
        O servidor possui whitelist e o acesso é liberado apenas para os SUBS da
        Choke7.
      </p>
      <p>
        Dentro do{" "}
        <LinkInline
          href="https://discord.gg/cc5f88JyMp"
          text="Discord da Choke7"
          label="Link para o Discord da Choke7"
        />{" "}
        existe um canal de texto para você solicitar a liberação da whitelist.
        Você deve enviar o seu username da Twitch e do Minecraft. Utilize esse
        formato de exemplo:
      </p>
      <div
        className="bg-muted hover:bg-muted/80 relative flex cursor-pointer justify-between rounded p-2"
        onClick={() =>
          copyToClipboard("Twitch: username - Minecraft: username")
        }
      >
        <p className="font-mono text-sm font-semibold">
          Twitch: estanhoeu - Minecraft: Estanho
        </p>
        <div className="flex flex-row items-center gap-1">
          {copied ? (
            <>
              <span>Copiado </span>
              <Check className="h-4 w-4" />
            </>
          ) : (
            <>
              <span>Copiar </span>
              <Copy className="h-3 w-3" />
            </>
          )}
        </div>
      </div>
      <p>
        Após enviar a mensagem, aguarde um dos administradores entrar em contato
        via privado do Discord com as orientações finais de conexão.
      </p>
      <p className="text-muted-foreground text-center text-lg">
        Esse servidor foi criado com o intuito de ser um ambiente amigável e
        tranquilo, respeite os players, não abuse de bugs e nem utilize
        trapaças. Qualquer problema converse com os administradores. Apenas
        aproveite e faça amigos! 🐸❤️
      </p>
    </>
  );
}
