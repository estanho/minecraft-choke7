import headSkinChoke from "@/assets/head-skin-choke.png";
import CarouselMods from "@/components/carousel-mods";
import FallingParticles from "@/components/particles";
import ServerStatus from "@/components/server-status";

export default function App() {
  return (
    <div>
      <FallingParticles />
      <div className="mx-auto flex max-w-6xl flex-col bg-lime-950">
        <header>
          <div className="flex flex-col items-center justify-center gap-8 bg-lime-950/60 px-18 py-44 lg:flex-row">
            <div id="logo">
              <img
                src={headSkinChoke}
                alt="Imagem da skin do Choke"
                className="rounded-md object-contain"
              />
            </div>
            <div id="title-and-description">
              <div className="text-center text-white text-shadow-lg">
                <h1 className="font-title">Servidor de Minecraft da Choke7</h1>
                <p>
                  Servidor de Minecraft disponibilizado pela{" "}
                  <a
                    href="https://enxadahost.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EnxadaHost
                  </a>{" "}
                  para os SUBS da comunidade.
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="text-pretty">
          <section id="mods" className="px-12 py-4">
            <div className="px-4 lg:px-12">
              <CarouselMods />
            </div>
          </section>

          <ServerStatus />

          <section id="informations" className="px-12 py-4">
            <div className="flex flex-col items-center justify-center">
              <h2>Informações Gerais</h2>
              <ul>
                <li>Minecraft (1.20.1) - Forge (47.4.0).</li>
                <li>Servidor dedicado (24/7).</li>
                <li>Backup realizado todos os dias durante a madrugada.</li>
              </ul>
            </div>
          </section>

          <section className="px-12 py-4">
            <div className="flex flex-col items-center justify-center">
              <h2>Regras</h2>

              <ul>
                <li>Não destrua a contrução dos outros jogadores!</li>
                <li>Não será tolerado nenhum tipo de preconceito ou ofensa!</li>
                <li>Não abuse de bugs e não utilize trapaças!</li>
              </ul>
              <p>
                Qualquer problema ou denúncia, converse com os ADM&apos;s no
                Discord. Mantenha o respeito e não seja um cuzão!
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
