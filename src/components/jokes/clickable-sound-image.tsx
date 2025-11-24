"use client";

import Image from "next/image";
import { useRef } from "react";

interface ClickableSoundImageProps {
  src: string;
  alt: string;
  soundUrl?: string;
  volume?: number;
  className?: string;
  width: number;
  height: number;
  priority?: boolean;
  fill?: boolean;
}

export function ClickableSoundImage({
  src,
  alt,
  soundUrl,
  className = "",
  volume = 0.5,
  width,
  height,
  priority = false,
  fill = false,
}: ClickableSoundImageProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  const randomSounds = [
    "sounds/aum.mp3",
    "sounds/galera.mp3",
    "sounds/imenso.mp3",
    "sounds/paysandu.mp3",
    "sounds/semvergonha.mp3",
    "sounds/uaaaaa.mp3",
    "sounds/unhe.mp3",
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

      {fill ? (
        <div className={`relative ${className}`} onClick={handleClick}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            fill={fill}
            priority={priority}
            className="cursor-pointer object-cover transition-transform select-none hover:scale-105 active:scale-95"
            draggable={false}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          onClick={handleClick}
          className={`cursor-pointer object-contain transition-transform select-none hover:scale-105 active:scale-95 ${className}`}
          draggable={false}
        />
      )}
    </>
  );
}
