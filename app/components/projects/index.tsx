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
          <div className="flex text-7xl lg:text-8xl text-center pt-56 font-semibold">
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
          <Link target="_blank" href={"https://semakaradventure.shop/"}>
            <div className="image-container relative overflow-hidden bg-cover bg-no-repeat pt-10 ">
              <Image
                className="image transform transition-transform duration-700 ease-in-out hover:scale-105 "
                src={"/1.png"}
                fill={true}
                alt={"projects"}
              />
            </div>
          </Link>
          <div className="space-x-2 p-5">
            <Badge variant={"outline"} className="py-2 px-6">
              2023
            </Badge>
            <Badge variant={"outline"} className="py-2 px-6">
              {" "}
              PHP • Bootstrap • MySQL{" "}
            </Badge>
            <Reveal>
              <h1 className="pt-5 font-semibold">
                SEMAKAR ADVENTURE - hiking equipment rental
              </h1>
            </Reveal>
            <Reveal>
              <p className="">Web Development </p>
            </Reveal>
          </div>
        </div>

        <div className="flex pt-10 space-x-5 items-end">
          <div className="flex-1">
            <Link target="_blank" href={"https://bakpiatamansari.shop/"}>
              <div className="image-container relative overflow-hidden bg-no-repeat ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out hover:scale-105 "
                  src={"/2.png"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="space-x-2 p-5">
              <Badge variant={"outline"} className="py-2 px-6">
                2023
              </Badge>
              <Badge variant={"outline"} className="py-2 px-6">
                PHP • Bootstrap • MySQL
              </Badge>
              <Reveal>
                <h1 className="pt-5 font-semibold">
                  BAKPIA TAMANSARI - Taste the Tradition
                </h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
          <div className="flex-1">
            <Link target="_blank" href={"https://travelfunn.vercel.app/"}>
              <div className="image-container relative overflow-hidden bg-cover bg-no-repeat  ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out  hover:scale-105 "
                  src={"/3.png"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="space-x-2 p-5">
              <Badge variant={"outline"} className="py-2 px-6">
                2023
              </Badge>
              <Badge variant={"outline"} className="py-2 px-6">
                NextJS • Shadcn-ui • TailwindCSS
              </Badge>
              <Reveal>
                <h1 className="pt-5 font-semibold">
                  TravelFun - Explore the World with Excitement and Ease
                </h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="flex pt-10 space-x-5 items-end">
          <div className="">
            <Link target="_blank" href={"https://forkomumkmgt.site/"}>
              <div className="image-container relative overflow-hidden bg-no-repeat ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out  hover:scale-105 "
                  src={"/5.png"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="space-x-2 p-5">
              <Badge variant={"outline"} className="py-2 px-6">
                2023
              </Badge>
              <Badge variant={"outline"} className="py-2 px-6">
                PHP • Bootstrap • MySQL
              </Badge>
              <Reveal>
                <h1 className="pt-5 font-semibold">
                  FORKOM UMKM - Business Portfolio
                </h1>
              </Reveal>
              <Reveal>
                <p className="">Web Development </p>
              </Reveal>
            </div>
          </div>
          <div className="">
            <Link target="_blank" href={"https://kratone-petshop.vercel.app/"}>
              <div className="image-container relative overflow-hidden bg-cover bg-no-repeat  ">
                <Image
                  className="image transform transition-transform duration-700 ease-in-out  hover:scale-105 "
                  src={"/6.png"}
                  fill={true}
                  alt={"projects"}
                />
              </div>
            </Link>
            <div className="space-x-2 p-5">
              <Badge variant={"outline"} className="py-2 px-6">
                2023
              </Badge>
              <Badge variant={"outline"} className="py-2 px-6">
                NextJS • Shadcn-ui • PostgreSQL • TailwindCSS • Stripe
              </Badge>
              <Reveal>
                <h1 className="pt-5 font-semibold">
                  KratonePetshop - pet equipment shop
                </h1>
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
