import React from "react";
import Image from "next/image";
import { RenderCTA } from "../global/Header";

const HeroSection = () => {
  return (
    <section>
      <div className="flex gap-5">
        <div className="flex-1 py-10 space-y-5  pl-[5%] ">
          <div className="flex gap-2  w-max p-2 px-5 rounded-full shadow-md bg-white">
            <h3 className="text-sm">Explore the services</h3>
            <Image
              src={"/assets/heroSmallDog.svg"}
              alt="logo of the company"
              width={100}
              height={100}
              className="w-[20px]"
            />
          </div>

          <h1 className="font-extrabold text-4xl w-[90%]">
            Lorem <span className="text-primary">ipsum is a dummy</span> text
            for websites
          </h1>

          <p className="text-sm text-gray w-[60%]">
            We always make our customer happy by providing as many choices as
            possible
          </p>

          <div className="flex ">
            <div className="flex flex-col justify-start items-start sm:flex-row gap-3 sm:items-center">
              <RenderCTA />
            </div>
            <div className="sm:hidden">
              <Image
                src={"/assets/hero.svg"}
                alt="logo of the company"
                width={100}
                height={100}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex-1 hidden sm:block">
          <Image
            src={"/assets/hero.svg"}
            alt="logo of the company"
            width={100}
            height={100}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
