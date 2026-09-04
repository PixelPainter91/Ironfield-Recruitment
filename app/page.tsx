import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import MotionLink from "@/components/MotionLink";

export const metadata: Metadata = {
  title: "Ironfield Recruitment | Executive Search for Engineering Leadership",
  description:
    "Executive search and headhunting for engineering leadership across field service, electro-mechanical, hydraulics, electronic and electrical design, embedded software, industrial maintenance, inspection, and defence & aerospace. Led by an engineer.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ironfield Recruitment | Executive Search for Engineering Leadership",
    description:
      "Executive search and headhunting for engineering leadership across field service, electro-mechanical, hydraulics, electronic and electrical design, embedded software, industrial maintenance, inspection, and defence & aerospace. Led by an engineer.",
    url: "/",
    siteName: "Ironfield Recruitment",
    images: ["/og-home.png"],
  },
};

const whyCards = [
  {
    n: "01",
    title: "Engineer to Engineer",
    body: "Nearly a decade of hands-on engineering experience, from submarines to site to inspection. I understand the work, the culture, and what separates a great leader from a good one.",
  },
  {
    n: "02",
    title: "Small List. Full Focus.",
    body: "I work with a small number of clients at any one time. Every search gets my personal attention.",
  },
  {
    n: "03",
    title: "Quality Over Volume",
    body: "You won't receive a stack of CVs. You'll receive the right candidate, vetted, understood, and matched to your requirement.",
  },
  {
    n: "04",
    title: "Terms Agreed Upfront",
    body: "Every engagement is scoped and agreed with you directly before work begins. No rate cards, no surprises.",
  },
];

const steps = [
  { n: "01", title: "Get in Touch", body: "Tell me what you need, a role to fill or a role to find." },
  { n: "02", title: "A Real Conversation", body: "No forms-only process. We talk, properly, about the detail." },
  { n: "03", title: "The Search", body: "I identify, approach, and vet candidates directly." },
  { n: "04", title: "The Shortlist", body: "I bring you a small number of thoroughly vetted candidates." },
];

const stats = [
  { n: "~10", label: "Years Engineering Experience" },
  { n: "9", label: "Specialist Sectors Covered" },
  { n: "1:1", label: "Personal Engagement" },
  { n: "100%", label: "Specialist Focus" },
];

export default function Home() {
  return (
    <>
      <section className="bg-bg">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold uppercase text-sm font-semibold tracking-wide mb-4">
              Executive Search &amp; Headhunting
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Engineering leaders,
              <br />
              <span className="italic grad-text">found by an engineer.</span>
            </h1>
            <p className="text-muted text-lg font-light mb-4 max-w-md">
              Ironfield Recruitment is an executive search consultancy connecting engineering
              leaders with the companies that need them.
            </p>
            <p className="font-display italic text-lg md:text-xl leading-snug mb-8 max-w-md">
              &ldquo;I don&apos;t search <span className="grad-text">for</span> engineers. I
              search <span className="grad-text">as one.</span>&rdquo;
            </p>
            <div className="flex flex-wrap gap-4">
              <MotionLink
                href="/contact"
                className="grad-bg text-bg px-6 py-3 rounded-full font-medium inline-block"
              >
                Get in Touch
              </MotionLink>
              <MotionLink
                href="/about"
                className="border border-text/30 px-6 py-3 rounded-full font-medium hover:border-gold hover:text-gold inline-block transition-colors"
              >
                Our Story
              </MotionLink>
            </div>
          </div>

          <div className="bg-surface border-l-4 border-gold p-8 rounded-md">
            <p className="text-muted uppercase text-xs font-semibold tracking-wide mb-6">
              Why Ironfield
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyCards.map((c) => (
                <div
                  key={c.n}
                  className="group bg-surface2 border border-text/10 rounded-md p-4 hover:border-gold transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display text-gold font-bold">{c.n}</span>
                    <span className="w-1.5 h-1.5 rounded-full grad-bg opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="font-medium text-sm mb-1">{c.title}</p>
                  <p className="text-xs text-muted">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display grad-text text-3xl md:text-4xl font-bold mb-2">{s.n}</p>
              <p className="text-muted uppercase text-[11px] tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <FadeUp>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
              Simple. Personal. No volume, no noise.
            </h2>
          </FadeUp>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 100}>
                <div className="bg-surface2 border border-text/10 rounded-md p-6 h-full hover:border-gold transition-colors">
                  <p className="font-display text-gold text-2xl font-bold mb-3">{s.n}</p>
                  <p className="font-semibold mb-2">{s.title}</p>
                  <p className="text-sm text-muted">{s.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface2">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Ready to find the right leader?
          </h2>
          <p className="text-muted font-light mb-8 max-w-md mx-auto">
            Whether you're building a leadership team or you're ready for your next role, let's
            talk.
          </p>
          <MotionLink
            href="/contact"
            className="grad-bg text-bg px-8 py-3 rounded-full font-medium inline-block"
          >
            Start the Conversation
          </MotionLink>
        </div>
      </section>
    </>
  );
}
