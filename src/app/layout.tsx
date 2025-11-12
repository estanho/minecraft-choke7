import type { Metadata } from "next";
import { Press_Start_2P, Roboto } from "next/font/google";
import localFont from "next/font/local";

import "@/styles/main.css";

import { TanstackProvider } from "@/components/provider/tanstack-provider";
import { ThemeProvider } from "@/components/provider/theme-provider";

const pressStart2P = Press_Start_2P({
  variable: "--font-title",
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const minecraftia = localFont({
  src: "../../public/fonts/Minecraftia.ttf",
  variable: "--font-mine",
});

const monocraft = localFont({
  src: "../../public/fonts/Monocraft.ttf",
  variable: "--font-mine-icon",
});

export const metadata: Metadata = {
  title: "Minecraft Choke7",
  description: "Site do servidor de Minecraft da Choke7",
  creator: "Estanho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${pressStart2P.variable} ${roboto.variable} ${minecraftia.variable} ${monocraft.variable} antialiased`}
      >
        <TanstackProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
