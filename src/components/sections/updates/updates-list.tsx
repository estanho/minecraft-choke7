import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { updates } from "@/data/updates";
import { ChevronDown } from "lucide-react";

export function UpdatesList() {
  return (
    <div className="space-y-2">
      {updates.map((update, index) => {
        return (
          <Collapsible
            key={index}
            className={`rounded-xl border-2 ${update.existsDependency && "bg-background/30"}`}
          >
            <CollapsibleTrigger
              className={`flex w-full flex-col items-start gap-1 p-3 ${update.existsDependency && "cursor-pointer"}`}
              disabled={!update.existsDependency}
            >
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold">{update.date}</span>
                  {index === 0 && <Badge>Novo</Badge>}
                </div>

                <div>
                  <ChevronDown
                    className={`h-4 w-4 ${update.existsDependency ? "opacity-80" : "opacity-25"}`}
                  />
                </div>
              </div>
              <span className="text-start font-bold">
                {update.changes[0].title} ({update.changes[0].description})
              </span>
            </CollapsibleTrigger>
            {update.changes.map((change, index) => {
              return (
                <CollapsibleContent key={index} className="p-3 pt-0">
                  {change.dependency.map((value, index) => {
                    return (
                      <ul key={index} className="list-none">
                        <li className="m-0 text-sm italic">{value}</li>
                      </ul>
                    );
                  })}
                </CollapsibleContent>
              );
            })}
          </Collapsible>
        );
      })}
    </div>
  );
}
