// "What we offer" section: a responsive grid of service cards that fade +
// slide in one after another as you scroll to them (see components/Reveal.jsx).
import Reveal from "@/components/Reveal";
import { CARDS } from "@/lib/data";

export default function Cards() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <Reveal>
        <h2 className="font-display text-3xl mb-10 text-center">What we offer</h2>
      </Reveal>

      {/* Grid: 1 column on phones, 2 on small screens, 4 on large screens */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CARDS.map((c, i) => (
          // Staggered delay (i * 100ms) so the cards animate in one after
          // another left-to-right, instead of all popping in at once.
          <Reveal key={c.title} delay={i * 100}>
            <div className="rounded-md border border-[#DCCFB2] bg-[#F6EFE0] p-6 hover:border-[#96652F] transition-colors h-full">
              <c.icon size={26} className="text-[#6B7A5E] mb-4" />
              <h3 className="font-bold text-lg mb-2">{c.title}</h3>
              <p className="text-base text-[#5B4E3E] leading-relaxed">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
