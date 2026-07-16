"use client";
// "use client" is required here because this component uses React state
// (the mobile menu open/close toggle) — server components can't hold state.

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/data";

export default function Header() {
  // Tracks whether the mobile hamburger menu is open.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-[#EFE7D8]/95 backdrop-blur border-b border-[#DCCFB2]">
      {/* Top row: logo on the left, nav links on the right (desktop/tablet),
          hamburger icon on the right (phones). Responsive side padding
          (px-4 on phones, growing on larger screens) keeps the logo and
          hamburger from ever crowding the edge. */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-3">
        {/* Logo / site name - links back to the homepage. Bigger than before
            so it reads clearly, including for older users. */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          <Image
            src="/logo.png"
            alt={CLINIC.name}
            width={56}
            height={56}
            className="rounded-full object-cover w-11 h-11 sm:w-14 sm:h-14 shrink-0"
          />
          <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tight leading-none truncate">
            {CLINIC.name}
          </span>
        </Link>

        {/* Nav links - switches to the hamburger menu at "md" (768px)
            rather than "sm" (640px), so tablets in portrait always get the
            full, easy-to-tap nav instead of a squeezed-in row of links. */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium shrink-0">
          {NAV_LINKS.map((l) => (
            <Link key={l.label} href={l.href} className="hover:text-[#96652F] transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile/tablet menu toggle - bigger icon and tap area for easy thumb access */}
        <button className="md:hidden shrink-0 p-1.5" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile dropdown menu - each link is a full-width row with generous
          padding (py-3.5) and a divider, so it's easy to tap accurately. */}
      {menuOpen && (
        <nav className="md:hidden border-t border-[#DCCFB2] px-4 sm:px-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3.5 text-lg border-b border-[#DCCFB2] last:border-0 hover:text-[#96652F]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
