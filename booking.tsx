import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { SERVICES, AREA, PHONE, waLink } from "@/lib/site";

export const Route = createFileRoute("/booking")({
  head: () => ({ meta: [
    { title: "Book a Job | NESH Computer Services" },
    { name: "description", content: "Request a computer service appointment or a door-to-door technician visit in KL & Selangor." },
    { property: "og:title", content: "Book a NESH Computer Service" },
    { property: "og:description", content: "Choose your service, date and time — we confirm by WhatsApp." },
  ] }),
  component: Booking,
});

const SLOTS = ["9:00 AM – 11:00 AM", "11:00 AM – 1:00 PM", "1:00 PM – 3:00 PM", "3:00 PM – 5:00 PM", "5:00 PM – 7:00 PM"];
const field = "mt-1.5 w-full rounded-sm border border-input bg-card px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

function Booking() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.currentTarget)) as { [k in "name"|"phone"|"service"|"device"|"visit"|"date"|"time"|"location"|"details"]: string };
    const msg = `New NESH booking request\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nDevice: ${f.device || "-"}\nVisit type: ${f.visit}\nDate: ${f.date}\nTime: ${f.time}\nLocation: ${f.location}\nDetails: ${f.details || "-"}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  }
  return (
    <SiteLayout>
      <PageHeader eyebrow="Appointment request" title="Book a computer service." text="Tell us what you need and choose your preferred date and time. Your request is sent to NESH on WhatsApp and we reply to confirm." />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_2fr]">
        <aside>
          <h2 className="text-2xl font-bold text-navy">How booking works</h2>
          <ol className="mt-6 space-y-4 text-sm">
            {["Choose your required service", "Pick a preferred date and time slot", "Share your location — we offer door-to-door visits", "Send the request on WhatsApp and wait for NESH to confirm"].map((s, i) => (
              <li key={s} className="flex gap-3"><span className="font-serif font-bold text-primary">{i + 1}.</span>{s}</li>
            ))}
          </ol>
          <div className="mt-8 rounded-sm bg-secondary p-6 text-sm">
            <div className="eyebrow">Service area</div><p className="mt-1">{AREA}</p>
            <div className="eyebrow mt-4">WhatsApp</div><p className="mt-1">{PHONE}</p>
          </div>
        </aside>
        <form onSubmit={submit} className="grid gap-5 rounded-sm border bg-card p-8 sm:grid-cols-2">
          <label className="text-sm font-medium">Full name *<input name="name" required maxLength={100} className={field} /></label>
          <label className="text-sm font-medium">Contact number *<input name="phone" required maxLength={20} type="tel" className={field} /></label>
          <label className="text-sm font-medium">Service required *
            <select name="service" required className={field} defaultValue=""><option value="" disabled>Select a service</option>{SERVICES.map(([t]) => <option key={t}>{t}</option>)}<option>Other / Not sure</option></select>
          </label>
          <label className="text-sm font-medium">Device type
            <select name="device" className={field} defaultValue=""><option value="">Select device</option><option>Laptop</option><option>Desktop PC</option><option>Printer / Network</option><option>Other</option></select>
          </label>
          <label className="text-sm font-medium sm:col-span-2">Service type *
            <select name="visit" required className={field}><option>Door-to-door (technician visits me)</option><option>I will drop off / discuss</option></select>
          </label>
          <label className="text-sm font-medium">Preferred date *<input name="date" type="date" required className={field} /></label>
          <label className="text-sm font-medium">Preferred time slot *
            <select name="time" required className={field} defaultValue=""><option value="" disabled>Choose a time</option>{SLOTS.map((s) => <option key={s}>{s}</option>)}</select>
          </label>
          <label className="text-sm font-medium sm:col-span-2">Service location / area *<input name="location" required maxLength={200} className={field} /></label>
          <label className="text-sm font-medium sm:col-span-2">Describe the problem / job details<textarea name="details" rows={4} maxLength={1000} className={field} /></label>
          <div className="sm:col-span-2">
            <button className="rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-navy">Send booking request via WhatsApp</button>
            {sent && <p className="mt-3 text-sm text-primary">WhatsApp opened with your booking details — press send there to deliver it.</p>}
            <p className="mt-3 text-xs text-muted-foreground">This is an appointment request, not an instant confirmed booking. NESH will contact you to confirm.</p>
          </div>
        </form>
      </section>
    </SiteLayout>
  );
}
