"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MotionLink from "@/components/MotionLink";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/95 backdrop-blur-sm border-b border-muted2">
      <nav className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/ironfield-logo-final.svg"
            alt="Ironfield Recruitment"
            width={432}
            height={96}
            className="h-[77px] w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link text-text text-sm font-medium">
              {l.label}
            </Link>
          ))}
          <MotionLink
            href="/contact"
            className="grad-bg text-bg px-5 py-2 rounded-full text-sm font-medium inline-block"
          >
            Get in Touch
          </MotionLink>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-px bg-text" />
          <span className="w-6 h-px bg-text" />
          <span className="w-6 h-px bg-text" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-muted2 bg-bg px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-text text-base font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="grad-bg text-bg px-5 py-2 rounded-full text-sm font-medium text-center"
            onClick={() => setOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
