import { Button } from "@/components/ui/button";
import { Link2Icon } from "lucide-react";

interface LinkButtonProps {
  href: string;
  text: string;
  label: string;
}

export function LinkButton({ href, text, label }: LinkButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Button
        variant={"link"}
        size={"lg"}
        className="hover:bg-primary/5 mb-4 cursor-pointer border"
      >
        <Link2Icon />
        {text}
      </Button>
    </a>
  );
}
