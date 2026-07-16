// Screen 4 (final) of the appointments flow: confirms the booking details
// back to the user and offers a way back to the homepage.
import Link from "next/link";
import { Check } from "lucide-react";

export default function Confirmation({ selected, name }) {
  return (
    <section className="max-w-md mx-auto text-center py-10">
      <Check size={40} className="mx-auto text-[#6B7A5E] mb-4" />
      <h2 className="font-display text-3xl mb-2">You're booked, {name.split(" ")[0]}.</h2>
      <p className="text-base text-[#5B4E3E] mb-8">
        {selected.date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at {selected.time}.
        We'll be in touch to confirm.
      </p>
      <Link href="/" className="text-base underline text-[#96652F]">
        Back to homepage
      </Link>
    </section>
  );
}
