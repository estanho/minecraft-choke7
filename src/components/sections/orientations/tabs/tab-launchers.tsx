import { LinkButton } from "@/components/links/link-button";
//import { LinkInline } from "@/components/links/link-inline";
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
  sklauncher4: "/images/orientation/sklauncher4.gif",
};

export function TabLaunchers() {
  return (
    <>
      <h3>Launchers</h3>
      <p>Para executar o Minecraft é necessário possuir um launcher.</p>
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
              <span className="font-bold">CurseForge (Minecraft Original)</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4">
            <div>
              <p className="mb-3">
                O CurseForge é o principal gerenciador de mods para o Minecraft
                Original, permitindo baixar e instalar mods para o jogo
                facilmente. Ele funciona em conjunto com o Launcher Original do
                Minecraft.
              </p>
              <h4 className="orientation-step">
                1. Baixando o Launcher do Minecraft Original
              </h4>
              <p>
                Baixe o Minecraft pelo site oficial e logue com a sua conta.
              </p>
              <LinkButton
                href="https://www.minecraft.net/pt-br"
                label="Download Minecraft Original"
                text="Download Minecraft Original"
              />
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">2. Baixando o CurseForge</h4>
              <p className="mb-3">
                Baixe o CurseForge pelo site oficial e clicando na opção
                &quot;Download Standalone&quot;.
              </p>

              <Accordion id="download-curseforge" type="multiple">
                <AccordionItem value="download-curseforge">
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <ImageIcon />
                      Imagem mostrando como baixar o CurseForge
                      <span className="animate-pulse font-light">
                        (Clique aqui para visualizar)
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ModalImg
                      src={images.curseforge}
                      alt="Imagem mostrando como baixar o CurseForge"
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <p>
                Depois da instalação, na primeira inicialização vai ser
                perguntado sobre criar/logar com uma conta, mas NÃO é necessário
                nada disso. Você pode acessar o CurseForge como
                &quot;guest&quot; (convidado).
              </p>

              <LinkButton
                href="https://www.curseforge.com/download/app"
                label="Link para download do CurseForge"
                text="Download CurseForge"
              />
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                3. Configurando o Modpack no CurseForge
              </h4>
              <p>
                Agora você deve criar o modpack para conseguir instalar os mods
                necessários para o servidor.
              </p>
              <p className="mb-3">
                • Dentro do CurseForge você deve selecionar o jogo Minecraft
                para criar a instalação do modpack. <br /> • Você precisa criar
                um modpack selecionando a opção de &quot;+ Create&quot;.
                <br /> • Nas opções do modpack você deve selecionar a versão
                &quot;1.20.1&quot; do Minecraft e o Forge na versão
                &quot;47.4.0&quot;.
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
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                4. Configurando a memória (Muito Importante)
              </h4>
              <p>
                Você pode iniciar o jogo pelo CurseForge para alterar a
                quantidade de memória. O jogo deve estar configurado para
                utilizar pelo menos 5GB de memória RAM.
              </p>
              <p>
                • Dentro do Launcher Original que vai ser aberto pelo
                CurseForge. <br /> • No menu de edição da instalação, você deve
                selecionar o botão para exibir &quot;Mais Opções&quot; e
                verificar a quantidade de memória máxima para o Minecraft.{" "}
                <br /> • A quantidade de memória está na linha de
                &quot;Argumentos da JVM&quot;. <br /> • Logo no início da linha
                está o valor &quot;-Xmx2G ...&quot; ou algo semelhante. <br /> •
                Para aumentar você deve alterar para &quot;-Xmx5G ...&quot;.{" "}
                <br /> • Esse &quot;5G&quot; define a quantidade de memória que
                o jogo vai utilizar, o mínimo recomendado é de &quot;5G&quot; (5
                GB de memória RAM).
              </p>

              <p className="mb-3 font-medium">Recomendo ver o GIF abaixo:</p>

              <Accordion id="performance-original" type="multiple">
                <AccordionItem value="performance-original">
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <ImagePlay />
                      GIF mostrando como alterar/verificar a quantidade de
                      memória
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
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                5. Seu Minecraft está pronto para instalar o Modpack!
              </h4>
              <p>
                Depois de toda essa configuração, você vai ter feito o que é
                necessário para instalar o modpack do servidor. 🎉
              </p>
            </div>
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
              <span className="font-bold">
                SKLauncher (Launcher alternativo)
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="mt-4 space-y-4">
            <div>
              <h4 className="orientation-step">1. Baixando o SKLauncher</h4>
              <p className="mb-3">
                O SKLauncher é um launcher alternativo para o Minecraft para
                Windows, Linux e MacOS. Ele possui muitos recursos para
                facilitar suas jogatinas no jogo quadrado.
              </p>

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

              <p>
                Para instalar o SKLauncher, basta baixar o instalador no site do
                launcher. A instalação é bem simples e já vem com o Java junto.
                Tem um AD no site de download que é bem chato, porém é só
                esperar ele acabar e baixar.
              </p>

              <LinkButton
                href="https://skmedix.pl/downloads"
                text="Download SKLauncher"
                label="Link para download do SKLauncher"
              />
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                2. Iniciando o SKLauncher e configurando o username
              </h4>
              <p>
                Ao abrir o SKLauncher pela primeira vez você vai conseguir
                selecionar o seu USERNAME no launcher.
              </p>
              <p className="mb-3">
                Clique no botão &quot;Mudar para modo offline&quot; no canto
                inferior esquerdo e depois digite o username que você deseja
                utilizar no jogo. Fique atento se está digitando corretamente
                (Letras maiúsculas e minúsculas fazem diferença).
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
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                3. Configurando o perfil para instalar o Modpack
              </h4>
              <p>
                É necessário criar um &quot;perfil&quot; para o launcher
                entender qual versão vai ser utilizada e onde vai ser instalado.
              </p>

              <p>
                • Entrando na tela inicial do launcher, você vai precisar criar
                uma &quot;instalação&quot; para iniciar o jogo na versão
                correta. <br /> • Para isso, clique no botão de + ao lado da
                opção de &quot;Gerenciar Instalações&quot;. <br /> • Na próxima
                tela, digite um nome para a instalação e selecione a versão
                &quot;Forge&quot;, &quot;1.20.1&quot; e &quot;47.4.0&quot;.
              </p>

              <p className="mb-3 font-medium">Recomendo ver o GIF abaixo:</p>

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
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                4. Configurando a memória (Muito Importante)
              </h4>

              <p>
                Dentro da instalação criada é possível verificar se o jogo vai
                utilizar pelo menos 5GB de RAM alocada para o Minecraft.
              </p>

              <p className="mb-3">
                Logo abaixo das opções de versão selecione &quot;Mais
                opções&quot; e verifique a quantidade de memória máxima que o
                jogo vai utilizar. O mínimo recomendado é de 5GB.
              </p>

              <Accordion id="performance-sklauncher" type="multiple">
                <AccordionItem value="performance-sklauncher">
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <ImagePlay />
                      GIF mostrando como verificar a quantidade de memória
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
            </div>

            <div>
              <h4 className="orientation-step">
                5. Ativando o uso da placa de vídeo dedicada (IMPORTANTE)
              </h4>
              <p className="mb-3">
                É muito importante ativar o uso da placa de vídeo dedicado pelo
                launcher SKLauncher para evitar lag e crashes. Principalmente se
                você possui processador ou GPU da AMD.
              </p>

              <Accordion id="gpu-sklauncher" type="multiple">
                <AccordionItem value="gpu-sklauncher">
                  <AccordionTrigger>
                    <div className="flex items-center gap-4">
                      <ImagePlay />
                      GIF mostrando como ativar o uso da placa de vídeo dedicada
                      <span className="animate-pulse font-light">
                        (Clique aqui para visualizar)
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ModalImg
                      src={images.sklauncher4}
                      alt="GIF mostrando como ativar o uso da placa de vídeo dedicada"
                      isGif
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Separator />

            <div>
              <h4 className="orientation-step">
                6. Seu Minecraft está pronto para instalar o Modpack!
              </h4>
              <p>
                Depois de toda essa configuração, você vai ter feito o que é
                necessário para instalar o modpack do servidor. 🎉
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Separator />

      <p className="orientation-step mt-12 font-bold">
        Depois de configurar o launcher siga para o próximo passo:
      </p>
    </>
  );
}
