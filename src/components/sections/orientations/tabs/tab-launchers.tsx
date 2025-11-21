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
import { ImageIcon, ImagePlay } from "lucide-react";
import Image from "next/image";

const images = {
  curseforgeIcon: "/images/launchers/logo-curseforge.png",
  sklauncherIcon: "/images/launchers/logo-sklauncher.png",
  curseforge: "/images/orientation/curseforge.png",
  curseforge1: "/images/orientation/curseforge1.gif",
  original2: "/images/orientation/original2.gif",
  sklauncher: "/images/orientation/sklauncher.png",
  sklauncher1: "/images/orientation/sklauncher1.gif",
  sklauncher2: "/images/orientation/sklauncher2.gif",
  sklauncher3: "/images/orientation/sklauncher3.gif",
};

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
        {/* CurseForge */}
        <AccordionItem value="curseforge">
          <AccordionTrigger>
            <div id="accordion-trigger">
              <Image
                src={images.curseforgeIcon}
                width={24}
                height={24}
                alt="Logo do CurseForge"
              />
              <span>CurseForge</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4">
            <h4>Minecraft Original</h4>
            <p className="font-semibold">
              1. Baixe o Minecraft pelo site oficial e logue com a sua conta.
            </p>

            <Separator />

            <h4>CurseForge</h4>
            <p className="font-semibold">
              2. Baixe o CurseForge pelo site oficial e na opção &quot;Download
              standalone&quot;.
            </p>

            <LinkButton
              href="https://www.curseforge.com/download/app"
              label="Link para download do CurseForge"
              text="Download CurseForge"
            />

            <Accordion id="download-curseforge" type="multiple">
              <AccordionItem value="download-curseforge">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImageIcon />
                    Imagem mostrando onde baixar o CurseForge
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={images.curseforge}
                    alt="Imagem mostrando onde baixar o CurseForge"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <p>
              Depois da instalação, na primeira inicialização vai ser perguntado
              sobre criar/logar com uma conta, mas não é necessário nada disso.
              Você pode acessar o CurseForge como &quot;guest&quot; (convidado).
            </p>

            <Separator />

            <p className="font-semibold">
              3. Dentro do CurseForge você deve selecionar o jogo Minecraft para
              criar o modpack.
            </p>

            <p>
              Você precisa criar um modpack selecionando a opção de &quot;+
              Criar&quot;.
            </p>
            <p>
              Dentro das opções do modpack você deve selecionar a versão 1.20.1
              do Minecraft e o forge na versão 47.4.0.
            </p>

            <Accordion id="download-curseforge" type="multiple">
              <AccordionItem value="download-curseforge">
                <AccordionTrigger>
                  <div className="flex items-center gap-4">
                    <ImagePlay />
                    GIF mostrando como criar o modpack
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={images.curseforge1}
                    alt="GIF mostrando como criar o modpack"
                    isGif
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Separator />

            <p className="font-semibold">
              4. Você pode iniciar o jogo pelo CurseForge para alterar a
              quantidade de memória. O jogo deve estar configurado para utilizar
              pelo menos 5GB de RAM.
            </p>
            <p>
              Dentro do Launcher Original que vai ser aberto pelo CurseForge. No
              menu de edição da instalação, você deve selecionar a opção para
              exibir &quot;Mais Opções&quot; e verificar a quantidade de memória
              máxima para o Minecraft. A quantidade de memória está na linha de
              &quot;Argumentos da JVM&quot; e fica no começo da linha com
              &quot;-Xmx2G ...&quot;. Para aumentar você deve alterar para
              &quot;-Xmx5G ...&quot;. Recomendado utilizar no mínimo 5GB de RAM.
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
                    src={images.original2}
                    alt="GIF mostrando como verificar a quantidade de memória"
                    isGif
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
              <Image
                src={images.sklauncherIcon}
                width={24}
                height={24}
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
                    <ImageIcon />
                    Imagem mostrando onde baixar o SKLauncher
                    <span className="animate-pulse font-light">
                      (Clique aqui para visualizar)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <ModalImg
                    src={images.sklauncher}
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
                    src={images.sklauncher1}
                    alt="GIF mostrando como selecionar o username"
                    isGif
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
                    src={images.sklauncher2}
                    alt="GIF mostrando como criar a instalação"
                    isGif
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
                    src={images.sklauncher3}
                    alt="GIF mostrando como verificar a quantidade de memória"
                    isGif
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
