import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Ironfield Recruitment | Engineering Recruiter Yorkshire",
  description:
    "Get in touch with Ironfield Recruitment. Whether you need to hire an engineer or you're an engineer looking for your next role — let's talk.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Ironfield Recruitment | Engineering Recruiter Yorkshire",
    description:
      "Get in touch with Ironfield Recruitment. Whether you need to hire an engineer or you're an engineer looking for your next role — let's talk.",
    url: "/contact",
    siteName: "Ironfield Recruitment",
    images: ["/og-contact.png"],
  },
};

export default function Contact() {
  return (
    <>
      <section className="bg-surface2">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Let&apos;s talk about your next move.
          </h1>
          <p className="text-muted text-lg font-light max-w-2xl mx-auto">
            No hard sell, no automated replies. Just a straight conversation with someone who gets
            it.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4 mb-8">
              <div className="bg-surface rounded-md p-5">
                <p className="text-muted uppercase text-xs font-semibold tracking-wide mb-1">
                  Phone
                </p>
                <a href="tel:07939920817" className="text-text hover:text-gold transition-colors">
                  07939 920817
                </a>
              </div>
              <div className="bg-surface rounded-md p-5">
                <p className="text-muted uppercase text-xs font-semibold tracking-wide mb-1">
                  Email
                </p>
                <a
                  href="mailto:rory_tanton@hotmail.com"
                  className="text-text hover:text-gold transition-colors"
                >
                  rory_tanton@hotmail.com
                </a>
              </div>
              <div className="bg-surface rounded-md p-5">
                <p className="text-muted uppercase text-xs font-semibold tracking-wide mb-1">
                  Based
                </p>
                <p className="text-text">Market Weighton, East Yorkshire</p>
              </div>
            </div>
            <p className="text-muted italic text-sm">
              I typically respond within a few hours during working days.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
