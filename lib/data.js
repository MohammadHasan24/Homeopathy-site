// Central place for all the site's content (nav links, carousel slides,
// service cards, reviews). Keeping this separate from the components means
// you can update text/copy here without touching any layout or styling code.
import { HeartPulse, Sparkles, Leaf, NotebookPen, Truck } from "lucide-react";

// Links shown in both the navbar (Header.jsx) and the footer (Footer.jsx).
export const NAV_LINKS = [
  { label: "Appointments", href: "/appointments" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

// Core clinic identity - name, practitioner, and phone number as they
// appear on the physical clinic card. Reused wherever this info shows up
// (header, footer, about page) so it only needs updating in one place.
export const CLINIC = {
  name: "Humanity & Homeopathy",
  doctorName: "Dr. Iffat Jabeen",
  doctorTitle: "Homoeo Physician",
  phone: "0334-5167288",
};

// Slides for the auto-rotating carousel on the homepage.
// Each slide pairs an icon with a short headline + description.
export const SLIDES = [
  { title: "Cold & Flu Season", body: "Gentle remedies for the sniffles, sore throats, and the aches that come with them.", icon: HeartPulse },
  { title: "Allergies", body: "Get ahead of the sneezing and watery eyes before the season really sets in.", icon: Sparkles },
  { title: "Sleep & Stress", body: "Remedies chosen around your actual routine, not a one-size-fits-all bottle.", icon: Leaf },
  { title: "Digestive Care", body: "For the stomach troubles that are easy to ignore until they aren't.", icon: NotebookPen },
];

// The 4 cards shown in the "What we offer" section.
export const CARDS = [
  { title: "Consultations", body: "A real conversation about your case, in a quiet room, at a time you picked.", icon: NotebookPen },
  { title: "Personalized Remedies", body: "Prescriptions written for you, never pulled off a shelf.", icon: Leaf },
  { title: "Follow-up Care", body: "We check back in, so a remedy that isn't working gets adjusted quickly.", icon: HeartPulse },
  { title: "Delivery, Coming Soon", body: "Home delivery for repeat remedies is on the way.", icon: Truck },
];

// Placeholder reviews for the "What people are saying" section.
// Replace with real Google review data once you connect the Places API.
export const REVIEWS = [
  { name: "A. Rahman", stars: 5, body: "Actually got to explain what was going on instead of being rushed out in five minutes." },
  { name: "S. Iqbal", stars: 5, body: "Booked online, showed up, walked out with a remedy that's worked better than anything before." },
  { name: "M. Farooq", stars: 4, body: "Calm little clinic, no crowded waiting room. Appreciated that a lot." },
];
