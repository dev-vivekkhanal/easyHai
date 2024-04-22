import Image from "next/image";
import React from "react";

interface headingContent {
  question: string;
  answer: string;
  desc: string;
}

const WhyUsSection = () => {
  const section_heading_content = {
    question: "why us?",
    answer: "We take best care of your pet",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  };

  const stats = [
    {
      value: "500+",
      title: "Pets Served",
    },
    {
      value: "5",
      title: "Services",
    },
    {
      value: "80%",
      title: "Client Retention",
    },
    {
      value: "400+",
      title: "Happy Customer",
    },
  ];
  return (
    <section className="py-10 pr-[5%]">
      <div className="flex gap-5">
        <Image
          src={"/assets/whyUs.svg"}
          alt="why us"
          width={100}
          height={100}
          className="sm:flex-[0.55] hidden sm:block"
          priority
        />

        <div className="sm:flex-[0.45] flex flex-col gap-5  justify-around">
          <SectionHeader content={section_heading_content} />

          <div className="pt-10 flex gap-5 ">
            <Image
              src={"/assets/whyUs.svg"}
              alt="why us"
              width={100}
              height={100}
              className="flex-1 sm:hidden"
              priority
            />
            <div className="flex-1 max-w-[150px] sm:max-w-none w-[90%]  relative ">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
                {stats?.map((stat) => {
                  return (
                    <div className="border rounded-2xl border-slate-200 p-3 text-center space-y-2">
                      <h2 className="font-bold text-2xl">{stat?.value}</h2>
                      <p className="text-gray text-xs">{stat?.title}</p>
                    </div>
                  );
                })}
              </div>

              <div className="bg-yellow aspect-square w-14 rounded-full flex justify-center items-center absolute top-0 right-0 translate-y-[-50%] translate-x-[50%]">
                <Image
                  src={"/assets/whyUsIcon.svg"}
                  alt="why us icon"
                  width={100}
                  height={100}
                  className="w-[20px] aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

export const SectionHeader = (props: { content: headingContent }) => {
  return (
    <div className="flex flex-col gap-4 w-[90%] mx-auto">
      <h3 className="text-primary uppercase font-bold tracking-widest text-lg ">
        {props?.content?.question}
      </h3>
      <h1 className="font-semibold text-3xl w-[80%]">
        {props?.content?.answer}
      </h1>
      <p className="text-gray text-xs w-[70%]">{props?.content?.desc}</p>
    </div>
  );
};
