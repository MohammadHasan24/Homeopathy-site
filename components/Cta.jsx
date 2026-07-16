// Dark call-to-action banner: "Ready when you are" + booking button.
// Deliberately high-contrast (dark background) so it stands out from the
// lighter sections above and below it.
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function Cta() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="rounded-md bg-[#3A2E22] text-[#F6EFE0] px-6 sm:px-8 py-14 sm:py-16 text-center relative overflow-hidden">
        {/* Oversized faint logo in the corner, purely decorative - reuses
            the real clinic logo (instead of a generic icon) so the same
            brand mark shows up here too. alt="" because it's decorative. */}
        <div className="absolute -right-12 -top-12 opacity-10 w-48 h-48">
          <Image src="/logo.png" alt="" fill className="object-contain" />
        </div>

        <h2 className="font-display text-3xl sm:text-4xl mb-4 relative">Ready when you are.</h2>
        <p className="text-lg text-[#D9C79A] mb-8 max-w-md mx-auto relative">
          No long waits, no crowded room. Just a time that works for you and a remedy made for your case.
        </p>

        {/* Takes you to the dedicated Appointments page to actually book */}
        <Link
          href="/appointments"
          className="inline-flex items-center gap-2 bg-[#F6EFE0] text-[#3A2E22] px-8 py-4 rounded-sm text-lg hover:bg-[#EFE7D8] transition-colors relative"
        >
          <Calendar size={20} /> Get your appointment today
        </Link>
      </div>
    </section>
  );
}
