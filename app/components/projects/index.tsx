import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import crop from '../../../public/crop.svg'

const textStyle = {
    color: '#8C8C73',
}
export default function Projects() {
  return (
    <>
    <div className=''>


<div className='flex items-center justify-center '>
    <div className='flex text-7xl lg:text-8xl text-center pt-56 font-bold'>
    <Image src={'crop.svg'}  width={40} height={40} alt={''}/>
    <span className='px-5' style={textStyle} >PROJECTS</span>  
    <Image src={'crop.svg'}  width={40} height={40} alt={''}/>
    </div>
</div>

<Link href={''}>
<div className='image-container relative overflow-hidden bg-cover bg-no-repeat'>
<Image className='image transform transition-transform duration-1000 ease-in-out hover:scale-105 ' src={'/1.png'} fill={true} alt={'projects'}/>
</div>
</Link>

<div className='h-96'>asldaksdmlaks</div>


{/* <div className="image-container relative overflow-hidden bg-cover bg-no-repeat">
  <img
    src={'/1.png'}
    className="image  transition duration-300 ease-in-out hover:scale-110"
    alt="Louvre" />
</div> */}


    </div>
    </>
    
  )
}
