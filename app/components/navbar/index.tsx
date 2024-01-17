"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import About from "../about/index";
import Image from "next/image";
// import Link from "react-scroll";

const primaryColor = {
  color: "#262626",
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="w-full h-20 sticky top-0 bg-white intro-nav z-10">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Image src={"/logo.svg"} width={90} height={30} alt={""} />

            {/* Mobile Menu Button */}
            <div
              className="md:hidden cursor-pointer"
              onClick={handleToggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </div>

            {/* Mobile Menu */}
            <ul
              className={`md:hidden ${
                mobileMenuOpen
                  ? "flex flex-col gap-y-4 items-center absolute top-20 left-0 w-full bg-white py-4"
                  : "hidden"
              } transition-all duration-300`}
            >
              <li>
                <Link href="#about" onClick={handleScroll}>
                  <p className="link-underline link-underline-black">About</p>
                </Link>
              </li>
              <li>
                <Link href="#services" onClick={handleScroll}>
                  <p className="link-underline link-underline-black">
                    Services
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={handleScroll}>
                  <p className="link-underline link-underline-black">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <div className="leading-strikethrough">
                  <Button className="py-6 px-10 rounded-full">
                    <span className="link-strikethrough link-strikethrough-black">
                      Let's Talk.
                    </span>
                  </Button>
                </div>
              </li>
            </ul>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-x-6 items-center">
              <li>
                <Link href="#about" onClick={handleScroll}>
                  <p className="link-underline link-underline-black">About</p>
                </Link>
              </li>
              <li>
                <Link href="#services" onClick={handleScroll}>
                  <p className="link-underline link-underline-black">
                    Services
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={handleScroll}>
                  <p className="link-underline link-underline-black">
                    Projects
                  </p>
                </Link>
              </li>
              <li>
                <div className="leading-strikethrough">
                  <Button className="py-6 px-10 rounded-full">
                    <span className="link-strikethrough link-strikethrough-black">
                      Let's Talk.
                    </span>
                  </Button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
