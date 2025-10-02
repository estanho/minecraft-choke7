import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { updates } from "@/data/updates";

export function UpdatesList() {
  return (
    <>
      {updates.map((update, index) => {
        return (
          <Collapsible
            key={index}
            className={`rounded-2xl border-1 ${update.existsDependency && "bg-background/30 border-2"}`}
          >
            <CollapsibleTrigger
              className={`flex w-full flex-col items-start gap-1 p-3 ${update.existsDependency && "cursor-pointer"}`}
              disabled={!update.existsDependency}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">{update.date}</span>
                {index === 0 && <Badge>Novo</Badge>}
              </div>
              <span className="font-bold">
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
    </>
  );
}
