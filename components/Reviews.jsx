// "What people are saying" section - styled like Google review cards.
// Static content for now, so no "use client" needed.
import { Star } from "lucide-react";
import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-10">
        <h2 className="font-display text-3xl">What people are saying</h2>
        <span className="text-base text-[#8A7C63]">Google Reviews</span>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rounded-md border border-[#DCCFB2] bg-[#F6EFE0] p-6">
            {/* Star rating row: fills in `r.stars` gold stars, rest stay outlined */}
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < r.stars ? "fill-[#C7A96B] text-[#C7A96B]" : "text-[#DCCFB2]"}
                />
              ))}
            </div>
            <p className="text-base text-[#5B4E3E] leading-relaxed mb-4">"{r.body}"</p>
            <span className="text-sm uppercase tracking-wide text-[#8B5570]">{r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
