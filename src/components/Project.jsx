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
                    <a  href="https://travisto-u4ac.vercel.app/dashboard" target='_blank' rel='noreferrer'>
                       <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10]'>
                           <img src='/assets/travisto1.png' alt="ride"/> 
                       </div>
                       </a>
                       
                       <div className='text-content'>
                        <h2>Travisto: A production-ready, AI-driven travel planning platform that generates personalized trips using structured AI workflows, role-based access control, and secure payments.</h2>
                        <p className='text-white-50 md:text-xl'>Built with Next.js and NestJS, the platform uses Google Gemini AI to generate structured, preference-aware itineraries, with destination images automated via Unsplash and optimized using Cloudinary.

                          The backend, powered by Prisma and PostgreSQL, includes role-based Google OAuth, Stripe payments, and efficient pagination, while an admin dashboard visualizes user growth, trip activity, and popular travel styles.

                          The application is Dockerized and deployed through GitHub Actions CI/CD for reliable, production-ready delivery.</p>
                       </div>
                   </div>
                      <div className='project-list-wrapper overflow-hidden'>
                            <div className='project' ref={project2Ref}>
                              <a  href="https://project4-q7e7.onrender.com" target='_blank' rel='noreferrer'>
                              <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50'>
                               <img src='/assets/project7.png'/>
                              </div>
                              </a>
                              <h2>Event Management Platform.</h2>
                            </div>

                            <div className='project' ref={project3Ref}>
                            <a  href="https://ed-tech-frontend-e8zm.vercel.app" target='_blank' rel='noreferrer'>
                              <div className='xl:h-[50vh] md:h-[50vh] h-96 relative w-full border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg'>
                                <video src={`/assets/tech.mp4`} autoPlay preload="auto"
                  muted className={`w-full h-full md:rounded-lg`}/>
                              </div>
                              </a>
                              <h2>AI Tutor Platform (EdTech SaaS) – Full-stack AI-powered learning platform with dynamic quizzes, voice tutoring, user analytics, and secure authentication.</h2>
                            </div>
                      </div>
               </div>
          </div>
    </section>
  )
}

export default Project