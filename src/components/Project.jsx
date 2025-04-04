import React, { useState } from 'react'
import {myProjects } from '../constant'
import ToggleText from './ToggleText'

const projectCount = myProjects.length

const Progress = () => {
   
    const [selectProjectIndex, setSelectProjectIndex] = useState(0)



    const currentProject = myProjects[selectProjectIndex]


    const handleNavigation = (direction) => {
       setSelectProjectIndex((prevIndex) => {
         if(direction === 'previous') {
             return prevIndex === 0 ? projectCount - 1 : prevIndex - 1
         } else{
             return prevIndex === projectCount -1 ? 0 : prevIndex + 1
         }
       })
    }

  return (
    <section className='sm:px-10 px-5 my-20 relative' id='work'>
        <p className='sm:text-4xl text-3xl font-semibold  bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>My Work</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
       <div className='flex flex-col gap-5 sm:py-12 px-5 shadow-2xl shadow-[#0E0E10] border border-[#1C1C21] rounded-lg justify-center py-5 sm:max-h-[120vh] max-sm:h-fit'>
         
    <div className='absolute top-[5.3rem] left-0 -z-10'>
    <img src={currentProject.spotlight} alt='spotlight' className='w-full h-full object-cover rounded-xl'/>
    </div>
     <div className='flex flex-col gap-5 text-[#AFB0B6] my-5'>
    <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
         <ToggleText description={currentProject.desc}/>
       <p className='animatedText max-h-10'>{currentProject.subdesc}</p>
     </div>
       
       <div className='sm:flex items-cente justify-between max-sm:flex-col gap-10 mt-24'>
           <div className='flex items-center gap-3 '>
              {currentProject.tags.map((tag, index) => (
                 <div key={index} className='w-10 h-10 rounded-md p-2 bg-neutral-100 bg-opacity-10 backdrop-filter backdrop-blur-lg flex justify-center items-center'>
                    <img src={tag.path} alt={tag.name} />
                 </div>
              ))}
           </div>
            <a className='flex items-center gap-2 cursor-pointer text-[#AFB0B6] underline' href={currentProject.href} target='_blank' rel='noreferrer'>
                <p >Check Live Site</p>
                 <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3'/>
            </a>
       </div>
         
         <div className='flex justify-between items-center mt-7 '>
             <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient' onClick={() => handleNavigation('previous')}>
                <img src='/assets/left-arrow.png' alt='left arrow' className='w-4 h-4'/>
             </button>

             <button className='w-10 h-10 p-3 cursor-pointer active:scale-95 transition-all rounded-full arrow-gradient' onClick={() => handleNavigation('next')}>
                <img src='/assets/right-arrow.png' alt='right arrow' className='w-4 h-4'/>
             </button>
         </div>
       </div>
         <div className='border-2 border-[#1C1C21] bg-[#0E0E10] rounded-lg max-h-[120vh] w-full p-2 relative'>
            <img src={currentProject.images} className='w-full h-full  cursor-pointer rounded-sm'/>
        </div>
        </div>
    </section>
  )
}

export default Progress