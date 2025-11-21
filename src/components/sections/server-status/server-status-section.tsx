import { ServerStatus } from "@/components/sections/server-status/server-status";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export function ServerStatusSection() {
  return (
    <section id="server-status">
      <div>
        <Card className="relative">
          <h2>Status do Servidor </h2>
          <Image
            src="/images/emotes/nerd.gif"
            alt="ícone de nerd"
            width={48}
            height={48}
            className="bg-card absolute -end-6 -top-6 m-2 rounded-full border p-2 hover:animate-spin dark:bg-[#121a0d]"
            unoptimized
          />
          <ServerStatus />
        </Card>
      </div>
    </section>
  );
}
