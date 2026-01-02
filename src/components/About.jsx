import React, { useState, useRef } from 'react'
import Button from './Button'
import Globe from 'react-globe.gl'

const About = () => {

  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
   navigator.clipboard.writeText('durupristine@gmail.com')

    setHasCopied(true)

    setTimeout( () => {
   setHasCopied(false)
    },2000)
  }


  

  return (
    <section className='sm:px-10 px-5 my-20' id='about'>

     <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
     <div className='col-span-1 xl:row-span-3 ' >
      
     <div className='w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
      <img src={'/assets/grid1.png'} alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
       <div>
        <p className='text-xl font-semibold mb-2 text-white font-generalsans'>Hi I'm Pristine</p>
        <p className='text-[#afb0b6] text-base font-generalsans text-justify'>With 4+ years of hands-on experience, I specialize in building end-to-end web systems, from frontend UX to backend architecture, AI integrations, payments, and production deployment
          
      I don’t just build features; I design how systems behave under real users, real data, and real traffic.</p>
       </div>
       </div>
       </div>
       <div className='col-span-1 xl:row-span-3 '>
         <div className='w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
          <img src={'/assets/grid2.png'} alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain'/>
           <div>
             <p className='text-xl font-semibold mb-2 text-white font-generalsans'>Tech Stack</p>
             <p className='text-[#afb0b6] text-base font-generalsans text-justify'>My tech stack includes the <span className='text-white-50 font-semibold leading-8'>MERN stack, Postgresql, TypeScript, Zustand, Redux RTK Query, Rest Api, Redis and Graphql Git & Github Docker, Next.js with Next Auth and Jwt Auth, </span>for authentication. 🤝Websocket <span className='text-white-50 font-semibold'>Prometheus and Grafana</span> for monitoring, styling with <span className='text-white-50 font-semibold'>Tailwind CSS and Gsap</span> for building dynamic and scalable applications.</p>
           </div>
         </div>
       </div>
         <div className='col-span-1 xl:row-span-4 '>
           <div className='w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
         <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center z-20'>
         {/* <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'HI There', color: 'white', size: 15 }]}
              /> */}
            </div>
            <div> 
              <p className='text-xl font-semibold mb-2 text-white font-generalsans'>I work remotely across most timezone.</p>
              <p className='text-[#afb0b6] text-base font-generalsans leading-8'>I'm based in Nigeria with remote work available. ✈️ Open to travel with accommodation.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
            </div>
           </div>
         </div>
         <div className='xl:col-span-2 xl:row-span-3 '>
                <div className='w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                  <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
                   <div>
                      <p className='text-xl font-semibold mb-2 text-white font-generalsans'>My Passion for Coding</p>
                      <p className='text-[#afb0b6] text-base font-generalsans text-justify leading-8'>I’m driven by solving real problems with well-designed systems. For me, coding isn’t just about writing logic — it’s about: 🛡️ making systems predictable ⚠️ designing for failure 📈 optimizing for scale 🌐 building software people can rely on</p>
                   </div>
                </div>
            </div>
              <div className='xl:col-span-1 xl:row-span-2 '>
              <div className='w-full h-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                  <img src='/assets/grid4.png' alt='grid-4' className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top '/>
                   <div className='space-y-2'>
                    <p className='text-[#afb0b6] text-base font-generalsans text-center'>Contact me</p>
                     <div className='cursor-pointer flex justify-center items-center gap-2' onClick={handleCopy}>
                      <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt='copy'/>
                       <p className='text-xl font-medium  bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent text-whit'>durupristine@gmail.com</p>
                     </div>
                   </div>
              </div>
              </div>
     </div>
    </section>
  )
}

export default About