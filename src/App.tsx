export default function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <header>
        <div className="m-8 flex flex-col items-center justify-center gap-8 lg:flex-row">
          <div id="logo">
            <img
              src="./src/assets/head-skin-choke.png"
              alt="Imagem da skin do Choke"
              className="rounded-md object-contain"
            />
          </div>

          <div id="title-and-description">
            <h1>Servidor de Minecraft da Choke7</h1>
            <p>
              Servidor de Minecraft disponibilizado pela{" "}
              <a
                href="https://enxadahost.com/"
                target="_blank"
                rel="noreferrer"
              >
                EnxadaHost
              </a>{" "}
              para os SUBS da comunidade
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}
