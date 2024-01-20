import Image from "next/image";
import React from "react";
import { Reveal } from "../Reveal";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};

export default function About() {
  return (
    <>
      <div className="about pr-5" id="about">
        <div className="h-80 text-6xl font-bold lg:text-7xl mt-40 text-center md:text-left mb-80 md:mb-0">
          I create elevating digital experiences that inspire and connect with
          people through development and design.
        </div>

        <div className="flex items-center justify-center ">
          <div className="flex text-4xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <Reveal>
              <span className="px-5 our-text" style={textStyle}>
                ABOUT ME
              </span>
            </Reveal>
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex-row md:flex justify-between pt-20 space-x-5 space-y-5">
          <div className="flex-1">
            <Image
              className="rounded-lg"
              src={"/diki.jpeg"}
              priority
              width={500}
              height={500}
              alt={""}
            />
          </div>
          <div className="flex-1 space-y-10 lg:space-y-14 lg:text-xl">
            <Reveal>
              <div className="text-4xl font-bold">A brief intro, who am I?</div>
            </Reveal>
            <Reveal>
              <div>
                I am an independent web developer based in Bali, Indonesia.
              </div>
            </Reveal>
            <Reveal>
              <div>
                I specialize in crafting elevated, intuitive, and minimalistic
                design for startups and small businesses to help them stand out
                in the digital landscape with a powerful impact.🔥
              </div>
            </Reveal>
            <Reveal>
              <div>
                Whe I am not developing or designing, I enjoy spending my
                leisure time playing relaxing games like Genshin Impact or
                competitive games like Valorant. These games provide me with a
                balance of relaxation and excitement.🎮
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
}
