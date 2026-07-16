"use client";
// The homepage's hero - now a full-bleed, full-height carousel. Behind the
// scenes it's 4 stacked background layers (one per SLIDES entry) that
// crossfade into each other, with the headline/CTA staying put on top and
// a small caption at the bottom that changes with each slide.
//
// Layering (z-index), same pattern as BackgroundSection:
//   z-0  -> the 4 background photo placeholders, crossfading via opacity
//   z-[1]-> dark gradient overlay so the light text stays readable
//   z-10 -> headline, subtext, CTA button, and the slide controls

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { SLIDES } from "@/lib/data";

export default function HeroCarousel() {
  const [slide, setSlide] = useState(0);

  // Auto-advance every 5 seconds.
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const CurrentIcon = SLIDES[slide].icon;

  return (
    // min-h uses viewport height (minus roughly the header) so this reads
    // as "full screen" without fighting the sticky header, capped with a
    // max-h so it doesn't get absurdly tall on very large monitors.
    <section className="relative overflow-hidden min-h-[80vh] max-h-[860px] flex items-center">
      {/* 4 background photo placeholders, stacked on top of each other.
          Only the active one is visible (opacity-100); the rest fade out.
          Swap each ImagePlaceholder for a real photo (one per topic) when
          ready - see the comment inside ImagePlaceholder for how. */}
      {SLIDES.map((s, i) => (
        <div
          key={s.title}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
        >
          <ImagePlaceholder label="" className="w-full h-full border-0 rounded-none" />
        </div>
      ))}

      {/* Dark gradient overlay so text stays readable over any photo */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#3A2E22]/75 via-[#3A2E22]/55 to-[#3A2E22]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <p className="animate-fade-up uppercase tracking-[0.2em] text-sm text-[#E8D9BE] mb-5">
          Natural care, unhurried
        </p>

        <h1
          className="animate-fade-up font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-[#F6EFE0]"
          style={{ animationDelay: "100ms" }}
        >
          Healing that starts with
          <br className="hidden sm:block" /> <em>listening</em>.
        </h1>

        <p
          className="animate-fade-up text-lg text-[#EFE7D8] max-w-xl mx-auto mb-9 leading-relaxed"
          style={{ animationDelay: "200ms" }}
        >
          Homeopathy is a small clinic built around one idea: your case deserves a
          real conversation, and a remedy made for you, not a shelf product.
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "300ms" }}>
          <Link
            href="/appointments"
            className="inline-flex items-center gap-2 bg-[#96652F] text-[#F6EFE0] px-8 py-4 rounded-sm text-lg hover:bg-[#7E5327] transition-colors"
          >
            <Calendar size={20} /> Book your appointment
          </Link>
        </div>

        {/* Rotating caption + controls, tied to the same 4 slides */}
        <div className="animate-fade-up mt-14 flex flex-col items-center gap-4" style={{ animationDelay: "400ms" }}>
          <div className="inline-flex items-center gap-3 bg-[#F6EFE0]/10 border border-[#F6EFE0]/25 backdrop-blur-sm rounded-full px-5 py-3 text-[#F6EFE0]">
            <CurrentIcon size={18} />
            <span className="text-sm sm:text-base">
              <strong>{SLIDES[slide].title}</strong> — {SLIDES[slide].body}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSlide((s) => (s - 1 + SLIDES.length) % SLIDES.length)}
              className="bg-[#F6EFE0]/10 border border-[#F6EFE0]/25 text-[#F6EFE0] rounded-full p-2.5 hover:bg-[#F6EFE0]/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`h-2 rounded-full transition-all ${i === slide ? "w-7 bg-[#F6EFE0]" : "w-2 bg-[#F6EFE0]/40"}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setSlide((s) => (s + 1) % SLIDES.length)}
              className="bg-[#F6EFE0]/10 border border-[#F6EFE0]/25 text-[#F6EFE0] rounded-full p-2.5 hover:bg-[#F6EFE0]/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
