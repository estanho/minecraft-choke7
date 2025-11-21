import { Card } from "@/components/ui/card";

export function InformationSection() {
  return (
    <section id="informations" className="mx-auto max-w-4xl">
      <Card>
        <h2>Informações Gerais</h2>
        <div className="flex flex-col items-center justify-center">
          <ul>
            <li>
              Servidor exclusivo para os <span className="font-bold">SUBS</span>{" "}
              da live da <span className="font-bold">Choke7</span>.
            </li>
            <li>
              Minecraft Java (<span className="font-bold">1.20.1</span>).
            </li>
            <li>
              Forge (<span className="font-bold">47.4.0 ★</span>)
            </li>
            <li>
              Servidor reinicia às 18:00 e 06:00 (
              <span className="text-base">UTC-3</span>).
            </li>
            <li>
              Servidor dedicado (<span className="text-base">Online 24/7</span>
              ).
            </li>
          </ul>
        </div>
      </Card>
    </section>
  );
}
