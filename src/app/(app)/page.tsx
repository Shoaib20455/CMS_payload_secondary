import type { Metadata } from "next";

import BlogSection from "./components/BlogSection";
import Hero from "./components/Hero";
import IntroSections from "./components/IntroSections";
import PricingSection from "./components/PricingSection";
import ReadyTruckSection from "./components/ReadyTruckSection";
import ServicesProcessSection from "./components/ServicesProcessSection";
import StatePickerCard from "./components/StatePickerCard";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatePickerCard />
      <div className="lg:relative lg:-top-[4.75rem]">

        <IntroSections />
        <ServicesProcessSection />
        <WhyChooseUsSection />
        <PricingSection />
        <ReadyTruckSection />
        <BlogSection />
        <TestimonialsSection />
      </div>
    </>
  );
}