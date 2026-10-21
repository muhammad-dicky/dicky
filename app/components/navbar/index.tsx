"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import About from "../about/index";
import Image from "next/image";
// import Link from "react-scroll";

const primaryColor = {
  color: "#262626",
};

const accentColor = {
  color: "#8C8C73",
};

const menuEase = [0.76, 0, 0.24, 1];

const mobileLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    setMounted(true);
  }, []);

  // lock page scroll while the fullscreen menu is open
  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const handleMobileScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    setMobileMenuOpen(false);

    // wait for the menu to close before scrolling
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 700);
  };

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
                  <Link href="#contact">
                    <Button className="py-6 px-10 rounded-full">
                      <span className="link-strikethrough link-strikethrough-black">
                        Let&apos;s Talk.
                      </span>
                    </Button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu (fullscreen) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                className="md:hidden fixed inset-0 z-50 bg-white flex flex-col"
                style={primaryColor}
                initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
                transition={{ duration: 0.7, ease: menuEase }}
              >
                <div className="container mx-auto px-4 h-20 flex justify-between items-center">
                  <Image src={"/logo.svg"} width={90} height={30} alt={""} />
                  <div
                    className="cursor-pointer"
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
                        d="M6 6l12 12M18 6L6 18"
                      />
                    </svg>
                  </div>
                </div>

                <ul className="container mx-auto px-4 flex-1 flex flex-col justify-center gap-y-6">
                  {mobileLinks.map((link, i) => (
                    <li key={link.href} className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, y: 75 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 75 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.25 + i * 0.1,
                          ease: menuEase,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={handleMobileScroll}
                          className="flex items-baseline gap-x-4"
                        >
                          <span className="text-sm" style={accentColor}>
                            0{i + 1}
                          </span>
                          <span className="text-5xl font-bold link-underline link-underline-black">
                            {link.label}
                          </span>
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                <motion.div
                  className="container mx-auto px-4 pb-10 flex justify-between items-center"
                  initial={{ opacity: 0, y: 75 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 75 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: menuEase }}
                >
                  <div className="leading-strikethrough">
                    <Link href="#contact" onClick={handleMobileScroll}>
                      <Button className="py-6 px-10 rounded-full">
                        <span className="link-strikethrough link-strikethrough-black">
                          Let&apos;s Talk.
                        </span>
                      </Button>
                    </Link>
                  </div>
                  <span className="font-bold" style={accentColor}>
                    ウェブ開発者
                  </span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default Navbar;
