import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader, DoorToDoorBand } from "@/components/SiteLayout";
import w1 from "@/assets/work_1.jpg.asset.json";
import w2 from "@/assets/work_2.jpg.asset.json";
import w3 from "@/assets/work_3.jpg.asset.json";
import w4 from "@/assets/work_4.jpg.asset.json";
import w5 from "@/assets/work_5.jpg.asset.json";

export const Route = createFileRoute("/our-work")({
  head: () => ({ meta: [
    { title: "Our Work | NESH Computer Services" },
    { name: "description", content: "Real jobs completed by NESH: PC setups, hardware upgrades, disk cloning and software installation." },
    { property: "og:title", content: "Our Work | NESH Computer Services" },
    { property: "og:description", content: "See real computer jobs completed by NESH in KL & Selangor." },
  ] }),
  component: OurWork,
});

const WORK = [
  { src: w2.url, title: "PC Hardware Upgrade", text: "Opening up a desktop to install and upgrade internal components." },
  { src: w3.url, title: "Gaming PC Setup Completed", text: "Full desktop build and setup, tested and ready to use." },
  { src: w4.url, title: "HDD to SSD Disk Clone", text: "Cloning the customer's drive to a new SSD with all data kept." },
  { src: w5.url, title: "Windows & Office Installation", text: "Fresh Windows update and Microsoft Office setup." },
  { src: w1.url, title: "System Boot & Testing", text: "Checking the system starts correctly after service." },
];

function OurWork() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Our work" title="Real jobs, done with care." text="A look at some of the computer repairs, upgrades and setups we have completed for our customers — many of them done door-to-door." />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((w) => (
            <figure key={w.title} className="overflow-hidden rounded-sm border bg-card">
              <img src={w.src} alt={w.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <figcaption className="p-6">
                <h3 className="text-lg font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <DoorToDoorBand />
    </SiteLayout>
  );
}
