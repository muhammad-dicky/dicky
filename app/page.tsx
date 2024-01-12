import { ArrowBigRight, ArrowDown } from 'lucide-react'
import Image from 'next/image'
import About from './components/about'


const textStyle = {
  color: '#262626'
}

export default function Home() {
  return (
//     <main className=''>
//   <div className="flex items-center justify-center h-screen relative">
//       <div className="border-4 rounded  border-black p-10 relative">
//         <p className="text-9xl absolute inset-0 flex items-center justify-center whitespace-nowrap">
//           hey im huy
//           <br />
//           hey im huy
//           <br />
//           hey im huy
//           <br />

//         </p>
//       </div>
//     </div>
// </main>
<>

<main className='container'>
  <div className='flex justify-center items-center h-screen relative'>
    
    <div className='p-10 max-w-sm rounded overflow-visible border border-black shadow-lg text-center relative'>
      <div className=' font-extrabold text-9xl mb-2 ' style={textStyle}>
        HEY, I'M DICKY
      </div>
    </div>
    <div className='font-bold transform rotate-90  '>
    ウェブ開発者
    </div>

<div className='absolute transform rotate-90 right-0 hidden md:block'>scroll</div>
  </div>



  <About/>
</main>



      
</>
    
  )
}