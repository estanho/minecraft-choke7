import { UpdatesList } from "@/components/sections/updates/updates-list";
import { Card } from "@/components/ui/card";

export function UpdatesSection() {
  return (
    <section id="updates">
      <Card>
        <h2>Atualizações</h2>
        <UpdatesList />
      </Card>
    </section>
  );
}
