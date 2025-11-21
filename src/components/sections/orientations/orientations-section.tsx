"use client";

import { LinkInline } from "@/components/links/link-inline";
import { TabDownloads } from "@/components/sections/orientations/tabs/tab-downloads";
import { TabLaunchers } from "@/components/sections/orientations/tabs/tab-launchers";
import { TabNext } from "@/components/sections/orientations/tabs/tab-next";
import { TabPassword } from "@/components/sections/orientations/tabs/tab-password";
import { TabWhitelist } from "@/components/sections/orientations/tabs/tab-whitelist";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRef, useState } from "react";

export function OrientationsSection() {
  const targetElement = useRef<HTMLDivElement>(null);
  const [tab, setTab] = useState("launchers");

  function scrollingToElement() {
    if (!targetElement.current) return;
    targetElement.current.scrollIntoView({
      behavior: "smooth" as ScrollBehavior,
    });
  }

  return (
    <section id="orientations" className="mx-auto max-w-4xl">
      <Card>
        <h2>Tutorial para Primeira Instalação</h2>
        <div id="tutorial" className="space-y-4">
          <h3>Tutorial em Vídeo</h3>
          <p>
            Tutorial rápido de como instalar e configurar o seu Minecraft para
            jogar no servidor.
          </p>
          <p className="font-bold">
            Veja o Passo a Passo abaixo para uma explicação mais detalhada.
          </p>
          <div className="flex flex-col items-center justify-center">
            <iframe
              className="h-96 w-full rounded-lg border"
              src="https://www.youtube.com/embed/YnDn30lNWUw?si=4PAARMyB5L7T-cg-"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h3 ref={targetElement}>Passo a Passo</h3>
        <p className="mt-0">
          Leia tudo com atenção, é importante! Caso tenha alguma dúvida, entre
          em contato com os admins no{" "}
          <LinkInline
            href="https://discord.gg/cc5f88JyMp"
            text="Discord"
            label="Link para o Discord da Choke7"
          />
          .
        </p>
        <Tabs defaultValue="launchers" value={tab} onValueChange={setTab}>
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
              onChange={setTab}
              tabName="downloads"
              buttonText="Downloads"
            />
          </TabsContent>
          <TabsContent value="downloads">
            <TabDownloads />
            <TabNext
              scrollingToElement={scrollingToElement}
              onChange={setTab}
              tabName="password"
              buttonText="Senha do Minecraft"
            />
          </TabsContent>
          <TabsContent value="password">
            <TabPassword />
            <TabNext
              scrollingToElement={scrollingToElement}
              onChange={setTab}
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
  );
}
