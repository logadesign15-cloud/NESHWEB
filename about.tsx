import { createFileRoute } from "@tanstack/react-router";
import { Check, MessageSquare, Settings, Handshake } from "lucide-react";
import { SiteLayout, PageHeader, DoorToDoorBand } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us | NESH Computer Services" },
    { name: "description", content: "NESH provides practical, door-to-door computer and laptop services for homes, offices and businesses in KL & Selangor." },
    { property: "og:title", content: "About NESH Computer Services" },
    { property: "og:description", content: "Technology support you can count on, at your door." },
  ] }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="About NESH" title="Technology support you can count on." text="NESH Computer Services provides practical computer and laptop services for individuals, homes, offices and businesses in Kuala Lumpur and Selangor — with door-to-door service available." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="eyebrow">Who we are</div>
          <h2 className="mt-3 text-3xl font-bold text-navy">Reliable solutions. Better performance.</h2>
          <p className="mt-6 text-muted-foreground">We help customers solve everyday computer problems, maintain their devices and make sensible upgrades. Whether you need troubleshooting, a Windows setup, data transfer or on-site assistance, we make the process clear and convenient.</p>
          <p className="mt-4 text-muted-foreground">Our approach is simple: understand the issue, explain the service, and work toward a dependable solution.</p>
        </div>
        <ul className="space-y-4 self-center">
          {["Professional and friendly service", "Affordable, practical recommendations", "Careful handling of customer devices and data", "Door-to-door support for home, office and business"].map((t) => (
            <li key={t} className="flex gap-3 border-b pb-4"><Check className="h-5 w-5 text-primary" />{t}</li>
          ))}
        </ul>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="eyebrow">Our promise</div>
          <h2 className="mt-3 text-3xl font-bold text-navy">We fix. We upgrade. We care.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[[MessageSquare, "Clear communication", "We explain the issue and discuss the proposed work with you."],
              [Settings, "Quality workmanship", "We focus on careful service and appropriate solutions."],
              [Handshake, "Reliable support", "We want you to feel confident using your devices after service."]].map(([I, t, d]: any) => (
              <div key={t} className="rounded-sm border bg-card p-8"><I className="h-7 w-7 text-primary" /><h3 className="mt-4 text-lg font-bold text-navy">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
      <DoorToDoorBand />
    </SiteLayout>
  );
}
