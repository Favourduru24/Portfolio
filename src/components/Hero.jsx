import {Canvas} from '@react-three/fiber'
import { Leva } from 'leva';
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import Target from '../components/Target.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constant/index';
import { HackerRoom } from '../components/HackerRoom.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);


       
   return (
    <section className='min-h-screen w-full flex flex-col relative ' id="home">
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3'>
          <p className='sm:text-3xl text-xl font-medium text-center text-white font-serif'>Hello, I am Pristine <span className='waving-hand'>&#128526;</span></p>
          <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-norma bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent font-serif'>Building Start Up & Brands</p>
         </div>
          <div className='w-full h-full absolute inset-0 mt-20'>
          <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              {/* <Target position={sizes.targetPosition} /> */}
               <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} /> 
              {/* <Rings position={sizes.ringPosition} /> */}
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
          </div>
    </section>
   )
}

export default Hero