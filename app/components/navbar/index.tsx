"use client";

import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";


const primaryColor = {
    color: '#262626',
  };

const Navbar = () => {
    useEffect(() => {
        const navElement = document.querySelector('.intro-nav');

        gsap.set([navElement], { y:-100});

        const tl = gsap.timeline({defaults: {animation: 'visible'}});

        tl.to(navElement, {opacity: 1, y:0, duration: 1.5});

        tl.play();
    }, []);
    return ( 
        <div className="w-full h-20 sticky top-0 bg-white intro-nav">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    DICKY
                    <ul className="hidden md:flex gap-x-6 items-center">
                        <li>
                            <Link href={"/about"}>
                                <p> About </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/services"}>
                                <p> Services </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/projects"}>
                                <p> Projects </p>
                            </Link>
                        </li>
                        <Button className="py-6 px-11 rounded-full " >
                            Let&apos;s Talk.
                        </Button>
                    </ul>
                </div>
            </div>
        </div>
     );
}

export default Navbar;