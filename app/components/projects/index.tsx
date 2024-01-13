import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import crop from '../../../public/crop.svg'

const textStyle = {
  color: "#8C8C73",
};
export default function Projects() {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-center ">
          <div className="flex text-7xl lg:text-8xl text-center pt-56 font-semibold">
            <Image src={"crop.svg"} width={40} height={40} alt={""} />
            <span className="px-5" style={textStyle}>
              PROJECTS
            </span>
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
            <h1 className="pt-5 font-semibold">
              SEMAKAR ADVENTURE - hiking equipment rental
            </h1>
            <p className="">Web Development </p>
          </div>
        </div>

        <div className="flex space-x-20">
          <div className="flex-1">
            <Link target="_blank" href={"https://semakaradventure.shop/"}>
              <div className="image-container relative overflow-hidden bg-cover bg-no-repeat pt-10 ">
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
              <h1 className="pt-5 font-semibold">
                FORKOM - hiking equipment rental
              </h1>
              <p className="">Web Development </p>
            </div>
          </div>
          <div className="flex-1">
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
              <h1 className="pt-5 font-semibold">
                SEMAKAR ADVENTURE - hiking equipment rental
              </h1>
              <p className="">Web Development </p>
            </div>
          </div>
        </div>

        <div className="h-96">asldaksdmlaks</div>

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
