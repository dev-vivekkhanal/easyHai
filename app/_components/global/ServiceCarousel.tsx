"use client";
import Image from "next/image";
import {
  ButtonBack,
  ButtonNext,
  DotGroup,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";

interface carouselData {
  icon: string;
  title: string;
  value: string;
}

const ServiceCarousel = (props: { carouselData: carouselData[] }) => {
  return (
    <div className="relative">
      <Slider>
        {props?.carouselData?.map((data: carouselData, index: number) => {
          return (
            <Slide key={index} index={index} className="">
              <div className="flex flex-col gap-5 justify-center items-center shadow-md rounded-2xl aspect-[14/16] m-5">
                <div>
                  <Image
                    src={data?.icon}
                    alt={data?.title}
                    width={100}
                    height={100}
                    className="w-[60px]"
                  />
                </div>

                <h1 className="text-lg font-semibold">{data?.title}</h1>

                <p className="text-xs text-center">{data?.value}</p>
              </div>
            </Slide>
          );
        })}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
