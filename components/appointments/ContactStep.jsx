// Screen 3 of the appointments flow: collects a name and phone number for
// the chosen slot. No account/login required - just enough to confirm the
// booking. (Accounts are planned for a later phase.)
import { ArrowLeft, Phone, User } from "lucide-react";

export default function ContactStep({ selected, name, phone, onNameChange, onPhoneChange, onBack, onSubmit }) {
  const canSubmit = name.trim().length > 0 && phone.trim().length >= 7;

  return (
    <section className="max-w-md mx-auto">
      <button onClick={onBack} className="flex items-center gap-1 text-base text-[#8A7C63] hover:text-[#96652F] mb-8">
        <ArrowLeft size={16} /> Back
      </button>

      <h2 className="font-display text-3xl mb-2">Almost there</h2>
      {/* Summary of the slot picked in the previous screen */}
      <p className="text-base text-[#5B4E3E] mb-6">
        {selected.date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })} at {selected.time}
      </p>

      <div className="space-y-5 mb-8">
        <div>
          <label className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#8B5570] mb-2">
            <User size={16} /> Your name
          </label>
          <input
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Full name"
            className="w-full px-4 py-3 rounded-sm bg-[#F6EFE0] border border-[#C7B896] text-base outline-none focus:border-[#96652F]"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm uppercase tracking-wide text-[#8B5570] mb-2">
            <Phone size={16} /> Phone number
          </label>
          <input
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            placeholder="So we can confirm your slot"
            type="tel"
            className="w-full px-4 py-3 rounded-sm bg-[#F6EFE0] border border-[#C7B896] text-base outline-none focus:border-[#96652F]"
          />
        </div>
      </div>

      {/* Disabled until both fields are filled in with something plausible */}
      <button
        disabled={!canSubmit}
        onClick={onSubmit}
        className={`w-full py-4 rounded-sm text-lg transition-colors ${
          canSubmit ? "bg-[#96652F] text-[#F6EFE0] hover:bg-[#7E5327]" : "bg-[#DCCFB2] text-[#9C8F76] cursor-not-allowed"
        }`}
      >
        Confirm appointment
      </button>

      <p className="text-sm text-[#8A7C63] text-center mt-4">
        No account needed — we'll text or call to confirm.
      </p>
    </section>
  );
}
