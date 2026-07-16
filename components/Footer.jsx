// Site footer: brand blurb + contact info, repeated nav links, and a
// Google Maps location embed.
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[#DCCFB2] bg-[#E3D9C4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid sm:grid-cols-3 gap-10">
        {/* Column 1: brand name (with the real logo, same as the header),
            short blurb, contact details */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt={CLINIC.name} width={44} height={44} className="rounded-full object-cover w-10 h-10 sm:w-12 sm:h-12" />
            <span className="font-display text-xl sm:text-2xl">{CLINIC.name}</span>
          </Link>

          <p className="text-base text-[#5B4E3E] leading-relaxed mb-4">
            A small clinic room built around real conversations and remedies
            made for your case.
          </p>

          <div className="flex flex-col gap-2 text-base text-[#5B4E3E]">
            <span className="flex items-center gap-2">
              <Phone size={18} /> {CLINIC.phone}
            </span>

            <span className="flex items-center gap-2">
              <Mail size={18} /> hello@homeopathy.clinic
            </span>
          </div>
        </div>

        {/* Column 2: same nav links as the header, for easy access from the footer */}
        <div>
          <h4 className="font-bold mb-4 text-base uppercase tracking-wide text-[#8B5570]">
            Pages
          </h4>

          <div className="flex flex-col gap-3 text-base">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="hover:text-[#96652F] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Column 3: Google Map - unofficial embed for now, kept as provided */}
        <div>
          <h4 className="font-bold mb-4 text-base uppercase tracking-wide text-[#8B5570]">
            Find us
          </h4>

          <a
            href="https://maps.app.goo.gl/eZsZ7h1WWAxs9CcRA"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-md border border-[#C7B896] h-44 sm:h-48 group"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d392.78922990224095!2d72.98958050440547!3d33.67180525991078!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1783940718668!5m2!1sen!2s"
              className="w-full h-full pointer-events-none"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            {/* Visual marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full text-4xl drop-shadow-lg">
              📍
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition flex items-end justify-center pb-3">
              <span className="bg-white/90 px-3 py-1.5 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                Open in Google Maps
              </span>
            </div>
          </a>

          <p className="mt-3 text-sm text-[#5B4E3E]">
            G-11/2, Islamabad, Pakistan
          </p>
        </div>
      </div>

      <div className="border-t border-[#DCCFB2] py-5 text-center text-sm text-[#8A7C63]">
        Prototype — not a real clinic yet
      </div>
    </footer>
  );
}
