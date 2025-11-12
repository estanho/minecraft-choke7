import { ModalImg } from "@/components/modal-img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ImagePlay } from "lucide-react";

const images = {
  password: "/images/orientation/password.gif",
};

export function TabPassword() {
  return (
    <>
      <h3>Senha do Minecraft</h3>
      <p>
        Na primeira execução do minecraft após instalar os mods, você vai
        encontrar uma tela solicitando a criação de uma senha. Essa senha só
        precisa ser preenchida na primeira inicialização, você pode utilizar o
        botão com um &quot;R&quot; para criar uma senha aleatória.
      </p>
      <p>
        Essa senha funciona como uma chave de acesso, toda vez que entrar no
        servidor essa senha é comparada a senha que você utilizou na primeira
        vez que conseguiu entrar no servidor. Assim protegendo o seu acesso e
        não deixando ninguém entrar utilizando o seu nick e sua whitelist.
      </p>
      <p className="font-bold underline underline-offset-3">
        IMPORTANTE: Essa senha fica salva na sua pasta .minecraft em um arquivo
        chamado &apos;.sl_password&apos;. Caso precise reinstalar o minecraft,
        SALVE ESSE ARQUIVO!
      </p>

      <Accordion id="password" type="multiple">
        <AccordionItem value="password">
          <AccordionTrigger>
            <div className="flex items-center gap-4">
              <ImagePlay />
              GIF mostrando como criar a senha
              <span className="animate-pulse font-light">
                (Clique aqui para visualizar)
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
              Você não vai precisar digitar essa senha em nenhum momento, ela é
              utilizada pelo mod automaticamente quando você entra no servidor.
            </p>
            <ModalImg
              src={images.password}
              alt="GIF mostrando como criar a senha"
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <p className="mt-12 font-bold">
        Agora você já pode ir para o próximo passo:
      </p>
    </>
  );
}
