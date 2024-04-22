"use client";
import Image from "next/image";
import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const TestimonialCarousel = () => {
  const testimonialData = [
    {
      avatar: "/assets/avatar.svg",
      name: "Mark Smith",
      occupation: "Travel Enthusiast",
      star: 5,
      comment:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },

    {
      avatar: "/assets/avatar2.svg",
      name: "Jessica James",
      occupation: "Vlogger",
      star: 3,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure dolorem voluptatibus nulla placeat ratione dolore laborum magni voluptate voluptatum voluptas.",
    },

    {
      avatar: "/assets/avatar2.svg",
      name: "Monica Bing",
      occupation: "Pilot",
      star: 4,
      comment:
        "Similique ad voluptatum sequi incidunt, assumenda sed, debitis eligendi iste animi quia quos doloribus eos dolores perspiciatis consequuntur id minima consectetur sint!",
    },
  ];
  return (
    <div className="w-[90%] mx-auto">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={25}
        isIntrinsicHeight={true}
        totalSlides={testimonialData?.length}
      >
        <div className="relative">
          <Slider>
            {testimonialData?.map((data, index) => {
              return (
                <Slide key={index} index={index}>
                  <div className="flex flex-col justify-center items-center text-center space-y-8  p-16">
                    <div className="flex flex-col justify-center items-center">
                      <Image
                        src={data?.avatar}
                        alt={data?.name}
                        width={100}
                        height={100}
                        className="w-[80px]"
                      />
                    </div>
                    <h1 className="font-bold text-xl text-gray">
                      <span className="text-primary">{data?.name}</span> /{" "}
                      <span>{data?.occupation}</span>
                    </h1>
                    <div className="flex justify-center items-center gap-2">
                      {Array(data?.star)
                        .fill("assets/starIcon.svg")
                        .map((star, index) => {
                          return (
                            <div key={index}>
                              <Image
                                src={star}
                                alt={"star" + index}
                                width={100}
                                height={100}
                                className="w-[30px]"
                              />
                            </div>
                          );
                        })}
                    </div>

                    <p className="w-[60%] mx-auto">{data?.comment}</p>
                  </div>
                </Slide>
              );
            })}
          </Slider>
          <DotGroup className="dot-group" />
          <ButtonBack className="absolute top-[45%] left-0 w-[40px] sm:w-[80px] border border-slate-200 rounded-full aspect-square flex justify-center items-center hover:bg-primary group">
            <div>
              <div>
                <Image
                  src={"assets/leftInactiveArrow.svg"}
                  alt={"back"}
                  width={100}
                  height={100}
                  className="w-[20px] group-hover:hidden transition-all"
                />
              </div>

              <div>
                <Image
                  src={"assets/rightActiveArrow.svg"}
                  alt={"back"}
                  width={100}
                  height={100}
                  className="w-[20px] scale-x-[-1] hidden group-hover:block transition-all"
                />
              </div>
            </div>
          </ButtonBack>
          <ButtonNext className="absolute top-[45%] right-0 w-[40px] sm:w-[80px] border border-slate-200 rounded-full aspect-square flex justify-center items-center hover:bg-primary group">
            <div>
              <div>
                <Image
                  src={"assets/leftInactiveArrow.svg"}
                  alt={"back"}
                  width={100}
                  height={100}
                  className="w-[20px] scale-x-[-1] group-hover:hidden transition-all"
                />
              </div>

              <div>
                <Image
                  src={"assets/rightActiveArrow.svg"}
                  alt={"back"}
                  width={100}
                  height={100}
                  className="w-[20px]  hidden group-hover:block transition-all"
                />
              </div>
            </div>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default TestimonialCarousel;
