import Image from "next/image";
import React from "react";
import { Reveal } from "../Reveal";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};
const textServices = {
  color: "#AEAE9D",
};

export default function Services() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div
            className="flex text-4xl lg:text-8xl text-center pt-56 font-semibold"
            id="services"
          >
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <Reveal>
              <span className="px-5" style={textStyle}>
                SERVICES
              </span>
            </Reveal>

            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex-row md:flex justify-between pt-20 md:space-x-20">
          <div className="flex-1 space-y-5 ">
            <Reveal>
              <div className="text-4xl lg:text-7xl font-bold">
                my expertises.
              </div>
            </Reveal>
            <Reveal>
              <div>
                I focus on all things design and web related. With each of my
                services,my goal is to deliver an impactful and elevating
                digital experiene for everyone.
              </div>
            </Reveal>
          </div>
          <div className="flex-1">
            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold "
                style={textServices}
              >
                Web Development
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold"
                style={textServices}
              >
                Web Design
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold"
                style={textServices}
              >
                UI/UX Design
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex-row md:flex justify-between pt-20 md:space-x-20">
          <div className="flex-1 space-y-5 ">
            <Reveal>
              <div className="text-4xl lg:text-7xl font-bold">
                my digital tool box.
              </div>
            </Reveal>

            <Reveal>
              <div>
                These are my go to tech stack to make any projects happen. I am
                always eager of learning more about my current stack, and new
                technologies that could expand my horizons.
              </div>
            </Reveal>
          </div>
          <div className="flex-1">
            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold "
                style={textServices}
              >
                ReactJS
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold "
                style={textServices}
              >
                NextJS
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold "
                style={textServices}
              >
                ExpressJS
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold"
                style={textServices}
              >
                FIGMA
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold"
                style={textServices}
              >
                TailwindCSS
              </div>
            </Reveal>

            <Reveal>
              <div
                className="md:text-6xl text-5xl font-extrabold"
                style={textServices}
              >
                PHP
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
