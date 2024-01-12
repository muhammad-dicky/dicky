"use client";

import { ArrowBigRight, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import About from './components/about'
import { useEffect } from 'react'
import gsap from 'gsap'
import { TypeAnimation } from 'react-type-animation';


const textStyle = {
  color: '#262626'
}

export default function Home() {
  useEffect(() => {
    const textElement = document.querySelector('.intro-text');
    const boxElement = document.querySelector('.intro-box');
   

    gsap.set([textElement], {opacity:0, scale:8});
    gsap.set([boxElement], {opacity:0, scale: 0.5});
    

    // const tl = gsap.timeline({defaults: {ease: 'power3.out'}});

    // tl.to(textElement, {opacity: 1, scale: 1, duration: 1.5})
    // .to(boxElement, {opacity: 1, scale:1, duration: 1.5}, '-=1.5');

    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});

    tl.to(textElement, {opacity: 1, scale: 1, duration: 1.5})
    .to(boxElement, {opacity: 1, scale:1, duration: 1.5}, '-=1.5');

   
    tl.play();


  }, []);


  return (
<>

<main className='container'>
  <div className='flex justify-center items-center h-screen relative'>
    
    <div className='p-10 max-w-sm rounded overflow-visible border border-black shadow-lg text-center relative intro-box'>
      <div className=' font-extrabold text-9xl mb-2 intro-text' style={textStyle}>
        HEY, I'M DICKY
      </div>
    </div>
    <div className='font-bold transform rotate-90 '>
      <TypeAnimation sequence={["ウェブ開発者", 1000, "coba dah", 1000]} speed={30} repeat={Infinity}/>
    
    </div>
   

<div className='absolute transform rotate-90 right-0 hidden md:block'>scroll</div>
  </div>



  <About/>
</main>



      
</>
    
  )
}