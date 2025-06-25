import React from 'react'

const Footer = () => {
  return (
    <footer className='sm:px-10 px-5 pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5'>
      <div className='text-[#62646C] flex gap-2'>
  <p>Terms and Conditions</p>
  <p>|</p>
  <p>Pravacy & Policy</p>
      </div>
        <div className='flex gap-3 group relative justify-center'>
       <a href='https://github.com/Favourduru24' rel='noreferrer' target='_blank'>
       <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10] '>
           <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2 cursor-pointer'/>
           <span className='w-fit whitespace-nowrap hidden bottom-14 absolute z-30 group-hover:flex text-sm text-white/100 bg-gray-700 rounded-sm shadow-md text-center font-sans p-1'>github Account</span>
       </div>
        </a>

       {/* <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]'>
           <img src='/assets/twitter.svg' alt='twitter' className='w-1/2 h-1/2'/>
       </div>
       <div className='w-12 h-12 rounded-full flex justify-center items-center bg-[#1C1C21] border border-[#0E0E10]'>
           <img src='/assets/instagram.svg' alt='instagram' className='w-1/2 h-1/2'/>
       </div> */}
        </div>
         <p className='text-[#62646C]'>&copy; 2025 Pristine. All rights reservered.</p>
    </footer>
  )
}

export default Footer