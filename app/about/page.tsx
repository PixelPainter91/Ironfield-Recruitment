import type { Metadata } from "next";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import MotionLink from "@/components/MotionLink";

export const metadata: Metadata = {
  title: "About | Ironfield Recruitment | Executive Search Consultant Yorkshire",
  description:
    "Rory Tanton, engineer turned executive search consultant. Royal Navy, field service, inspection engineering. Based in Market Weighton, East Yorkshire.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | Ironfield Recruitment | Executive Search Consultant Yorkshire",
    description:
      "Rory Tanton, engineer turned executive search consultant. Royal Navy, field service, inspection engineering. Based in Market Weighton, East Yorkshire.",
    url: "/about",
    siteName: "Ironfield Recruitment",
    images: ["/og-about.png"],
  },
};

const credentials = [
  "Royal Navy Submarine Service, Weapons Engineer, 6 years 8 months",
  "Promoted to Leading ET within 3 months on a working platform",
  "Field Service Engineer, Heald Ltd (electro-mechanical, hydraulic systems)",
  "Engineering Surveyor, Inspection Network Ltd (authored SOPs, Scopes of Examination)",
  "Full Stack Developer, 4 live apps shipped to Google Play independently",
];

const sectors = [
  "Field Service & On-Site Maintenance",
  "Electro-Mechanical",
  "Hydraulics & Fluid Power",
  "Electronic Design",
  "Electrical Design",
  "Embedded Software & Firmware",
  "Industrial Maintenance (Multiskilled)",
  "Engineering Inspection",
  "Defence & Aerospace",
];

const values = [
  {
    title: "Personal",
    body: "Every engineer I represent is someone I've spoken to properly. Not a name on a database. I understand what they want, what they're worth, and where they'll thrive.",
  },
  {
    title: "Accountable",
    body: "I stand behind every search I run. Every engagement is agreed upfront, no excuses.",
  },
  {
    title: "Specialist",
    body: "Engineering only, across nine specialist sectors. I know the work, the culture, and the difference between a good candidate and the right one.",
  },
];

const timeline = [
  {
    period: "2014–2020",
    title: "Royal Navy Submarine Service, Weapons Engineer",
    body: "Strategic weapons systems, navigation, hydraulics. Leading ET in 3 months.",
  },
  {
    period: "2023",
    title: "Field Service Engineer, Heald Ltd",
    body: "On-site fault diagnosis, electro-mechanical and hydraulic systems.",
  },
  {
    period: "2023–2024",
    title: "Engineering Surveyor, Inspection Network Ltd",
    body: "Inspection reports, Scopes of Examination, junior surveyor training materials.",
  },
  {
    period: "2024–Present",
    title: "Independent App Developer",
    body: "Four live apps on Google Play. Full Stack Developer and UX Designer.",
  },
  {
    period: "2026",
    title: "Founded Ironfield Recruitment",
    body: "Specialist engineering recruitment, built on hands-on experience.",
  },
];

const photos = [
  {
    label: "Royal Navy",
    caption: "Submarine Service, Weapons Engineer",
    src: "/images/RNpicofme.jpg",
  },
  {
    label: "On Site",
    caption: "Field Service Engineer, Heald Ltd",
    src: "/images/Heldpicofme.jpeg",
  },
];

function PhotoCard({ photo }: { photo: (typeof photos)[number] }) {
  return (
    <div className="border border-text/15 rounded-md p-1.5 bg-surface">
      <div className="relative w-full rounded-md overflow-hidden bg-surface2">
        <Image
          src={photo.src}
          alt={photo.caption}
          width={400}
          height={400}
          sizes="176px"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="text-center px-1 pt-2">
        <p className="grad-text font-display italic text-sm font-semibold">{photo.label}</p>
        <p className="text-muted text-[10px] mt-0.5">{photo.caption}</p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-gold uppercase text-sm font-semibold tracking-wide mb-4">
            Executive Search Consultant
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Built from the inside out.
          </h1>
          <p className="text-muted text-lg font-light max-w-2xl mx-auto">
            Most search consultants have never done the job they&apos;re hiring for. I have, in
            three different fields.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-5xl mx-auto px-6 pb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            The background behind the business.
          </h2>

          <div className="md:hidden flex gap-4 mb-10">
            {photos.map((p) => (
              <div key={p.label} className="flex-1 border border-text/15 rounded-md p-1.5 bg-surface">
                <div className="relative w-full rounded-md overflow-hidden bg-surface2">
                  <Image
                    src={p.src}
                    alt={p.caption}
                    width={400}
                    height={400}
                    sizes="200px"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="text-center px-1 pt-2">
                  <p className="grad-text font-display italic text-sm font-semibold">{p.label}</p>
                  <p className="text-muted text-[10px] mt-0.5">{p.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-0 w-44">
              <FadeUp>
                <PhotoCard photo={photos[0]} />
              </FadeUp>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0 w-44">
              <FadeUp delay={100}>
                <PhotoCard photo={photos[1]} />
              </FadeUp>
            </div>

            <div className="relative max-w-xl mx-auto pl-8">
              <div className="absolute left-[7px] top-1 bottom-1 grad-line w-px" />
              <div className="space-y-10">
                {timeline.map((t, i) => (
                  <FadeUp key={t.period} delay={i * 80}>
                    <div className="relative">
                      <span className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full grad-bg border-2 border-bg" />
                      <p className="text-gold uppercase text-xs font-semibold tracking-wide mb-1">
                        {t.period}
                      </p>
                      <p className="font-semibold mb-1">{t.title}</p>
                      <p className="text-sm text-muted">{t.body}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
          <div>
            <FadeUp>
              <p className="mb-5 leading-relaxed text-muted font-light">
                My name is Rory Tanton. I spent 6 years and 8 months in the Royal Navy Submarine
                Service as a Weapons Engineer, responsible for the safety and operation of
                strategic weapons systems, navigation systems, and associated hydraulics. I was
                promoted to Leading Engineering Technician within three months of joining a
                working platform.
              </p>
            </FadeUp>
            <FadeUp delay={100}>
              <p className="mb-5 leading-relaxed text-muted font-light">
                After leaving the Navy I worked as a Field Service Engineer at Heald Ltd,
                providing on-site fault diagnosis and technical support on complex
                electro-mechanical and hydraulic systems. From there I moved into engineering
                inspection at Inspection Network Ltd, producing detailed reports on complex
                installations and authoring Scopes of Examination for new plant types including
                escalators, piling rigs, and power presses. I also wrote the training materials
                junior surveyors used to learn the job.
              </p>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="mb-8 leading-relaxed text-muted font-light">
                I now combine that engineering background with skills as a Full Stack Developer
                and UX Designer. I&apos;ve designed and shipped four live mobile applications
                independently to Google Play. Ironfield Recruitment exists because I understand
                both worlds: the hands-on engineering environment candidates come from, and the
                technical landscape companies are operating in. I run every search personally
                because I&apos;ve done the job I&apos;m searching for.
              </p>
            </FadeUp>

            <div className="space-y-3">
              {credentials.map((c) => (
                <div
                  key={c}
                  className="flex items-start gap-3 bg-surface border border-text/10 rounded-md p-4"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full grad-bg flex-shrink-0" />
                  <p className="text-sm font-medium">{c}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <FadeUp>
              <p className="font-display italic text-2xl md:text-3xl leading-relaxed mb-10">
                &ldquo;I&apos;ve sat on <span className="grad-text">both sides</span> of this
                conversation, the candidate and the client, so I know what
                <span className="grad-text"> both actually need.</span>&rdquo;
              </p>
            </FadeUp>
            <p className="text-muted uppercase text-xs font-semibold tracking-wide mb-4">
              Sectors I Place In
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="border border-text/15 rounded-full px-4 py-2 text-sm hover:text-gold hover:border-gold transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            How I work.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 100}>
                <div className="group relative bg-surface2 border border-text/10 rounded-md p-6 h-full overflow-hidden">
                  <span className="absolute top-0 left-0 right-0 grad-line scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  <p className="font-semibold mb-2">{v.title}</p>
                  <p className="text-sm text-muted">{v.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to work with a search consultant who gets it?
          </h2>
          <p className="text-muted font-light mb-8">
            Whether you&apos;re hiring or looking, let&apos;s have a proper conversation.
          </p>
          <MotionLink
            href="/contact"
            className="grad-bg text-bg px-8 py-3 rounded-full font-medium inline-block"
          >
            Get in Touch
          </MotionLink>
        </div>
      </section>
    </>
  );
}
