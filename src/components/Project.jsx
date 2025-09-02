import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Project = () => {

  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

 
   useGSAP(() => {

     const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

    projects.forEach((card, index) => {
      gsap.fromTo(
         card,
         {
            y: 50, opacity: 0
         },
         {
           y: 0,
           opacity: 1,
           duration: 1,
           delay: 0.3 * (index + 1),
            scrollTrigger: {
               trigger: card,
               start: 'top bottom 100' 
            }
         }
      )  
  })

    gsap.fromTo(sectionRef.current, 
      {
      opacity: 0
    },
     {
      opacity: 1,
      duration: 1.5
     })   
  }, [])
  

  return (
    <section id='work' className='app-showcase' ref={sectionRef}>
          <div className='w-full'>
            <p className='sm:text-4xl text-3xl font-semibold  bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent mb-5'>Full Stack App</p>
               <div className='showcaselayout'>
                   <div className='first-project-wrapper' ref={project1Ref}>
                    <a  href="https://ed-tech-frontend-e8zm.vercel.app" target='_blank' rel='noreferrer'>
                       <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10]'>
                           <img src='/assets/project10.png' alt="ride"/> 
                       </div>
                       </a>
                       
                       <div className='text-content'>
                        <h2>Ed-Tech: An Ai Tutor Learning platform that help student learn and prep for Exams making learning fun and exicting</h2>
                        <p className='text-white-50 md:text-xl'>An App built with Next.js for SEO-friendly and server-side rendering Redux Rtk Query for state management, Tailwind for styling, Chart.js to track user monthly progress, user image are uploaded to Cloudinary I used MongoDB to store user data Node and Express to optimizing backend efficiency shandcn ui, Gemini Ai to generate quiz question handy tool like Vapi for Ai voice and lot more. </p>
                       </div>
                   </div>
                      <div className='project-list-wrapper overflow-hidden'>
                            <div className='project' ref={project2Ref}>
                              <a  href="https://project4-q7e7.onrender.com" target='_blank' rel='noreferrer'>
                              <div className='image-wrapper border-[0.5px] border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50'>
                               <img src='/assets/project7.png'/>
                              </div>
                              </a>
                              <h2>Event Management Platform.</h2>
                            </div>

                            <div className='project' ref={project3Ref}>
                            <a  href="https://travel-tour-bay.vercel.app" target='_blank' rel='noreferrer'>
                              <div className='image-wrapper border-[0.5px] border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50'>
                               <img src='/assets/project5.png'/>
                              </div>
                              </a>
                              <h2>Travel tour Landing Page.</h2>
                            </div>
                      </div>
               </div>
          </div>
    </section>
  )
}

export default Project