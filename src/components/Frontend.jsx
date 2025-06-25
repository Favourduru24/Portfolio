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
            <p className='sm:text-4xl text-3xl font-semibold  bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent mb-5'>Frontend App</p>
               <div className='showcaselayout'>
                   <div className='first-project-wrapper' ref={project1Ref}>
                    <a  href="https://apple-clone-iota-eight.vercel.app" target='_blank' rel='noreferrer'>
                       <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg'>
                           <img src='/assets/project3.png' alt="ride"/> 
                       </div>
                       </a>
                       <div className='space-y-5 mt-5'>
                        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Apple-Clone is a visually striking iPhone landing page created to highlight my frontend development skills. </h2>
                        <p className='text-white-50 md:text-xl'>An App built with react, tailwind css, three.js and Gsap for a fast, user-friendly experiecnce. </p>
                       </div>
                       {/* Built with the latest frontend technologies, it highlights my ability to create high-performance, engaging, and visually appealing web designs */}
                   </div>
                      <div className='project-list-wrapper overflow-hidden'>
                            <div className='project' ref={project2Ref}>
                              <a  href="https://gamify-web-ten.vercel.app" target='_blank' rel='noreferrer'>
                              <div className='image-wrapper border-[0.5px] border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50'>
                               <img src='/assets/project1.png'/>
                              </div>
                              </a>
                              <h2>Gamify - A sleek langing page.</h2>
                            </div>

                            <div className='project' ref={project3Ref}>
                              <a  href="https://nike-landing-page-nine-tau.vercel.app" target='_blank' rel='noreferrer'>
                               <div className='image-wrapper border-[0.5px] border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50'>
                               <img src='/assets/project6.png'/>
                              </div>
                              </a>
                              <h2>Nike Landing Page.</h2>
                            </div>
                      </div>
               </div>
          </div>
    </section>
  )
}

export default Project