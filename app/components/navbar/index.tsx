"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "../about/index";
// import Link from "react-scroll";

const primaryColor = {
  color: "#262626",
};

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const navElement = document.querySelector(".intro-nav");

    gsap.set([navElement], { y: -100 });

    const tl = gsap.timeline({ defaults: { animation: "visible" } });

    tl.to(navElement, { opacity: 1, y: 0, duration: 1.5 });

    tl.play();
  }, []);
  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-white intro-nav z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            DICKY
            <ul className="hidden md:flex gap-x-6 items-center">
              <li className="transition duration-300 font-display leading-tight">
                <Link href="#about" onClick={handleScroll}>
                  <p className="link-underline link-underline-black ">
                    {" "}
                    About{" "}
                  </p>
                </Link>
              </li>
              <li className="transition duration-300 font-display leading-tight">
                <Link href="#services" onClick={handleScroll}>
                  <p className="link-underline link-underline-black ">
                    {" "}
                    Services{" "}
                  </p>
                </Link>
              </li>
              <li className="transition duration-300 font-display leading-tight">
                <Link href="#projects" onClick={handleScroll}>
                  <p className="link-underline link-underline-black ">
                    {" "}
                    Projects{" "}
                  </p>
                </Link>
              </li>
              <div className="leading-strikethrough">
                <Button className="py-6 px-10 rounded-full">
                  <span className="link-strikethrough link-strikethrough-black">
                    Let&apos;s Talk.
                  </span>
                </Button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
