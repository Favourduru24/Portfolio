import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Backend = () => {

  gsap.registerPlugin(ScrollTrigger)

  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)
  const notifyModalRef = useRef(null)

  const [open, setOpen] = useState(false)

 const handleOpenModal = () => {
    setOpen(true)

     setTimeout(() => {
             setOpen(false)
    }, 9000)
 }

 useEffect(() => {

     const handleClose = (e) => {
      if(notifyModalRef.current && !notifyModalRef.current.contains(e.target.value)) {
      setOpen(false)
    }
     }

   document.addEventListener('mousedown', handleClose)

   return () => {
     document.removeEventListener('mousedown', handleClose)
   }
 }, [])

 
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

          {open && 
          (<div className="fixed inset-0 bg-black/10 z-50">
          <div className="w-72 h-20 rounded-md absolute bottom-5 right-2 bg-white flex flex-col p-1 gap-2" ref={notifyModalRef}>
              <p className='text-black text-center font-semibold font-sans'> Sorry, This project is still on development &#128562;</p> 
              <p className='text-xs text-green-500 text-center font-semibold'>Will be completed <span className="text-red-500">Feb 2nd 2026</span></p> 
          </div>
          </div>
          )
          }

          <div className='w-full'>
            <p className='sm:text-4xl text-3xl font-semibold  bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent mb-5'>Advance Full Stack Project</p>
               <div className='showcaselayout'>
                   <div className='first-project-wrapper cursor-pointer' ref={project1Ref} >
                        
                         
                       <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10] p-1'>
                       <a  href="https://chat-sphere-frontend-3ae4.vercel.app" target='_blank' rel='noreferrer'>
                       <video src={`/assets/tech2.mp4`} autoPlay preload="auto"
                  muted className={`w-full h-full md:rounded-lg`}/>
                       </a>
                       </div>
                       
                       <div className='text-content'>
                      <h2>Taskloom: An AI-Powered Relationship & Task Management Platform</h2>

                      <p className='text-white-50 md:text-xl leading-8'>
                        Taskloom is a modern relationship management platform designed to help
                        individuals and teams organize contacts, manage follow-ups, and maintain
                        meaningful relationships. It combines task management, reminders,
                        real-time collaboration, and AI-powered relationship memory in one
                        workspace.
                        
                        Users can securely manage their workspaces, contacts, tasks, and
                        follow-ups while receiving automated reminders for important
                        relationships. Real-time updates are powered by Socket.IO, allowing
                        collaborators to see task and workspace activity instantly. AI
                        integrations help users maintain context about their relationships
                        without manually remembering every interaction.
                      </p>

                      <p className='text-white-50 md:text-xl'>
                        Tech Stack: Next.js | NestJS | TypeScript | PostgreSQL | Prisma | Redis |
                        Socket.IO | Google Gemini | JWT | Docker | Vercel | Render
                      </p>
                    </div>
                   </div>
                      <div className='project-list-wrapper overflow-hidden'>
                            <div className='project' ref={project2Ref}>
                              {/* <a  href="https://project4-nine-delta.vercel.app" target='_blank' rel='noreferrer'> */}
                              <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50 cursor-pointer'>
                               <img src='/assets/project12.png' onClick={handleOpenModal}/>
                              </div>
                              {/* </a> */}
                              <h2>Fabric lab: Canva-inspired design.</h2>
                            </div>

                            <div className='project'>
                            <a  href="https://chat-sphere-frontend-3ae4.vercel.app" target='_blank' rel='noreferrer'>
                              <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50 cursor-pointer'>
                               <img src='/assets/project14.png'/>
                              </div>
                              </a>
                              <h2>ChatSphere: A Real-Time Messaging Platform with AI Integration</h2>
                            </div>

                            {/* <div className='project'>
                            <a  href="https://travel-tour-bay.vercel.app" target='_blank' rel='noreferrer'>
                              <div className='image-wrapper border-2 border-[#1C1C21] bg-[#0E0E10] bg-opacity-50 cursor-pointer'>
                               <img src='/assets/project5.png'/>
                              </div>
                              </a>
                              <h2>Travel Tour Landing Page</h2>
                            </div> */}
                      </div>
               </div>
          </div>
    </section>
  )
}

export default Backend