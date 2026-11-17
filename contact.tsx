import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { SiteLayout, PageHeader, DoorToDoorBand } from "@/components/SiteLayout";
import { PHONE, EMAIL, AREA, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact | NESH Computer Services" },
    { name: "description", content: "Contact NESH on WhatsApp 011-30842771 or email for repairs, upgrades and door-to-door support in KL & Selangor." },
    { property: "og:title", content: "Contact NESH Computer Services" },
    { property: "og:description", content: "WhatsApp, email or book a door-to-door visit." },
  ] }),
  component: Contact,
});

function Contact() {
  const cards = [
    [Phone, "WhatsApp / Phone", PHONE, waLink(), "Chat on WhatsApp"],
    [Mail, "Email", EMAIL, `mailto:${EMAIL}`, "Send an email"],
    [MapPin, "Service area", AREA, null, "Door-to-door · Home · Office · Shop"],
  ] as const;
  return (
    <SiteLayout>
      <PageHeader eyebrow="Get in touch" title="Let's get your device working." text="Contact NESH Computer Services for repair enquiries, upgrades, data transfer and door-to-door support." />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-3">
        {cards.map(([I, t, v, href, cta]) => (
          <div key={t} className="rounded-sm border bg-card p-8">
            <I className="h-7 w-7 text-primary" />
            <div className="eyebrow mt-5">{t}</div>
            <div className="mt-2 break-words font-serif text-lg font-bold text-navy">{v}</div>
            {href ? <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">{cta} →</a> : <p className="mt-4 text-sm text-muted-foreground">{cta}</p>}
          </div>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-sm bg-secondary p-10">
          <h2 className="text-2xl font-bold text-navy">Need a technician? Tell us what is happening.</h2>
          <p className="mt-3 text-muted-foreground">Send a short message with your device model, issue and location. We will get back to you to discuss the next step.</p>
          <a href={waLink("Hi NESH, I need help with my computer.")} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground">Message NESH on WhatsApp</a>
          <p className="mt-4 text-xs text-muted-foreground">Please do not send passwords, banking details or other sensitive information.</p>
        </div>
      </section>
      <DoorToDoorBand />
    </SiteLayout>
  );
}
