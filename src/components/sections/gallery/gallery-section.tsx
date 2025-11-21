import { Gallery } from "@/components/gallery";
import { Card } from "@/components/ui/card";

export function GallerySection() {
  return (
    <section id="gallery">
      <div>
        <Card>
          <h2>Galeria</h2>
          <Gallery />
        </Card>
      </div>
    </section>
  );
}
