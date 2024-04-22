import Image from "next/image";
import React from "react";
import { SectionHeader } from "./WhyUsSection";

const KeyFeatures = () => {
  const section_heading_content = {
    question: "key features",
    answer: "We offer best services",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  };

  const bullets = [
    {
      title: "We offer best services",
      desc: "Lorem Ipsum is not simply random text",
      icon: "/assets/features1Icon.svg",
    },
    {
      title: "Schedule your service",
      desc: "It has roots in a piece of classical",
      icon: "/assets/features2Icon.svg",
    },
    {
      title: "Get discounted prices",
      desc: "Lorem Ipsum is not simply random text",
      icon: "/assets/features3Icon.svg",
    },
  ];
  return (
    <section className="py-10">
      <div className="flex gap-5">
        <div className="sm:flex-[0.55] flex flex-col gap-5  justify-around">
          <SectionHeader content={section_heading_content} />

          <div className="flex gap-5">
            <div className=" px-[5%]">
              <div className="sm:flex-[0.45]  relative  flex justify-center my-10 sm:hidden">
                <Image
                  src={"/assets/keyFeatures.svg"}
                  alt="why us"
                  width={100}
                  height={100}
                  className="w-full max-w-[300px]"
                  priority
                />
                <div className="flex gap-2  w-max p-2 px-5 rounded-full shadow-md bg-white absolute top-[12%] md:top-[15%] right-[10%]">
                  <Image
                    src={"/assets/featuresPawIcon.svg"}
                    alt="paradise for pets"
                    width={100}
                    height={100}
                    className="w-[20px]"
                  />
                  <h3 className="text-sm font-bold">Paradise for pets</h3>
                </div>
              </div>

              <div className="flex flex-row sm:flex-col gap-5">
                {bullets?.map((bullet) => {
                  return (
                    <div
                      key={bullet?.title}
                      className="flex flex-col justify-center sm:flex-row gap-5 items-center"
                    >
                      <div className="">
                        <Image
                          src={bullet?.icon}
                          alt="discount"
                          width={100}
                          height={100}
                          className="w-[50px]"
                        />
                      </div>
                      <div className="space-y-2 text-center sm:text-left">
                        <h2 className="font-bold text-lg sm:text-xl text-center sm:text-left">
                          {bullet?.title}
                        </h2>
                        <p className="text-gray text-xs">{bullet?.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="sm:flex-[0.45]  relative hidden sm:block">
          <Image
            src={"/assets/keyFeatures.svg"}
            alt="why us"
            width={100}
            height={100}
            className="w-full"
            priority
          />
          <div className="flex gap-2  w-max p-2 px-5 rounded-full shadow-md bg-white absolute top-[12%] md:top-[15%] right-[10%]">
            <Image
              src={"/assets/featuresPawIcon.svg"}
              alt="paradise for pets"
              width={100}
              height={100}
              className="w-[20px]"
            />
            <h3 className="text-sm font-bold">Paradise for pets</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
