import React, { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef()

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
     const [loading, setLoading] = useState()

    const handleChange = ({target: {name, value}}) => {
       setForm({...form, [name]: value})
    }

    const handleSubmit = () => {}

  return (
    <section className='sm:px-5 px-5 my-20' id='contact'>
         <div className='relative min-h-screeN flex flex-col '>
            <img src='/assets/terminal.png' alt='terminal background' className='relative inset-0 h-[60rem] pt-10'/>
            <div className='max-w-xl absolute z-10 sm:px-10 px-5 bottom-10 p-2 rounded-md sm:left-10 w-fit'>
          <h3 className='sm:text-4xl text-3xl font-semibold  bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>Send To My Email</h3>
             <p className='text-md text-[#AFB0B6] mt-3 leading-7'>Wheather you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>

              <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
              <label className='space-y-3'>
           <span className='text-lg text-[#AFB0B6] leading-10'>Full Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} required className='w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-black-200 shadow-2xl focus:outline-none ' placeholder='John Doe'/>
           </label>
              <label className='space-y-3'>
           <span className='text-lg text-[#AFB0B6] leading-10'>Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} required className='w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-black-200 shadow-2xl focus:outline-none' placeholder='johndoe@gmail.com'/>
           </label>
              <label className='space-y-3'>
           <span className='text-lg text-[#AFB0B6] leading-10'>Send Your Message.</span>
            <textarea type='message' name='message' value={form.message} onChange={handleChange} required rows={5} className='w-full bg-[#1C1C21] px-5 py-2 min-h-14 rounded-lg placeholder:text-[#62646C] text-lg text-[#E4E4E6] shadow-black-200 shadow-2xl focus:outline-none' placeholder='Hi, I have a job for you....'/>
            </label>
              <button className='bg-[#3A3A49] px-5 py-2 min-h-12 rounded-lg shadow-[#0E0E10] shadow-2xl flex justify-center items-center text-lg text-white gap-3 cursor-pointer' type='submit' disabled={loading}>{loading ? 'Sending...' : 'Send Message'}
                 <img src='/assets/arrow-up.png' alt='arrow-up' className='w-2.5 h-2.5 object-contain invert brightness-0'/>
              </button>
              </form>
            </div>
       </div>
    </section>
  )
}

export default Contact