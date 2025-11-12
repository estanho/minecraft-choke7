import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ModalImgProps {
  src: string;
  alt: string;
}

export function ModalImg({ src, alt }: ModalImgProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-zoom-in">
          <Image
            src={src}
            alt={alt}
            width={800}
            height={800}
            loading="eager"
            className="rounded-lg border transition-opacity hover:opacity-80"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-[60%]">
        <DialogHeader>
          <DialogTitle hidden />
          <DialogDescription hidden />
        </DialogHeader>

        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          quality={100}
          className="mx-auto rounded-lg object-contain"
          draggable={false}
        />
      </DialogContent>
    </Dialog>
  );
}
