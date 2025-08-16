import headSkinChoke from "@/assets/head-skin-choke.png";
import CarouselMods from "@/components/carousel-mods";
import Link from "@/components/link";
import { ModeToggle } from "@/components/mode-toggle";
import FallingParticles from "@/components/particles";
import ServerStatus from "@/components/server-status";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  return (
    <div className="bg-[url('/images/backgrounds/main_bg.jpg')] transition-colors">
      <FallingParticles />

      <header>
        <div id="header-overlay" className="bg-lime-950/60">
          <ModeToggle />
          <div className="flex flex-col items-center justify-center gap-12 px-18 py-28 lg:flex-row lg:py-44">
            <div id="logo">
              <img
                src={headSkinChoke}
                alt="Imagem da skin do Choke"
                className="rounded-md"
              />
            </div>
            <div id="title-and-description">
              <div className="max-w-2xl text-white text-shadow-lime-950">
                <h1 className="font-title text-pretty">
                  Servidor de Minecraft da Choke7
                </h1>
                <p className="text-center text-xl">
                  Servidor de Minecraft disponibilizado pela{" "}
                  <Link href="https://enxadahost.com/" text="EnxadaHost" /> para
                  os SUBS da comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl space-y-8 px-4 py-12">
          <section id="mods" className="space-y-6 text-center lg:px-12">
            <CarouselMods />
          </section>

          <section id="server-status" className="mx-auto max-w-3xl">
            <Card className="relative">
              <h2>Status do Servidor </h2>
              <img
                src="/images/nerd.gif"
                alt="ícone de nerd"
                className="bg-card absolute -end-6 -top-6 m-2 h-12 w-12 rounded-3xl border-1 p-2 dark:bg-[#121a0d]"
              />
              <ServerStatus />
            </Card>
          </section>

          <section id="informations" className="mx-auto max-w-3xl">
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

          <section id="rules" className="mx-auto max-w-3xl">
            <Card>
              <h2>Regras</h2>
              <div className="flex flex-col items-center justify-center">
                <ul className="underline decoration-lime-600/60 decoration-2 underline-offset-2">
                  <li>Não destrua a contrução dos outros jogadores!</li>
                  <li>
                    Não será tolerado nenhum tipo de preconceito ou ofensa!
                  </li>
                  <li>Não abuse de bugs e não utilize trapaças!</li>
                </ul>
                <p className="text-center">
                  Qualquer problema ou denúncia, converse com os ADM&apos;s no
                  Discord. Mantenha o respeito e não seja um cuzão!
                </p>
              </div>
            </Card>
          </section>

          <section id="orientations" className="mx-auto max-w-3xl">
            <Card>
              <h2>Orientações</h2>
              <div className="space-y-4">
                <h3>Tutorial em Vídeo</h3>
                <p>
                  Tutorial completo de como instalar e configurar o seu
                  Minecraft para jogar no servidor sem problemas.
                </p>
                <div className="flex flex-col items-center justify-center">
                  <iframe
                    className="h-96 w-full rounded-lg border-1"
                    src="https://www.youtube.com/embed/XxBiCtJ4bWU?si=nLh-K03EW3QiZO4a"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <h3>Passo a Passo</h3>
              <Tabs defaultValue="launcher">
                <TabsList>
                  <TabsTrigger value="launcher">Launchers</TabsTrigger>
                  <TabsTrigger value="downloads">Downloads</TabsTrigger>
                  <TabsTrigger value="password">Senha no Minecraft</TabsTrigger>
                  <TabsTrigger value="whitelist">Whitelist</TabsTrigger>
                </TabsList>
                <TabsContent value="launcher">
                  <div className="space-y-4">
                    <h3>Launchers</h3>
                    <div>
                      <p>
                        Para executar o Minecraft é necessário possuir um
                        launcher.
                      </p>
                      <p>
                        Todos os Launchers são compatíveis com o servidor com
                        exceção do TLauncher (se você utiliza o TLauncher
                        recomendo muito trocar para o SKLauncher que é muito
                        mais performático e recente, além de não possuir
                        polêmicas relacionadas a{" "}
                        <Link
                          href="https://www.techtudo.com.br/guia/2024/08/minecraft-tlauncher-tem-virus-veja-riscos-de-jogar-colocar-skins-e-mais-edjogos.ghtml"
                          text="spyware"
                        />
                        ).
                      </p>
                      <p>Escolha qual launcher você vai utilizar.</p>
                      <Accordion type="multiple">
                        <AccordionItem value="sklauncher">
                          <AccordionTrigger className="cursor-pointer">
                            <div className="flex items-center gap-3">
                              <img
                                src="/images/launchers/logo-sklauncher.png"
                                alt="Logo do SKLauncher"
                                className="w-10 rounded-lg object-cover"
                              />
                              <span>SKLauncher (Recomendado)</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>teste</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="original" className="mt-2">
                          <AccordionTrigger className="cursor-pointer">
                            <div className="flex items-center gap-3">
                              <img
                                src="/images/launchers/logo-original.png"
                                alt="Logo do SKLauncher"
                                className="w-10 rounded-lg object-cover"
                              />
                              <span>Launcher Original</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>teste</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <p>
                        Para os outros launchers a instalação é bem semelhante.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
