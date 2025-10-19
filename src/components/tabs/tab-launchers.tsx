import original from "@/assets/orientation/original.gif";
import original1 from "@/assets/orientation/original1.gif";
import original2 from "@/assets/orientation/original2.gif";
import sklauncher from "@/assets/orientation/sklauncher.png";
import sklauncher1 from "@/assets/orientation/sklauncher1.gif";
import sklauncher2 from "@/assets/orientation/sklauncher2.gif";
import sklauncher3 from "@/assets/orientation/sklauncher3.gif";
import { LinkButton } from "@/components/links/link-button";
import { LinkInline } from "@/components/links/link-inline";
import { ModalImg } from "@/components/modal-img";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Image, ImagePlay } from "lucide-react";

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
      <p>
        Escolha qual launcher você vai utilizar (a configuração é bem semelhante
        em outros launchers).
      </p>
      <Accordion id="launchers" type="multiple" className="space-y-2">
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
          <AccordionContent className="mt-4 space-y-4">
            <h4>Launcher Original</h4>
            <p className="font-semibold">
              1. Baixe o Minecraft pelo site oficial e logue com a sua conta.
            </p>

            <Separator />

            <p>
              2. É necessário baixar o Forge separadamente pois o launcher
              oficial não disponibiliza essa funcionalidade.
            </p>

            <LinkButton
              href="https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html"
              label="Link para download do Forge 1.20.1 - 47.4.0"
              text="Download Forge 1.20.1 - 47.4.0"
            />

            <Accordion id="download-original" type="multiple">
              <AccordionItem value="download-original">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como baixar o Forge 1.20.1 - 47.4.0
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p>Importante ser a versão 47.4.0 do Forge!</p>
                  <ModalImg
                    src={original}
                    alt="GIF mostrando como verficar a quantidade de memória"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              3. Após baixar o Forge, execute o arquivo .jar para instalar.
            </p>

            <Accordion id="forge-original" type="multiple">
              <AccordionItem value="forge-original">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como é a instalação do Forge
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col items-center">
                  <p>
                    Caso você não consiga executar o arquivo .jar, possivelmente
                    você não tem o Java instalado (
                    <LinkInline
                      href="https://www.java.com/pt-br/download/manual.jsp"
                      label="Link para download do Java"
                      text="Download do Java"
                    />
                    ).
                  </p>
                  <ModalImg
                    src={original1}
                    alt="GIF mostrando como é a instalação do Forge"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              4. Com o Forge instalado, você pode iniciar o launcher original e
              nele vai existir uma nova &quot;instalação&quot; do Forge para
              jogar.
            </p>

            <Separator />

            <p className="font-semibold">
              5. É interessante nesse momento verificar se o jogo vai utilizar
              pelo menos 5GB de RAM alocada para o Minecraft.
            </p>
            <p>
              No menu de edição da instalação do Forge você deve selecionar a
              opção para exibir &quot;Mais Opções&quot; e verificar a quantidade
              de memória máxima para o Minecraft. A quantidade de memória está
              na linha de &quot;Argumentos da JVM&quot; e fica no começo da
              linha com &quot;-Xmx2G ...&quot;. Para aumentar você deve alterar
              para &quot;-Xmx6G ...&quot;. Recomendado utilizar no mínimo 5GB de
              RAM.
            </p>

            <Accordion id="performance-original" type="multiple">
              <AccordionItem value="performance-original">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como verficar a quantidade de memória
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={original2}
                    alt="GIF mostrando como verificar a quantidade de memória"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              6. Depois de tudo, você vai ter feito a configuração do launcher
              para o servidor. 🎉
            </p>
          </AccordionContent>
        </AccordionItem>
        {/* SKLauncher */}
        <AccordionItem value="sklauncher">
          <AccordionTrigger>
            <div id="accordion-trigger">
              <img
                src="/images/launchers/logo-sklauncher.png"
                alt="Logo do SKLauncher"
              />
              <span>SKLauncher (Launcher alternativo)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4">
            <h4>SKLauncher</h4>
            <p>
              O SKLauncher é um launcher alternativo para o Minecraft para
              Windows, Linux e MacOS. Ele possui muitos recursos para facilitar
              suas jogatinas no jogo quadrado.
            </p>

            <Separator />

            <p className="font-semibold">
              1. Para instalar o SKLauncher, basta baixar o instalador no site
              do launcher. A instalação é bem simples e já vem com o Java junto.
            </p>
            <LinkButton
              href="https://skmedix.pl/downloads"
              text="Baixar o Sklauncher"
              label="Link para download do SKLauncher"
            />

            <Accordion id="download-sklauncher" type="multiple">
              <AccordionItem value="download-sklauncher">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <Image />
                    Imagem mostrando onde baixar o SKLauncher
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={sklauncher}
                    alt="Imagem mostrando onde baixar o SKLauncher"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              2. Após baixar e instalar, tente iniciar o launcher para ver se
              tudo foi instalado corretamente.
            </p>

            <Separator />

            <p className="font-semibold">
              3. Quando abrir o SKLauncher pela primeira vez você vai conseguir
              selecionar o seu username no launcher.
            </p>
            <p>
              Para isso, clique no botão &quot;Mudar para modo offline&quot; no
              canto inferior esquerdo e depois digite o username que você deseja
              utilizar no jogo.
            </p>

            <Accordion id="username-sklauncher" type="multiple">
              <AccordionItem value="username-sklauncher">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como selecionar o username
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={sklauncher1}
                    alt="GIF mostrando como selecionar o username"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              4. Ao entrar na tela inicial do launcher, você vai precisar criar
              uma &quot;instalação&quot; para iniciar o jogo na versão correta.
            </p>
            <p>
              Para isso, clique no botão de + ao lado da opção de
              &quot;Gerenciar Instalações&quot;. Na próxima tela, digite um nome
              para a instalação e selecione em &quot;Versão&quot;, a opção
              &quot;Forge&quot;, &quot;1.20.1&quot; e &quot;47.4.0&quot;.
            </p>

            <Accordion id="installation-sklauncher" type="multiple">
              <AccordionItem value="installation-sklauncher">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como criar a instalação
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={sklauncher2}
                    alt="GIF mostrando como criar a instalação"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              5. É interessante nesse momento verificar se o jogo vai utilizar
              pelo menos 5GB de RAM alocada para o Minecraft.
            </p>
            <p>
              Logo abaixo das opções de versão selecione &quot;Mais opções&quot;
              e verifique a quantidade de memória máxima que o jogo vai
              utilizar. Recomendado utilizar no mínimo 5GB de RAM.
            </p>

            <Accordion id="performance-sklauncher" type="multiple">
              <AccordionItem value="performance-sklauncher">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como verficar a quantidade de memória
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={sklauncher3}
                    alt="GIF mostrando como verificar a quantidade de memória"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              6. Clique em &quot;Salvar&quot; e você vai ter criado a instalação
              configurada para o Minecraft. 🎉
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <p className="mt-12 font-bold">
        Depois de toda essa configuração siga para o próximo passo:
      </p>
    </>
  );
}
