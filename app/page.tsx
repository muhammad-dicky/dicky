"use client";

import { ArrowBigRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import About from "./components/about";
import { useEffect } from "react";
import gsap from "gsap";
import { TypeAnimation } from "react-type-animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Services from "./components/services";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

const textStyle = {
  color: "#262626",
};

export default function Home() {
  useEffect(() => {
    const textElement = document.querySelector(".intro-text");
    const boxElement = document.querySelector(".intro-box");

    const japanElement = document.querySelector(".intro-japan");
    const scrollElement = document.querySelector(".intro-scroll");

    gsap.set([textElement], { opacity: 0, scale: 5 });
    gsap.set([boxElement], { opacity: 0, scale: 0.5 });
    gsap.set([japanElement], { opacity: 0, y: -100 });
    gsap.set([scrollElement], { opacity: 0, y: 100 });

    const japan = gsap.timeline({ defaults: { ease: "power3.out" } });
    const scroll = gsap.timeline({ defaults: { ease: "power3.out" } });
    const hr = gsap.timeline({ defaults: { ease: "power3.out" } });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(textElement, { opacity: 1, scale: 1, duration: 1.5 }).to(
      boxElement,
      { opacity: 1, scale: 1, duration: 1.5 },
      "-=1.5"
    );

    japan.to(japanElement, { opacity: 1, y: 0, duration: 1.5 });
    scroll.to(scrollElement, { opacity: 1, y: 0, duration: 1.5 });

    japan.play();
    scroll.play();
    hr.play();

    tl.play();
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  // SCROLL DARKMODE
  useEffect(() => {
    const aboutSection = document.getElementById("about");
    const body = document.body;

    gsap.fromTo(
      aboutSection,
      { opacity: 0 },
      {
        scrollTrigger: {
          trigger: aboutSection,
          start: "top center",
          end: "+=200",
          scrub: true,
        },
        opacity: 1,
        ease: "none",
        onUpdate: (self) => {
          if (self?.progress > 0.5) {
            body.classList.add("dark-theme");
          } else {
            body.classList.remove("dark-theme");
          }
        },
      }
    );
  }, []);

  return (
    <>
      <main className="container overflow-x-hidden ">
        <div className="py-28 flex justify-center items-center h-fit relative dark">
          <div className="p-10 max-w-sm rounded-lg overflow-visible border border-black shadow-lg text-center relative intro-box">
            <div
              className=" font-extrabold text-8xl md:text-9xl mb-2 intro-text"
              style={textStyle}
            >
              HEY, I&apos;M DICKY
            </div>
          </div>
          <div className="hidden md:block font-bold transform rotate-90 intro-japan">
            ウェブ開発者
          </div>
        </div>

        <div className="flex justify-center intro-scroll">
          <div className="text-center">
            <div className="mouse"></div>
            <p className="pt-2 scroll tracking-widest">Scroll</p>
          </div>
        </div>

        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
