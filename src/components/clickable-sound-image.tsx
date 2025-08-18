import aum from "@/assets/sounds/aum.mp3";
import galera from "@/assets/sounds/galera.mp3";
import imenso from "@/assets/sounds/imenso.mp3";
import paysandu from "@/assets/sounds/paysandu.mp3";
import semvergonha from "@/assets/sounds/semvergonha.mp3";
import uaaaaa from "@/assets/sounds/uaaaaa.mp3";
import unhe from "@/assets/sounds/unhe.mp3";
import React, { useRef } from "react";

interface ClickableSoundImageProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "onClick"> {
  src?: string;
  alt?: string;
  soundUrl?: string;
  volume?: number;
  className?: string;
}

export function ClickableSoundImage({
  src,
  alt,
  soundUrl,
  className,
  volume = 0.5,
  ...props
}: ClickableSoundImageProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const randomSounds = [
    aum,
    galera,
    imenso,
    paysandu,
    semvergonha,
    uaaaaa,
    unhe,
  ];

  const getSound = (): string => {
    if (soundUrl) {
      return soundUrl;
    }

    const randomIndex = Math.floor(Math.random() * randomSounds.length);
    return randomSounds[randomIndex];
  };

  const handleClick = (): void => {
    if (audioRef.current) {
      const selectedSound = getSound();

      audioRef.current.src = selectedSound;
      audioRef.current.currentTime = 0;
      audioRef.current.volume = volume;

      audioRef.current.play().catch((err: Error) => {
        console.log("Erro ao reproduzir áudio:", err);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} preload="none" />

      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        className={`cursor-pointer transition-transform select-none hover:scale-105 active:scale-95 ${className}`}
        draggable={false}
        {...props}
      />
    </>
  );
}
