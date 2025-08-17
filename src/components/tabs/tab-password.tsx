import password from "@/assets/orientation/password.gif";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <Accordion id="password" type="multiple">
        <AccordionItem value="password">
          <AccordionTrigger>GIF mostrando como criar a senha</AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
              Você não precisa lembrar dessa senha, ela é utilizada pelo mod
              automaticamente quando você entra no servidor.
            </p>
            <img
              src={password}
              alt="gif mostrando como criar a senha"
              className="rounded-lg border"
            />
            <p className="mt-2 text-center text-sm italic">
              Essa senha fica salva na sua pasta .minecraft em um arquivo
              chamado &apos;.sl_password&apos;. NÃO PASSE ESSE ARQUIVO PARA
              NINGUÉM!🤓
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p>Agora você já pode ir para o próximo passo:</p>
    </>
  );
}
