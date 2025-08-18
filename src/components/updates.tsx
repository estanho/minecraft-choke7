import { Badge } from "@/components/ui/badge";
import { updates } from "@/data/updates";

export function Updates() {
  return (
    <>
      {updates.map((update, index) => {
        return (
          <div key={index}>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold">{update.date}</span>
              {index === 0 && <Badge>Novo</Badge>}
            </div>
            {update.changes.map((change) => {
              return (
                <ul key={change.title}>
                  <li className="m-0 text-base">
                    <span className="font-bold">{change.title}</span> (
                    {change.description})
                    {change.dependency.map((value, index) => {
                      return (
                        <ul key={index}>
                          <li className="m-0 text-sm italic">{value}</li>
                        </ul>
                      );
                    })}
                  </li>
                </ul>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
