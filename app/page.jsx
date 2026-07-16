// The homepage itself. This file just lays out the sections in order -
// all the actual markup/logic lives in each section's own component file.
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import Cards from "@/components/Cards";
import ImageBreak from "@/components/ImageBreak";
import Cta from "@/components/Cta";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />        {/* Sticky top nav */}
      <HeroCarousel />  {/* Full-bleed rotating hero (replaces the old separate Hero + Carousel) */}
      <Cards />         {/* "What we offer" service cards */}
      <ImageBreak />    {/* Full-width photo spot for visual color */}
      <Cta />           {/* "Get your appointment today" banner */}
      <Reviews />       {/* Google-review-style testimonials */}
      <Footer />        {/* Nav links + contact + map box */}
    </>
  );
}
