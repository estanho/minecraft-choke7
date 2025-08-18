import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalImgProps {
  src: string;
  alt: string;
}

export function ModalImg({ src, alt }: ModalImgProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-zoom-in">
          <img
            src={src}
            alt={alt}
            className="rounded-lg border transition-opacity hover:opacity-80"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="min-w-[60%]">
        <DialogHeader>
          <DialogTitle>{alt}</DialogTitle>
          <DialogDescription hidden />
        </DialogHeader>

        <img
          src={src}
          alt={alt}
          className="mx-auto rounded-lg object-contain"
          draggable={false}
        />
      </DialogContent>
    </Dialog>
  );
}
