import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, Truck } from "lucide-react";
import logo from "@/assets/nesh_logo.png.asset.json";
import { PHONE, EMAIL, AREA, waLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/our-work", label: "Our Work" },
  { to: "/booking", label: "Booking Job" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-navy text-navy-foreground text-xs">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2">
          <span className="flex items-center gap-2"><Truck className="h-3.5 w-3.5" /> Door-to-door computer services across {AREA}</span>
          <span className="hidden sm:inline">WhatsApp {PHONE} · {EMAIL}</span>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo.url} alt="NESH Computer Services logo" className="h-14 w-14 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold tracking-wide text-navy">NESH</div>
              <div className="text-[10px] tracking-[0.25em] text-muted-foreground">COMPUTER SERVICES</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
                className="text-sm font-medium text-foreground/75 hover:text-primary"
                activeProps={{ className: "text-primary" }}>{n.label}</Link>
            ))}
            <Link to="/booking" className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-navy">Book a Service</Link>
          </nav>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col border-t px-6 py-3 md:hidden">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm font-medium">{n.label}</Link>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
          <div>
            <div className="font-serif text-2xl font-bold">NESH Computer Services</div>
            <p className="mt-3 text-sm opacity-75">Reliable solutions. Better performance.<br />We fix. We upgrade. We care.</p>
            <p className="mt-4 flex items-center gap-2 text-sm font-semibold"><Truck className="h-4 w-4" /> We do door-to-door services.</p>
          </div>
          <div>
            <div className="eyebrow !text-navy-foreground/60">Quick links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => <li key={n.to}><Link to={n.to} className="opacity-80 hover:opacity-100">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <div className="eyebrow !text-navy-foreground/60">Contact</div>
            <ul className="mt-4 space-y-3 text-sm opacity-90">
              <li className="flex gap-2"><Phone className="h-4 w-4" /><a href={waLink()}>WhatsApp: {PHONE}</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4" />{AREA}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-foreground/10 py-5 text-center text-xs opacity-60">© {new Date().getFullYear()} NESH Computer Services. All rights reserved.</div>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="border-b bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold text-navy md:text-5xl">{title}</h1>
        <span className="rule-accent mt-6" />
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}

export function DoorToDoorBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div className="flex items-center gap-5">
          <Truck className="h-12 w-12 shrink-0" />
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">We Are Doing Door-to-Door Services</h2>
            <p className="mt-1 opacity-85">No need to carry your computer anywhere — our technician comes to your home or office.</p>
          </div>
        </div>
        <Link to="/booking" className="rounded-sm bg-card px-6 py-3 font-semibold text-navy hover:bg-secondary">Book a Visit</Link>
      </div>
    </section>
  );
}
