import { Alert } from "@/components/alert";
import { FooterContent } from "@/components/footer-content";
import { HeaderContent } from "@/components/header-content";
import { FallingParticles } from "@/components/particles/particles";
import { GallerySection } from "@/components/sections/gallery/gallery-section";
import { InformationSection } from "@/components/sections/information/information-section";
import { LastUpdateSection } from "@/components/sections/last-update/last-update-section";
import { ModsSection } from "@/components/sections/mods/mods-section";
import { OrientationsSection } from "@/components/sections/orientations/orientations-section";
import { RulesSection } from "@/components/sections/rules/rules-section";
import { ServerStatusSection } from "@/components/sections/server-status/server-status-section";
import { UpdatesSection } from "@/components/sections/updates/updates-section";

export default function Home() {
  return (
    <div>
      <FallingParticles />
      <Alert />

      <header>
        <HeaderContent />
      </header>

      <main>
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-12">
          <ModsSection />

          <div className="mx-auto max-w-4xl space-y-6">
            <ServerStatusSection />
            <GallerySection />
            <InformationSection />
            <RulesSection />
            <OrientationsSection />
            <LastUpdateSection />
            <UpdatesSection />
          </div>
        </div>
      </main>

      <footer>
        <FooterContent />
      </footer>
    </div>
  );
}
