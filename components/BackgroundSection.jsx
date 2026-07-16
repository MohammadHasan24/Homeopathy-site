// Full-bleed section with a background photo placeholder, a dark gradient
// overlay so light text stays readable over any photo, and content stacked
// on top - all via z-index layering:
//   z-0  -> background photo placeholder
//   z-[1]-> dark gradient overlay
//   z-10 -> actual content
//
// To use a real photo later: inside this component, swap the
// ImagePlaceholder for a real <Image src="..." fill className="object-cover" />
// (or a plain CSS background-image) - the overlay and z-index layers don't
// need to change.
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function BackgroundSection({
  children,
  className = "",
  overlay = "from-[#3A2E22]/80 via-[#3A2E22]/50 to-[#3A2E22]/20",
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background photo placeholder */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder label="" className="w-full h-full border-0 rounded-none" />
      </div>

      {/* Dark gradient overlay for legibility */}
      <div className={`absolute inset-0 z-[1] bg-gradient-to-b ${overlay}`} />

      {/* Content, stacked above the background + overlay */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
