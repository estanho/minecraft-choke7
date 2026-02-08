import { Card } from "@/components/ui/card";

export function RulesSection() {
  return (
    <section id="rules" className="mx-auto max-w-4xl">
      <Card>
        <h2>Regras</h2>
        <div className="flex flex-col items-center justify-center">
          <ul>
            <li>Não destrua a construção de outros jogadores!</li>
            <li>Não será tolerado nenhum tipo de preconceito ou ofensa!</li>
            <li>Não abuse de bugs e não utilize trapaças!</li>
            <li>
              Só é permitido o uso de &quot;chunk loaders&quot; em armazéns de
              itens.
            </li>
          </ul>
          <p className="text-lg font-bold">
            Desrespeitar as regras acarretará em punições no servidor e na live!
          </p>
          <p className="mt-0 text-sm">
            Caso tenha qualquer dúvida ou problema, converse com os
            administradores no Discord.
          </p>
          <blockquote className="text-muted-foreground mt-6 border-l-2 pl-6 italic">
            &quot;Não seja um c*zão.&quot; - Choke7
          </blockquote>
        </div>
      </Card>
    </section>
  );
}
