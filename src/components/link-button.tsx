import { Button } from "@/components/ui/button";
import { Link2Icon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  text: string;
  label: string;
}

export function LinkButton({ href, text, label }: LinkButtonProps) {
  return (
    <Button size={"lg"} className="mb-4 cursor-pointer border" asChild>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Link2Icon />
        {text}
      </a>
    </Button>
  );
}
