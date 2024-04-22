"use client";
import React from "react";
import { SectionHeader } from "./WhyUsSection";
import ServiceCarousel from "../global/ServiceCarousel";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
} from "pure-react-carousel";
import Image from "next/image";

const ServicesSection = () => {
  const section_heading_content = {
    question: "services",
    answer: "Our top value categories for you",
  };

  const caraouselItems = [
    {
      icon: "assets/serviceIcon1.svg",
      title: "Pet Boarding",
      value: "lorem ipsum dolor sit amet used for websites",
    },
    {
      icon: "assets/serviceIcon2.svg",
      title: "Dog Walk",
      value: "lorem ipsum dolor sit amet used for websites",
    },
    {
      icon: "assets/serviceIcon1.svg",
      title: "Pet Grooming",
      value: "lorem ipsum dolor sit amet used for websites",
    },
    {
      icon: "assets/serviceIcon2.svg",
      title: "Activities",
      value: "lorem ipsum dolor sit amet used for websites",
    },
  ];

  return (
    <section className="py-32">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        isIntrinsicHeight={true}
        totalSlides={caraouselItems?.length}
        visibleSlides={2}
        infinite={true}
      >
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-1">
            <SectionHeader content={section_heading_content} />
          </div>
          <div className="flex-1">
            <ServiceCarousel carouselData={caraouselItems} />
          </div>
        </div>
        <div className="flex justify-between items-center gap-5 pt-16 w-[90%] mx-auto">
          <DotGroup
            className="dot-group"
            showAsSelectedForCurrentSlideOnly={true}
          />
          <div className="flex gap-2 ">
            <ButtonBack className="w-[40px] border border-primary rounded-full aspect-square flex justify-center items-center hover:bg-primary group">
              <div>
                <div>
                  <Image
                    src={"assets/leftInactiveArrow.svg"}
                    alt={"back"}
                    width={100}
                    height={100}
                    className="w-[15px] group-hover:hidden transition-all"
                  />
                </div>

                <div>
                  <Image
                    src={"assets/rightActiveArrow.svg"}
                    alt={"back"}
                    width={100}
                    height={100}
                    className="w-[15px] scale-x-[-1] hidden group-hover:block transition-all"
                  />
                </div>
              </div>
            </ButtonBack>
            <ButtonNext className="w-[40px] border border-primary rounded-full aspect-square flex justify-center items-center bg-primary group">
              <div>
                <div>
                  <Image
                    src={"assets/rightActiveArrow.svg"}
                    alt={"back"}
                    width={100}
                    height={100}
                    className="w-[15px]  transition-all"
                  />
                </div>
              </div>
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </section>
  );
};

export default ServicesSection;
