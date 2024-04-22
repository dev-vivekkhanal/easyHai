import React from "react";
import { footerData } from "./data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-lightestgray text-[#253837] text-xs">
      <div className="flex flex-row gap-10 sm:gap-5  w-[90%] mx-auto py-6">
        <div className="flex-1 flex flex-col gap-3 justify-between">
          <div className="w-[100px]">
            <Image
              src={footerData?.logo}
              alt="logo of the company"
              width={100}
              height={100}
              className="w-auto h-auto"
              priority
            />
          </div>

          <p className="max-w-[250px]">{footerData?.desc}</p>

          <div className="flex gap-2 items-center">
            {footerData?.socials?.map((social) => {
              return (
                <div key={social?.linkName}>
                  <div className="border p-3 border-slate-300 rounded-full">
                    <Image
                      src={social?.icon}
                      alt={social?.linkName}
                      width={15}
                      height={15}
                      className="w-auto h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1  flex flex-col  md:grid md:grid-cols-2 md:grid-rows-3 grid-flow-col gap-5  max-w-[130px] md:max-w-none">
          {footerData?.links?.map((footer_link) => {
            return (
              <Link key={footer_link?.linkName} href={footer_link?.linkPath}>
                {footer_link?.linkName}
              </Link>
            );
          })}
        </div>
      </div>
      <p className="border-t border-t-slate-200 text-xs text-center py-1">
        Copyright ® 2024 Company All rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
