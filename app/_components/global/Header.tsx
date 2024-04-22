"use client";

import React, { useState } from "react";
import { headerData } from "./data";
import Image from "next/image";
import Link from "next/link";

export const RenderCTA = () => {
  return (
    <>
      {headerData?.buttons?.map((btn) => {
        return (
          <button
            key={btn.cta_text}
            className={` rounded-full text-sm font-medium px-4 lg:px-6 py-2 xl:px-7 xl:py-3 ${
              btn.type === "primary"
                ? "bg-primary text-white"
                : "bg-lightestgray"
            } `}
          >
            {btn.type === "primary" ? (
              <span className="block w-max">{btn.cta_text}</span>
            ) : (
              <span className="flex justify-between gap-2 items-center">
                <span className="block w-max">
                  <Image
                    src="/assets/demo.svg"
                    width={15}
                    height={15}
                    alt="demo"
                    className="w-auto h-auto"
                  />
                </span>
                <span className="block w-max">{btn.cta_text}</span>
              </span>
            )}
          </button>
        );
      })}
    </>
  );
};

const Header = () => {
  const [menuOpenStatus, setMenuOpenStatus] = useState(false);

  const handleMenuStatus = () => {
    setMenuOpenStatus(!menuOpenStatus);
  };

  const RenderLogo = () => {
    return (
      <div className="flex-[0.3] lg:flex-1 ">
        <Image
          src={headerData.logo}
          alt="logo of the company"
          width={100}
          height={100}
          className="w-auto h-auto"
          priority
        />
      </div>
    );
  };

  const RenderNavLinks = () => {
    return (
      <ul className="flex-[0.4] lg:flex-1  justify-between items-center gap-4 lg:gap-5 hidden md:flex ">
        {headerData?.links?.map((eachLink) => {
          return (
            <li
              key={eachLink.linkName}
              className={` hover:border-b-primary border-b-2 border-transparent transition-all py-5 `}
            >
              <Link
                href={eachLink.linkPath}
                className="text-xs lg:text-sm w-max block"
              >
                {eachLink.linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const RenderMobileNavLinks = () => {
    return (
      <ul className="md:hidden ">
        {headerData?.links?.map((eachLink) => {
          return (
            <li
              key={eachLink.linkName}
              className={` hover:border-l-primary border-l-2 border-transparent transition-all py-5 px-3 `}
            >
              <Link
                href={eachLink.linkPath}
                className="text-sm lg:text-sm w-max block"
              >
                {eachLink.linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const RenderMobileCTA = () => {
    return (
      <div className="flex flex-col gap-2 md:hidden py-5">
        {headerData?.buttons?.map((btn) => {
          return (
            <button
              key={btn.cta_text}
              className={` rounded-full text-sm font-medium px-4 lg:px-6 py-2 mx-auto min-w-[150px] ${
                btn.type === "primary"
                  ? "bg-primary text-white"
                  : "bg-lightestgray"
              } `}
            >
              {btn.type === "primary" ? (
                <span className="block  text-center w-full">
                  {btn.cta_text}
                </span>
              ) : (
                <span className="flex justify-between gap-2 items-center">
                  <span className="block w-max">
                    <Image
                      src="/assets/demo.svg"
                      width={15}
                      height={15}
                      alt="demo"
                      className="w-auto h-auto"
                    />
                  </span>
                  <span className="block w-max">{btn.cta_text}</span>
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  const RenderHamburgerMenuButton = () => {
    return (
      <button
        className="relative z-[55] transition-all md:hidden"
        onClick={handleMenuStatus}
      >
        <div className="w-6 aspect-square  flex flex-col justify-center gap-1">
          <div
            className={`bg-primary h-[3px] rounded-full transition-all duration-500 ${
              menuOpenStatus ? "rotate-45  translate-y-1" : ""
            }`}
          ></div>
          <div
            className={`bg-primary h-[3px] rounded-full ${
              menuOpenStatus ? "hidden" : "block"
            } `}
          ></div>
          <div
            className={`bg-primary h-[3px] rounded-full transition-all duration-500 ${
              menuOpenStatus ? "-rotate-45 -translate-y-1" : ""
            }`}
          ></div>
        </div>
      </button>
    );
  };

  return (
    <>
      {/* sidebar */}
      <aside
        className={`w-[50%] max-w-[250px] h-screen bg-white shadow-lg fixed right-0 pt-16 ${
          menuOpenStatus ? "translate-x-[0%]" : "translate-x-[100%]"
        } transition-all z-[50]`}
      >
        <RenderMobileNavLinks />
        <div className="w-[80%] mx-auto mt-16">
          <RenderMobileCTA />
        </div>
      </aside>

      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center gap-5 lg:gap-10 w-[95%] lg:w-[90%] mx-auto py-5 md:py-0">
          <RenderLogo />
          <RenderNavLinks />
          <div className="flex-[0.3] lg:flex-1 gap-5 items-center justify-end hidden md:flex">
            <RenderCTA />
          </div>
          <RenderHamburgerMenuButton />
        </div>
      </header>
    </>
  );
};

export default Header;
