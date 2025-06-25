import {Canvas} from '@react-three/fiber'
import { Leva } from 'leva';
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import Target from '../components/Target.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes, words } from '../constant/index';
import { HackerRoom } from '../components/HackerRoom.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

   useGSAP(() => {
     gsap.fromTo('.title', {
        y: 50,
        opacity: 0
     } ,
     {
       y: 0,
       opacity: 1,
       stagger: 0.5,
       duration: 3,
       ease: 'power2.inOut'
     }
    )
   })

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


       
   return (
    <section className='min-h-screen w-full flex flex-col relative items-center' id="home">
               <div className='flex flex-col sm:mt-36 mt-20 items-center justify-center gap-1 title'>
                 <p className='md:text-lg
        text-white font-semibold'>Hi My Name is Pristine</p>

                     <div className='absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] md:h-[84px] max-sm:h-[28px] md:translate-y-1 translate-y-0 overflow-hidden lg:text-[60px] md:text-[45px] text-[30px] max-sm:text-[1rem] font-semibold relative z-10 pointer-events-none w-full'>
                       <h1 className=''>I Build  <span className='slide'>

                         <span className='wrapper'>
                            {words.map((word, index) => (
                              <span className='flex items-center md:gap-3 gap-1 pb-2' key={index}>
                                <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                                 {word.text}
                              </span>
                            ))}
                         </span>
                        </span>
                         </h1>
                         
                     </div>
               </div>

          <div className='w-full h-full absolute inset-0 mt-20'>
           <Canvas className="w-full h-full"> 
           <Suspense fallback={<CanvasLoader />}> 
             To hide controller 
             <Leva hidden /> 
             <PerspectiveCamera makeDefault position={[0, 0, 30]} /> 

             <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera> 
 
             <group> 
               <Target position={sizes.targetPosition} /> 
                <ReactLogo position={sizes.reactLogoPosition} /> 
               <Cube position={sizes.cubePosition} />  
               <Rings position={sizes.ringPosition} /> 
             </group> 

             <ambientLight intensity={1} /> 
             <directionalLight position={[10, 10, 10]} intensity={0.5} /> 
           </Suspense> 
         </Canvas> 
           </div> 
          <div className='absolute top-0 right-0 -z-10'>
    <img src='/assets/spotlight1.png' alt='spotlight' className='w-full h-full object-cover rounded-xl'/>
         </div>
    </section>
   )
}

export default Hero