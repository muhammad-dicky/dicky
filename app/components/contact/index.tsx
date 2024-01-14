import Image from "next/image";
import React from "react";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};
export default function Contact() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="flex text-7xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <span className="px-5" style={textStyle}>
              CONTACT
            </span>
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div className="flex justify-between pt-20 space-x-5">
          <div className="flex-1">
            <h1 className="text-xl font-bold">
              Have an awesome idea? <br /> Let&apos;s bring to life.
            </h1>
            <p>I am currently available for freelance work.</p>
          </div>
          <div className="flex-1 space-y-10">
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
