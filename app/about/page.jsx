// About Us page. Entirely static content, so this stays a server component -
// no "use client" needed since nothing here holds state or runs in the browser.
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { HeartHandshake, Leaf, BookOpen, Phone } from "lucide-react";
import { CLINIC } from "@/lib/data";

// Sets the browser tab title for this page.
export const metadata = {
  title: `About Us — ${CLINIC.name}`,
};

// The 3 value cards shown below the intro.
const VALUES = [
  { icon: HeartHandshake, title: "Unhurried care", body: "Every visit is a real conversation, not a five-minute checklist." },
  { icon: Leaf, title: "Remedies made for you", body: "Nothing prescribed off a shelf — every case is treated on its own terms." },
  { icon: BookOpen, title: "Follow-through", body: "We check back in, so a remedy that isn't working gets adjusted quickly." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Intro / mission statement */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14 text-center">
          <p className="uppercase tracking-[0.2em] text-sm text-[#8B5570] mb-5">About us</p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
            A clinic room, <em>not a corridor</em>.
          </h1>
          <p className="text-lg text-[#5B4E3E] max-w-2xl mx-auto leading-relaxed">
            We started {CLINIC.name} because check-ups shouldn't feel rushed. One room,
            one practitioner on duty, and enough time to actually explain what's going on.
          </p>
        </section>

        {/* Banner photo placeholder - swap for a real photo of the clinic space */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <ImagePlaceholder label="Add a photo of the clinic space" className="h-56 sm:h-72" />
        </section>

        {/* Values grid */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid sm:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-md border border-[#DCCFB2] bg-[#F6EFE0] p-6">
              <v.icon size={26} className="text-[#6B7A5E] mb-4" />
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-base text-[#5B4E3E] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </section>

        {/* Practitioner bio card - real name, title, and phone from lib/data.js,
            with a dedicated photo placeholder (separate from the site logo). */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-md border border-[#DCCFB2] bg-[#F6EFE0] p-6 sm:p-10 grid sm:grid-cols-3 gap-8 items-center">
            <ImagePlaceholder label="Add practitioner photo here" className="w-full h-40 sm:h-44" />
            <div className="sm:col-span-2">
              <h2 className="font-display text-2xl mb-1">{CLINIC.doctorName}</h2>
              <p className="text-base text-[#8B5570] mb-3">{CLINIC.doctorTitle}</p>
              <p className="text-base text-[#5B4E3E] leading-relaxed mb-4">
                Add a short bio here — background, how long you've been practicing,
                and what led you to homeopathy. Keep it personal; this is the section
                people read before deciding to trust you with their first visit.
              </p>
              <span className="flex items-center gap-2 text-base text-[#5B4E3E]">
                <Phone size={18} /> {CLINIC.phone}
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
