// Root layout - wraps every page in the app. This is where fonts and
// global page-level styles (background color, default text color) live,
// so individual pages don't need to repeat them.
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";

// Display font used for headings (via the "font-display" utility class).
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });
// Body font used for regular text (via the "font-body" utility class).
const karla = Karla({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body" });

// Page metadata (browser tab title + description for SEO).
export const metadata = {
  title: "Humanity & Homeopathy",
  description: "Natural care, unhurried.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${karla.variable} font-body bg-[#EFE7D8] text-[#3A2E22]`}>
        {children}
      </body>
    </html>
  );
}
