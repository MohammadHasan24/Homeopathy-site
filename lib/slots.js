// Generates a set of appointment slots for the next several days.
// Each day gets a handful of time slots, with a few marked as already
// booked so the timeline feels realistic. This is a stand-in for pulling
// live availability from Supabase once the booking backend is wired up.

const TIMES = ["9:00 am", "10:30 am", "12:00 pm", "1:30 pm", "3:00 pm", "4:30 pm"];

// Builds `days` worth of slots starting today.
export function generateSlots(days = 6) {
  const today = new Date();
  return Array.from({ length: days }).map((_, dayIndex) => {
    const date = new Date(today);
    date.setDate(today.getDate() + dayIndex);
    return {
      date,
      times: TIMES.map((time, timeIndex) => ({
        time,
        // Deterministic pattern (not random) so the same slots are always
        // "booked" on both server and client render, avoiding hydration
        // mismatches - swap this for a real availability check later.
        available: (dayIndex + timeIndex) % 5 !== 0,
      })),
    };
  });
}

// Finds the very first open slot across all days - used to show a
// "next available: ..." teaser on the intro screen.
export function nextAvailableSlot(days) {
  for (const day of days) {
    for (const slot of day.times) {
      if (slot.available) return { date: day.date, time: slot.time };
    }
  }
  return null;
}
