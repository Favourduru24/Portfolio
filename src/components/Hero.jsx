import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative ' id="home">
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3'>
          <p className='sm:text-3xl text-xl font-medium text-center text-white'>Hello, I am Pristine <span className='waving-hand'>&#128526;</span></p>
          <p className='text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>Building Start Up & Brands</p>
        </div>
          
          <div className='w-full h-full absolute inset-0'>
                
          </div>
    </section>
  )
}

export default Hero