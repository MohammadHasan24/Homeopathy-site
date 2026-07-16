// Reusable placeholder for a spot where a real photo should go.
// Renders a soft, muted box with a label so it's easy to spot while
// editing. To swap in a real photo later: replace this component with a
// Next.js <Image src="..." fill className="object-cover" /> inside a
// `relative` wrapper of the same size, or set it as a CSS background-image.
//
// Pass label="" for a plain background-style placeholder with no visible
// text (used e.g. behind the hero text, where a label would be distracting).
import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({ label = "Add photo here", className = "", rounded = "rounded-md" }) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} border-2 border-dashed border-[#C7B896] bg-gradient-to-br from-[#DCCFB2] via-[#E3D9C4] to-[#C7B896] flex items-center justify-center ${className}`}
    >
      <div className="flex flex-col items-center gap-2 text-[#7E5327] px-4 text-center">
        <ImageIcon size={label ? 28 : 20} />
        {label && <span className="text-sm sm:text-base font-medium">{label}</span>}
      </div>
    </div>
  );
}
