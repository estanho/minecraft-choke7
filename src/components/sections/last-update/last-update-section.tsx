import { DownloadUpdate } from "@/components/download-update";
import { Card } from "@/components/ui/card";

export function LastUpdateSection() {
  return (
    <section id="update">
      <Card>
        <h2>Download da Última Atualização (30/11/2025)</h2>
        <DownloadUpdate />
      </Card>
    </section>
  );
}
