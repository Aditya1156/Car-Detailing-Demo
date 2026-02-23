import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutUs />
      <Services />
      <BeforeAfter />
      <Pricing />
      <CTABanner />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
