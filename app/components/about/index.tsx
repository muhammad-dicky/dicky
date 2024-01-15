import Image from "next/image";
import React from "react";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};

export default function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="h-80 text-6xl font-bold lg:text-7xl mt-40 ">
          I create elevating digital experiences that inspire and connect with
          people through development and design.
        </div>

        <div className="flex items-center justify-center ">
          <div className="flex text-7xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <span className="px-5 our-text" style={textStyle}>
              ABOUT ME
            </span>
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex justify-between pt-20 space-x-5">
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
            <div className="text-4xl font-bold">A brief intro, who am I?</div>
            <div>
              I am an independent web developer based in Bali, Indonesia.
            </div>
            <div>
              I specialize in crafting elevated, intuitive, and minimalistic
              design for startups and small businesses to help them stand out in
              the digital landscape with a powerful impact.🔥
            </div>
            <div>
              Whe I am not developing or designing, I enjoy spending my leisure
              time playing relaxing games like Genshin Impact or competitive
              games like Valorant. These games provide me with a balance of
              relaxation and excitement.🎮
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
