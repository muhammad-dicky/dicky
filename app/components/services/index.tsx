import Image from "next/image";
import React from "react";
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
          <div className="flex text-7xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <span className="px-5" style={textStyle}>
              SERVICES
            </span>
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex justify-between pt-20 space-x-20">
          <div className="flex-1 space-y-5">
            <div className="text-4xl lg:text-7xl font-bold">my expertises.</div>
            <div>
              I focus on all things design and web related. With each of my
              services,my goal is to deliver an impactful and elevating digital
              experiene for everyone.
            </div>
          </div>
          <div className="flex-1">
            <div
              className="md:text-6xl text-2xl font-extrabold "
              style={textServices}
            >
              Web Development
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold"
              style={textServices}
            >
              Web Design
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold"
              style={textServices}
            >
              UI/UX Design
            </div>
          </div>
        </div>

        <div className="flex justify-between pt-20 space-x-20">
          <div className="flex-1 space-y-5">
            <div className="text-4xl lg:text-7xl font-bold">
              my digital tool box.
            </div>
            <div>
              These are my go to tech stack to make any projects happen. I am
              always eager of learning more about my current stack, and new
              technologies that could expand my horizons.
            </div>
          </div>
          <div className="flex-1">
            <div
              className="md:text-6xl text-2xl font-extrabold "
              style={textServices}
            >
              ReactJS
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold "
              style={textServices}
            >
              NextJS
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold "
              style={textServices}
            >
              ExpressJS
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold"
              style={textServices}
            >
              FIGMA
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold"
              style={textServices}
            >
              TailwindCSS
            </div>
            <div
              className="md:text-6xl text-2xl font-extrabold"
              style={textServices}
            >
              PHP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
