import { createFileRoute, Link } from "@tanstack/react-router";
import { Wrench, Zap, HardDrive, Check, ShieldCheck, Clock, Home } from "lucide-react";
import { SiteLayout, DoorToDoorBand } from "@/components/SiteLayout";
import { waLink } from "@/lib/site";
import hero from "@/assets/hero-technician.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NESH Computer Services | Door-to-Door Computer Repair KL & Selangor" },
      { name: "description", content: "Professional computer and laptop repair, upgrades and IT support. Door-to-door service across Kuala Lumpur & Selangor." },
      { property: "og:title", content: "NESH Computer Services" },
      { property: "og:description", content: "Door-to-door computer & laptop repair, upgrades and IT support in KL & Selangor." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img src={hero} alt="Technician repairing a laptop at a customer's home" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="eyebrow !text-navy-foreground/70">Reliable solutions · Better performance</div>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">Computer problems? We come to your door.</h1>
          <p className="mt-6 max-w-xl text-lg opacity-85">Professional computer and laptop repair, upgrades and IT support for homes, offices and businesses across Kuala Lumpur and Selangor.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-navy-foreground/30 px-4 py-2 text-sm font-semibold"><Home className="h-4 w-4" /> We Are Doing Door-to-Door Services Also</div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/booking" className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">Book a Service</Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="rounded-sm border border-navy-foreground/40 px-6 py-3 font-semibold hover:bg-navy-foreground/10">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <section className="border-b bg-card">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-8 sm:grid-cols-3">
          {[[Home, "Home & office visits"], [ShieldCheck, "Careful with your data"], [Clock, "Clear, friendly support"]].map(([I, t]: any) => (
            <div key={t} className="flex items-center gap-3 text-sm font-medium"><I className="h-5 w-5 text-primary" />{t}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="eyebrow">What we do</div>
        <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">Complete computer care, made simple.</h2>
        <span className="rule-accent mt-5" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border bg-border md:grid-cols-3">
          {[[Wrench, "Repair & Troubleshooting", "Diagnostics, hardware replacement and performance troubleshooting."],
            [Zap, "SSD & RAM Upgrades", "Upgrade storage and memory to improve everyday responsiveness."],
            [HardDrive, "Data Transfer & Backup", "HDD-to-SSD migration, file transfer, backup and recovery help."]].map(([I, t, d]: any) => (
            <div key={t} className="bg-card p-8">
              <I className="h-8 w-8 text-primary" />
              <h3 className="mt-5 text-xl font-bold text-navy">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="mt-8 inline-block font-semibold text-primary hover:underline">View all services →</Link>
      </section>

      <DoorToDoorBand />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <div className="eyebrow">At your location</div>
          <h2 className="mt-3 text-3xl font-bold text-navy">Home, office, shop or business.</h2>
          <span className="rule-accent mt-5" />
          <p className="mt-6 text-muted-foreground">Can't bring your device to a workshop? We arrange a suitable visit based on your location, job type and availability.</p>
        </div>
        <ul className="space-y-4">
          {["Home computer and laptop support", "Office PC, printer and network setup", "Software installation and system maintenance", "New computer setup and upgrades"].map((t) => (
            <li key={t} className="flex items-start gap-3 border-b pb-4"><Check className="mt-0.5 h-5 w-5 text-primary" />{t}</li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
