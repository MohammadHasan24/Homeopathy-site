"use client";
// "use client" because this page holds form state (the input values and
// whether the form has been submitted yet).

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // "Reason" doubles this form as both a general contact form and a way
  // for people to leave feedback/reviews, per the dropdown options below.
  const [reason, setReason] = useState("General question");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const canSubmit = name.trim() && email.trim() && message.trim();

  // For now this just flips a local "sent" flag - there's no backend yet.
  // Once Supabase is wired up, this is where you'd insert the message into
  // a `contact_messages` table (or send an email) before showing the
  // confirmation state.
  function handleSubmit() {
    setSent(true);
  }

  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 gap-10 lg:gap-14">
        {/* Left column: intro copy, a photo spot, and direct contact details */}
        <div>
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B5570] mb-5">Contact us</p>
          <h1 className="font-display text-3xl sm:text-4xl mb-5 leading-tight">
            Questions, feedback, reviews — all welcome.
          </h1>
          <p className="text-lg text-[#5B4E3E] leading-relaxed mb-8">
            Whether you want to leave a review, ask something before booking, or just
            get in touch, this goes straight to us.
          </p>

          {/* Photo placeholder - swap for a real clinic photo when ready */}
          <ImagePlaceholder label="Add a clinic photo here" className="h-48 sm:h-56 mb-8" />

          <div className="flex flex-col gap-3 text-base text-[#5B4E3E]">
            <span className="flex items-center gap-2">
              <Phone size={18} /> {CLINIC.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={18} /> hello@homeopathy.clinic
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={18} /> Clinic room, by appointment
            </span>
          </div>
        </div>

        {/* Right column: the form itself, or a confirmation once submitted */}
        <div className="rounded-md border border-[#DCCFB2] bg-[#F6EFE0] p-6 sm:p-8 h-fit">
          {sent ? (
            <div className="text-center py-10">
              <Check size={36} className="mx-auto text-[#6B7A5E] mb-3" />
              <h3 className="font-display text-2xl mb-2">Thanks, {name.split(" ")[0]}.</h3>
              <p className="text-base text-[#5B4E3E]">We'll get back to you soon.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="block text-sm uppercase tracking-wide text-[#8B5570] mb-2">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm bg-[#EFE7D8] border border-[#C7B896] text-base outline-none focus:border-[#96652F]"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide text-[#8B5570] mb-2">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full px-4 py-3 rounded-sm bg-[#EFE7D8] border border-[#C7B896] text-base outline-none focus:border-[#96652F]"
                />
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide text-[#8B5570] mb-2">Reason</label>
                <select
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full px-4 py-3 rounded-sm bg-[#EFE7D8] border border-[#C7B896] text-base outline-none focus:border-[#96652F]"
                >
                  <option>General question</option>
                  <option>Feedback / Review</option>
                  <option>Something else</option>
                </select>
              </div>
              <div>
                <label className="block text-sm uppercase tracking-wide text-[#8B5570] mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm bg-[#EFE7D8] border border-[#C7B896] text-base outline-none focus:border-[#96652F] resize-none"
                />
              </div>
              {/* Disabled until name, email, and message are all filled in */}
              <button
                disabled={!canSubmit}
                onClick={handleSubmit}
                className={`w-full py-3.5 rounded-sm text-base transition-colors ${
                  canSubmit ? "bg-[#96652F] text-[#F6EFE0] hover:bg-[#7E5327]" : "bg-[#DCCFB2] text-[#9C8F76] cursor-not-allowed"
                }`}
              >
                Send
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
