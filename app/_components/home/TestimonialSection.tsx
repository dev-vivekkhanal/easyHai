import React from "react";
import { SectionHeader } from "./WhyUsSection";
import TestimonialCarousel from "../global/TestimonialCarousel";

const TestimonialSection = () => {
  const section_heading_content = {
    question: "testimonials",
    answer: "Trust our clients",
  };
  return (
    <section className="pt-32">
      <div className="flex-1 text-center">
        <SectionHeader content={section_heading_content} />
      </div>

      <div className="pb-32">
        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default TestimonialSection;
