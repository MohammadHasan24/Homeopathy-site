"use client";
// "use client" because this page manages the whole multi-step flow's state
// (which step you're on, which slot/name/phone have been entered).

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IntroScreen from "@/components/appointments/IntroScreen";
import SlotPicker from "@/components/appointments/SlotPicker";
import ContactStep from "@/components/appointments/ContactStep";
import Confirmation from "@/components/appointments/Confirmation";
import { generateSlots, nextAvailableSlot } from "@/lib/slots";

export default function AppointmentsPage() {
  // Which screen of the flow is showing: "intro" -> "slots" -> "contact" -> "done"
  const [step, setStep] = useState("intro");

  // Generated slot data. Left as null until the effect below fills it in on
  // the client, so the intro screen can render immediately without waiting.
  const [slots, setSlots] = useState(null);

  // The slot the user has picked: { date: Date, time: "10:30 am" } or null
  const [selected, setSelected] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Generate the slot data once, on mount, in the browser. Doing this in an
  // effect (rather than during render) avoids server/client mismatches from
  // using `new Date()` while rendering.
  useEffect(() => {
    setSlots(generateSlots());
  }, []);

  const nextSlot = slots ? nextAvailableSlot(slots) : null;

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[60vh]">
        {step === "intro" && <IntroScreen nextSlot={nextSlot} onStart={() => setStep("slots")} />}

        {step === "slots" && slots && (
          <SlotPicker
            slots={slots}
            selected={selected}
            onSelect={setSelected}
            onContinue={() => setStep("contact")}
            onBack={() => setStep("intro")}
          />
        )}

        {step === "contact" && (
          <ContactStep
            selected={selected}
            name={name}
            phone={phone}
            onNameChange={setName}
            onPhoneChange={setPhone}
            onBack={() => setStep("slots")}
            onSubmit={() => setStep("done")}
          />
        )}

        {step === "done" && <Confirmation selected={selected} name={name} />}
      </main>
      <Footer />
    </>
  );
}
