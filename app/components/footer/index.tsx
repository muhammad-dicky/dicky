import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiLovers } from "react-icons/gi";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      <div className="flex justify-between pt-20 my-7">
        <div className="text-xl">
          © 2023 <span className="font-bold">DICKY</span>{" "}
        </div>
        <div className="hidden md:block">Site designed and coded with ❤️</div>
        <div className="flex items-center group scroll-to-top">
          {isVisible && (
            <div className="flex" onClick={scrollToTop}>
              <div className="pr-2 hover:font-bold transition duration-300 group-hover:translate-y-[-5px]">
                BACK TO TOP
              </div>

              <div className="duration-300 transition transform group-hover:translate-y-[-5px] ">
                <Image src={"/top.svg"} width={25} height={25} alt={""} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
