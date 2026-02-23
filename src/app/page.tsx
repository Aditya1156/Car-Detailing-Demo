import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <CTABanner />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <FinalCTA />
    </>
  );
}
