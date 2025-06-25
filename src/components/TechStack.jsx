import { techStackImgs } from '../constant'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
 import { ScrollTrigger } from 'gsap/ScrollTrigger'

 const TechStack = () => {

  const cardRef = useRef([])
  gsap.registerPlugin(ScrollTrigger)
  
       const handleMouseMove = (index) => (e) => {
            const card = cardRef.current[index]
            if(!card) return 
  
             const rect = card?.getBoundingClientRect()
             const mouseX = e.clientX - rect.left - rect.width / 2
  
             const mouseY = e.clientY - rect.top - rect.height / 2
  
             let angle = Math.atan2(mouseY, mouseX)  * (180 /Math.PI)
  
             angle = (angle + 360) % 360
  
             card.style.setProperty('--start', angle + 60)
       }

       useGSAP(() => {
         gsap.fromTo('.tech', {
                     opacity: 0
                 },
                 {
                   opacity: 1,
                   duration: 0.5,
                    stagger: 0.5
                 }
        )
       })


   return (
     <section className='w-full padding-x-lg my-10 sm:my-20 '>
         <div className='grid  grid-cols-[repeat(auto-fill,minmax(200px,1fr))] ' >
           {techStackImgs.map((techStack, index) => (
             <div className='ring-5 ring-[#1C1C21] bg-[#0E0E10] h-[10rem] rounded-sm flex items-center justify-center flex-col gap-2 card tech' 
              ref={(el) => (cardRef.current[index] = el)} onMouseMove={handleMouseMove(index)} key={index}
             >
                 <img src={techStack.imgPath} alt={techStack.name} className='size-20 object-contain'/>
                 <p>{techStack.name}</p>
             </div>
           ))}
         </div>
     </section>
   )
 }
 
 export default TechStack