// Screen 1 of the appointments flow: a persuasive intro designed to make
// booking feel urgent and effortless, with a live "next available slot"
// teaser pulled from lib/slots.js.
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function IntroScreen({ nextSlot, onStart }) {
  return (
    <section className="text-center py-6 sm:py-10">
      <p className="uppercase tracking-[0.2em] text-sm text-[#8B5570] mb-5">Appointments</p>

      <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
        Don't wait it out.
        <br /> <em>Get seen.</em>
      </h1>

      <p className="text-lg text-[#5B4E3E] max-w-lg mx-auto mb-8 leading-relaxed">
        Most people put off booking until it's worse than it needed to be.
        Grab a slot now — it takes less than a minute.
      </p>

      {/* Urgency teaser - only shows once slots have loaded on the client */}
      {nextSlot && (
        <div className="inline-flex items-center gap-3 bg-[#F6EFE0] border border-[#DCCFB2] rounded-full px-5 py-3 mb-8 text-base">
          <Clock size={18} className="text-[#6B7A5E]" />
          <span>
            Next available:{" "}
            <strong>
              {nextSlot.date.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" })} at {nextSlot.time}
            </strong>
          </span>
        </div>
      )}

      {/* onStart is passed down from the parent page - it moves the flow to
          the slot-picking screen. */}
      <div className="mb-12">
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 bg-[#96652F] text-[#F6EFE0] px-8 py-4 rounded-sm text-lg hover:bg-[#7E5327] transition-colors"
        >
          <Calendar size={20} /> Choose a time <ArrowRight size={18} />
        </button>
      </div>

      {/* Photo placeholder - a calming clinic/remedy photo works well here */}
      <ImagePlaceholder label="Add a calming clinic/remedy photo here" className="h-48 sm:h-64 max-w-2xl mx-auto" />
    </section>
  );
}
