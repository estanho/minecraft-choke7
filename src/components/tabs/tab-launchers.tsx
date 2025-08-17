import sklauncher from "@/assets/orientation/sklauncher.png";
import sklauncher1 from "@/assets/orientation/sklauncher1.gif";
import sklauncher2 from "@/assets/orientation/sklauncher2.gif";
import sklauncher3 from "@/assets/orientation/sklauncher3.gif";
import { LinkButton } from "@/components/link-button";
import { LinkInline } from "@/components/link-inline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TabLaunchers() {
  return (
    <>
      <h3>Launchers</h3>
      <p>Para executar o Minecraft é necessário possuir um launcher.</p>
      <p>
        Todos os Launchers são compatíveis com o servidor com exceção do
        TLauncher (se você utiliza o TLauncher recomendo muito trocar para o
        SKLauncher que é muito mais performático e recente, além de não possuir
        polêmicas relacionadas a{" "}
        <LinkInline
          href="https://www.techtudo.com.br/guia/2024/08/minecraft-tlauncher-tem-virus-veja-riscos-de-jogar-colocar-skins-e-mais-edjogos.ghtml"
          text="spyware"
          label="Link para o site da TechTudo com uma matéria sobre o TLauncher"
        />
        ).
      </p>
      <p>Escolha qual launcher você vai utilizar.</p>
      <Accordion id="launchers" type="multiple" className="space-y-2">
        {/* SKLauncher */}
        <AccordionItem value="sklauncher">
          <AccordionTrigger>
            <div id="accordion-trigger">
              <img
                src="/images/launchers/logo-sklauncher.png"
                alt="Logo do SKLauncher"
              />
              <span>SKLauncher (Recomendado)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4">
            <h4>SKLauncher</h4>
            <p>
              O SKLauncher é um launcher alternativo para o Minecraft para
              Windows, Linux e MacOS. Ele possui muitos recursos para facilitar
              suas jogatinas no jogo quadrado.
            </p>
            <p>
              Para instalar o SKLauncher, basta baixar o instalador no site do
              launcher. A instalação é bem simples e já vem com o Java junto.
            </p>
            <LinkButton
              href="https://skmedix.pl/downloads"
              text="Baixar o Sklauncher"
              label="Link para download do SKLauncher"
            />
            <img
              src={sklauncher}
              alt="Imagem mostrando onde baixar o SKLauncher"
              className="rounded-lg border"
            />
            <p>
              Após baixar e instalar, tente iniciar o launcher para ver se tudo
              foi instalado corretamente.
            </p>
            <p>
              Quando abrir o SKLauncher pela primeira vez você vai conseguir
              selecionar o seu username no launcher. Para isso, clique no botão
              &apos;Mudar para modo offline&apos; no canto inferior esquerdo e
              depois digite o username que você deseja utilizar no jogo (esse
              username não é definitivo, você pode altera-lo).
            </p>
            <img
              src={sklauncher1}
              alt="GIF mostrando como selecionar o username"
              className="rounded-lg border"
            />
            <p>
              Ao entrar na tela inicial do launcher, você vai precisar criar um
              &apos;instalação&apos; para iniciar o jogo na versão correta.
            </p>
            <p>
              Para isso, clique no botão de + ao lado da opção de
              &apos;Gerenciar Instalações&apos;. Na próxima tela, digite um nome
              para a instalação e selecione em &quot;Versão&quot;, a opção
              &apos;Forge&apos;, &apos;1.20.1&apos; e &apos;47.4.0&apos;.
            </p>
            <img
              src={sklauncher2}
              alt="GIF mostrando como criar a instalação"
              className="rounded-lg border"
            />
            <p>
              É interessante nesse momento verificar se o jogo vai ser iniciado
              com pelo menos 4GB de RAM. Logo abaixo das opções de versão
              selecione &quot;Mais opções&quot; e verifique a quantidade de
              memória máxima que o jogo vai utilizar, isso pode ser alterado
              porém 4GB é o suficiente.
            </p>
            <img
              src={sklauncher3}
              alt="GIF mostrando como escolher a memória"
              className="rounded-lg border"
            />
            <p>
              Depois de tudo, clique em &quot;Salvar&quot; e você vai ter criado
              a instalação configurada para o Minecraft.
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* Minecraft Original */}
        <AccordionItem value="original">
          <AccordionTrigger>
            <div id="accordion-trigger">
              <img
                src="/images/launchers/logo-original.png"
                alt="Logo do SKLauncher"
              />
              <span>Launcher Original</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>teste</AccordionContent>
        </AccordionItem>
      </Accordion>
      <p>Depois de toda essa configuração siga para o próximo passo:</p>
    </>
  );
}
