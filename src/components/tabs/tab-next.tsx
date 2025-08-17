import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TabNextProps {
  scrollingToElement: (value: string) => void;
  tabName: string;
  buttonText: string;
}

export function TabNext({
  scrollingToElement,
  tabName,
  buttonText,
}: TabNextProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button
        variant={"outline"}
        className="cursor-pointer"
        onClick={() => scrollingToElement(tabName)}
      >
        {buttonText}
        <ArrowRight />
      </Button>
    </div>
  );
}
