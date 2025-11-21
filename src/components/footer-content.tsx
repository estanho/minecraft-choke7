"use client";

import { LinkInline } from "@/components/links/link-inline";
import { Suspense } from "react";

export function FooterContent() {
  return (
    <div className="text-foreground/80 mt-8 p-8 text-center">
      <p className="font-semibold">
        ©{" "}
        <Suspense>
          <Year />
        </Suspense>
        {" Desenvolvido por "}
        <LinkInline
          href="https://pedrohrg.vercel.app/"
          text="Estanho"
          label="Link para o portfólio do programador Pedro Henrique (Estanho)"
        />
        .
      </p>
    </div>
  );
}

function Year() {
  const year = new Date().getFullYear();
  return year;
}
