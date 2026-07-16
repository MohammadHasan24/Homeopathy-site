// Full-width photo break - purely decorative, adds some visual color to
// the page between the cards and the CTA banner. Swap the ImagePlaceholder
// for a real photo (clinic room, remedy bottles, plants) when you have one.
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function ImageBreak() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <ImagePlaceholder label="Add a clinic or remedy photo here" className="h-56 sm:h-72" />
    </section>
  );
}
