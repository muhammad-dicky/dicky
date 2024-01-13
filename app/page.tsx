"use client";

import { ArrowBigRight, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import About from './components/about'
import { useEffect } from 'react'
import gsap from 'gsap'
import { TypeAnimation } from 'react-type-animation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Services from './components/services';
import Projects from './components/projects';


const textStyle = {
  color: '#262626'
};

export default function Home() {
  useEffect(() => {
    const textElement = document.querySelector('.intro-text');
    const boxElement = document.querySelector('.intro-box');

    const japanElement = document.querySelector('.intro-japan');
    const scrollElement = document.querySelector('.intro-scroll');
   

    gsap.set([textElement], {opacity:0, scale:5});
    gsap.set([boxElement], {opacity:0, scale: 0.5});
    gsap.set([japanElement], {opacity:0, y:-100});
    gsap.set([scrollElement], {opacity:0, y:100});
    


    const japan = gsap.timeline({defaults: {ease: 'power3.out'}});
    const scroll = gsap.timeline({defaults: {ease: 'power3.out'}});
    const hr = gsap.timeline({defaults: {ease: 'power3.out'}});

    const tl = gsap.timeline({defaults: {ease: 'power3.out'}});

    tl.to(textElement, {opacity: 1, scale: 1, duration: 1.5})
    .to(boxElement, {opacity: 1, scale:1, duration: 1.5}, '-=1.5')
    
    japan.to(japanElement, {opacity: 1, y: 0, duration:1.5});
    scroll.to(scrollElement, {opacity: 1, y: 0, duration:1.5});

    japan.play();
    scroll.play();
    hr.play();
   
    tl.play();


  }, []);


  useEffect(() => {
    const darkTheme = 'dark';
    const lightTheme = 'light';
    const scrollThreshold = 100;

    document.body.classList.add(lightTheme);

    const handleThemeChange = () => {
      const scrollPosition = window.scrollY;
      const aboutSection = document.querySelector('.about-section');

      if(scrollPosition > scrollThreshold){
        document.body.classList.remove(lightTheme);
        document.body.classList.add(darkTheme);
      }else{
        document.body.classList.remove(darkTheme);
        document.body.classList.add(lightTheme);
      };

      ScrollTrigger.create({
        trigger: aboutSection,
        start: 'top center',
        onEnter: () => {
          document.body.classList.remove(lightTheme);
          document.body.classList.add(darkTheme);
        },
        onLeaveBack: () => {
          document.body.classList.remove(darkTheme);
          document.body.classList.add(lightTheme);
        },
      });

      handleThemeChange();

      return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  },[]);


  
  return (
<>

<main className='container overflow-x-hidden'>
  <div className='py-28 flex justify-center items-center h-fit relative '>

    <div className='p-10 max-w-sm rounded-lg overflow-visible border border-black shadow-lg text-center relative intro-box'>
      <div className=' font-extrabold text-9xl mb-2 intro-text' style={textStyle}>
        HEY, I&apos;M DICKY
      </div>
    </div>
    <div className='font-bold transform rotate-90 intro-japan'>
    ウェブ開発者
    </div>

  </div>

  <div className='flex justify-center intro-scroll'>
  <div className='text-center'>
<div className='mouse'></div>
<p className='pt-2 scroll tracking-widest'>Scroll</p>
  </div>
</div>


  <About/>
  <Services/>
  <Projects/>
</main>
</>
    
  )
}