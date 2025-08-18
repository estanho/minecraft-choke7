import headSkinChoke from "@/assets/head-skin-choke.png";
import { CarouselMods } from "@/components/carousel-mods";
import { ClickableSoundImage } from "@/components/jokes/clickable-sound-image";
import { LinkButton } from "@/components/links/link-button";
import { LinkInline } from "@/components/links/link-inline";
import { ModeToggle } from "@/components/mode-toggle";
import { NetworkButtons } from "@/components/network-buttons";
import { FallingParticles } from "@/components/particles/particles";
import { ServerStatus } from "@/components/server-status";
import { TabDownloads } from "@/components/tabs/tab-downloads";
import { TabLaunchers } from "@/components/tabs/tab-launchers";
import { TabNext } from "@/components/tabs/tab-next";
import { TabPassword } from "@/components/tabs/tab-password";
import { TabWhitelist } from "@/components/tabs/tab-whitelist";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UpdatesList } from "@/components/updates-list";
import { download } from "@/data/download";
import { useRef, useState } from "react";

export default function App() {
  const [value, setValue] = useState("launchers");

  const targetElement = useRef<HTMLDivElement>(null);

  function scrollingToElement(value: string) {
    setValue(value);
    if (!targetElement.current) return;
    targetElement.current.scrollIntoView({
      behavior: "smooth" as ScrollBehavior,
    });
  }

  return (
    <div className="bg-[url('/images/backgrounds/main_bg.jpg')] transition-colors">
      <FallingParticles />

      <header>
        <div id="header-overlay" className="bg-lime-950/50">
          <ModeToggle />
          <div className="flex flex-col items-center justify-center gap-12 px-18 py-28 lg:flex-row lg:py-44">
            <div id="logo">
              <ClickableSoundImage
                src={headSkinChoke}
                alt="Imagem da skin do Choke"
                className="rounded-lg"
              />
            </div>
            <div id="title-and-description">
              <div className="max-w-2xl space-y-3 text-white text-shadow-lime-950">
                <h1 className="font-title text-pretty">
                  Servidor de Minecraft da Choke7
                </h1>
                <p className="text-center text-xl">
                  Servidor de Minecraft disponibilizado pela{" "}
                  <LinkInline
                    href="https://enxadahost.com/"
                    text="EnxadaHost"
                    label="Link para o site da EnxadaHost"
                  />{" "}
                  para os SUBS da comunidade.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <NetworkButtons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-12">
          <section id="mods" className="space-y-6 text-center lg:px-12">
            <CarouselMods />
          </section>

          <section id="server-status" className="mx-auto max-w-4xl">
            <Card className="relative">
              <h2>Status do Servidor </h2>
              <img
                src="/images/emotes/nerd.gif"
                alt="ícone de nerd"
                className="bg-card absolute -end-6 -top-6 m-2 h-12 w-12 rounded-3xl border-1 p-2 hover:animate-spin dark:bg-[#121a0d]"
              />
              <ServerStatus />
            </Card>
          </section>

          <section id="informations" className="mx-auto max-w-4xl">
            <Card>
              <h2>Informações Gerais</h2>
              <div className="flex flex-col items-center justify-center">
                <ul>
                  <li>Servidor exclusivo para os SUBS da live da Choke7.</li>
                  <li>Minecraft Java 1.20.1 - Forge (47.4.0).</li>
                  <li>Servidor dedicado (24/7).</li>
                  <li>Backup realizado todos os dias durante a madrugada.</li>
                </ul>
              </div>
            </Card>
          </section>

          <section id="rules" className="mx-auto max-w-4xl">
            <Card>
              <h2>Regras</h2>
              <div className="flex flex-col items-center justify-center">
                <ul>
                  <li>Não destrua a contrução dos outros jogadores!</li>
                  <li>
                    Não será tolerado nenhum tipo de preconceito ou ofensa!
                  </li>
                  <li>Não abuse de bugs e não utilize trapaças!</li>
                </ul>
                <p className="text-center">
                  Qualquer problema ou denúncia, converse com os administradores
                  no Discord.
                </p>
                <blockquote className="text-muted-foreground mt-6 border-l-2 pl-6 italic">
                  &quot;Não seja um c*zão.&quot; - Choke7
                </blockquote>
              </div>
            </Card>
          </section>

          <section id="orientations" className="mx-auto max-w-4xl">
            <Card>
              <h2 ref={targetElement}>Tutorial para instalação</h2>
              <Tabs
                defaultValue="launchers"
                value={value}
                onValueChange={setValue}
              >
                <TabsList>
                  <TabsTrigger value="launchers">Launchers</TabsTrigger>
                  <TabsTrigger value="downloads">Downloads</TabsTrigger>
                  <TabsTrigger value="password">Senha no Minecraft</TabsTrigger>
                  <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
                </TabsList>
                <TabsContent value="launchers">
                  <TabLaunchers />
                  <TabNext
                    scrollingToElement={scrollingToElement}
                    tabName="downloads"
                    buttonText="Downloads"
                  />
                </TabsContent>
                <TabsContent value="downloads">
                  <TabDownloads />
                  <TabNext
                    scrollingToElement={scrollingToElement}
                    tabName="password"
                    buttonText="Senha do Minecraft"
                  />
                </TabsContent>
                <TabsContent value="password">
                  <TabPassword />
                  <TabNext
                    scrollingToElement={scrollingToElement}
                    tabName="whitelist"
                    buttonText="Whitelist"
                  />
                </TabsContent>
                <TabsContent value="whitelist">
                  <TabWhitelist />
                </TabsContent>
              </Tabs>
            </Card>
          </section>

          <section id="update-download" className="mx-auto max-w-4xl">
            <Card>
              <h2>Arquivo de Download da Última Atualização</h2>
              <div>
                <p>
                  Só funciona se você já tiver realizada a primeira instalação!
                  Download somente dos arquivos modificados pela última
                  atualização. Sempre substitua a pasta &quot;mods&quot; por
                  completo!
                </p>
                <div className="mt-4 max-w-fit">
                  <LinkButton
                    href={download.last_update_url}
                    text="Download da atualização"
                    label="Link para download da atualização"
                  />
                </div>
              </div>
            </Card>
          </section>

          <section id="updates" className="mx-auto max-w-4xl">
            <Card>
              <h2>Atualizações</h2>
              <UpdatesList />
            </Card>
          </section>
        </div>
      </main>

      <footer className="text-foreground/80 mt-8 p-8 text-center">
        <p className="font-semibold">
          © {new Date().getFullYear()}
          {" Equipe da Lagoa Azul e "}
          <LinkInline
            href="https://pedrohrg.vercel.app/"
            text="Estanho"
            label="Link para o portfólio do programador Pedro Henrique (Estanho)"
          />
          .
        </p>
      </footer>
    </div>
  );
}
