"use client";
// "use client" because this component owns local state - which day tab
// is currently active. (The parent page is already a client component too,
// but this keeps the component correct/self-explanatory on its own.)

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function SlotPicker({ slots, selected, onSelect, onContinue, onBack }) {
  // Which day's times are currently showing (index into the `slots` array).
  const [activeDay, setActiveDay] = useState(0);
  const day = slots[activeDay];

  return (
    <section className="max-w-2xl mx-auto">
      <button onClick={onBack} className="flex items-center gap-1 text-base text-[#8A7C63] hover:text-[#96652F] mb-8">
        <ArrowLeft size={16} /> Back
      </button>

      <h2 className="font-display text-3xl mb-2">Pick a day and time</h2>
      <p className="text-base text-[#5B4E3E] mb-8">Greyed-out times are already booked.</p>

      {/* Day tabs - horizontally scrollable timeline of the next several
          days. The -mx-1 px-1 trick gives the tabs breathing room on the
          left/right without shrinking the touch targets themselves. */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
        {slots.map((d, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            className={`shrink-0 px-4 py-3 rounded-sm text-base border transition-colors ${
              i === activeDay ? "bg-[#96652F] text-[#F6EFE0] border-[#96652F]" : "border-[#C7B896] hover:border-[#96652F]"
            }`}
          >
            {d.date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
          </button>
        ))}
      </div>

      {/* Time slots for whichever day is active. 2 columns on phones keeps
          each button a comfortable tap size; 3 columns from "sm" up.
          Booked slots are disabled and struck through; the selected slot
          is highlighted in green. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
        {day.times.map((t) => {
          const isSelected =
            selected && selected.date.toDateString() === day.date.toDateString() && selected.time === t.time;
          return (
            <button
              key={t.time}
              disabled={!t.available}
              onClick={() => onSelect({ date: day.date, time: t.time })}
              className={`px-3 py-3.5 rounded-sm text-base border transition-colors ${
                !t.available
                  ? "border-[#DCCFB2] text-[#C7B896] cursor-not-allowed line-through"
                  : isSelected
                  ? "bg-[#6B7A5E] text-[#F6EFE0] border-[#6B7A5E]"
                  : "border-[#C7B896] hover:border-[#96652F]"
              }`}
            >
              {t.time}
            </button>
          );
        })}
      </div>

      {/* Disabled until a slot has been picked */}
      <button
        disabled={!selected}
        onClick={onContinue}
        className={`w-full py-4 rounded-sm text-lg transition-colors ${
          selected ? "bg-[#96652F] text-[#F6EFE0] hover:bg-[#7E5327]" : "bg-[#DCCFB2] text-[#9C8F76] cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </section>
  );
}
