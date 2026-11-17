import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, DoorToDoorBand } from "@/components/SiteLayout";
import { SERVICES } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services | NESH Computer Services" },
    { name: "description", content: "Repair, SSD & RAM upgrades, Windows installation, virus removal, networking, data recovery and door-to-door IT support." },
    { property: "og:title", content: "Computer Services by NESH" },
    { property: "og:description", content: "One place for all your computer needs — at your door." },
  ] }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our services" title="One place for your computer needs." text="Choose a service below or contact us if you are unsure what your device needs. Final pricing depends on the device, parts and work required." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([t, d], i) => (
            <div key={t} className="bg-card p-8">
              <div className="font-serif text-sm text-primary">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-3 text-lg font-bold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <DoorToDoorBand />
    </SiteLayout>
  );
}
