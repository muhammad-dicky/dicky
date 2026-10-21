import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Reveal } from "../Reveal";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};
export default function Projects() {
  return (
    <>
      <div className="" id="projects">
        <div className="flex items-center justify-center ">
          <div className="flex text-4xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <Reveal>
              <span className="px-5" style={textStyle}>
                PROJECTS
              </span>
            </Reveal>

            <Image src={"crop.svg"} width={40} height={40} alt={""} />
          </div>
        </div>

        <div>
          <Link target="_blank" href={"https://www.dreamrue.com/"}>
            <div className="image-container relative overflow-hidden bg-cover bg-no-repeat pt-10 ">
              <Image
                className="image transform transition-transform duration-700 ease-in-out hover:scale-105 "
                src={"/dreamrue-new.jpg"}
                fill={true}
                alt={"projects"}
              />
            </div>
          </Link>
          <div className="p-5">
            <div className="flex flex-wrap gap-2">
              <Badge variant={"outline"} className="py-2 px-6">
                2026
              </Badge>
              <Badge variant={"outline"} className="py-2 px-6">
                Nuxtjs
              </Badge>
            </div>
            <Reveal>
              <h1 className="pt-5 font-semibold">
                DreamRue - Real Estate
              </h1>
            </Reveal>
            <Reveal>
              <p className="">Web Development </p>
            </Reveal>
          </div>
        </div>

        <div className="flex pt-10 space-x-5 items-end">
          <div className="flex-1">
            <Link target="_blank" href={"https://nivabali.com/"}>
              <div className="image-container relative overflow-hidden bg-no-repeat ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out hover:scale-105 "
                  src={"/niva.jpg"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant={"outline"} className="py-2 px-6">
                  2025
                </Badge>
                <Badge variant={"outline"} className="py-2 px-6">
                  PHP • Wordpress • MySQL
                </Badge>
              </div>
              <Reveal>
                <h1 className="pt-5 font-semibold">
                  NIVA PADONAN - Real Estate
                </h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
          <div className="flex-1">
            <Link target="_blank" href={"https://www.oumacreatives.com/"}>
              <div className="image-container relative overflow-hidden bg-cover bg-no-repeat  ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out  hover:scale-105 "
                  src={"/ouma-new.jpg"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant={"outline"} className="py-2 px-6">
                  2025
                </Badge>
                <Badge variant={"outline"} className="py-2 px-6">
                  Nextjs
                </Badge>
              </div>
              <Reveal>
                <h1 className="pt-5 font-semibold">OUMA - Digital Agency</h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="flex pt-10 space-x-5 items-end">
          <div className="">
            <Link
              target="_blank"
              href={"https://harcourtspurbabali.com/lp_/family-nest-lp/"}
            >
              <div className="image-container relative overflow-hidden bg-no-repeat ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out  hover:scale-105 "
                  src={"/familynest-new.jpg"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant={"outline"} className="py-2 px-6">
                  2025
                </Badge>
                <Badge variant={"outline"} className="py-2 px-6">
                  PHP • Bootstrap • MySQL
                </Badge>
              </div>
              <Reveal>
                <h1 className="pt-5 font-semibold">
                  Family Nest - Villa Development
                </h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
          <div className="">
            <Link target="_blank" href={"https://digibuddy.id/"}>
              <div className="image-container relative overflow-hidden bg-cover bg-no-repeat  ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out  hover:scale-105 "
                  src={"/digibuddy-new.jpg"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant={"outline"} className="py-2 px-6">
                  2026
                </Badge>
                <Badge variant={"outline"} className="py-2 px-6">
                  Nextjs
                </Badge>
              </div>
              <Reveal>
                <h1 className="pt-5 font-semibold">Digibuddy.id - LMS</h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* <div className="image-container relative overflow-hidden bg-cover bg-no-repeat">
  <img
    src={'/1.png'}
    className="image  transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div> */}
      </div>
    </>
  );
}
