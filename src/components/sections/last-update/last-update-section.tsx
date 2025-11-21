import { DownloadUpdate } from "@/components/download-update";
import { Card } from "@/components/ui/card";

export function LastUpdateSection() {
  return (
    <section id="update">
      <Card>
        <h2>Download da Última Atualização</h2>
        <DownloadUpdate />
      </Card>
    </section>
  );
}
