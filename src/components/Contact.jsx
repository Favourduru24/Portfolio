import  { useState } from 'react'
import emailjs from '@emailjs/browser'

const  Contact = () => {

   const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
   const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
   const PUBLIC_SECRET = import.meta.env.VITE_PUBLIC_SECRET;
   const USER_NAME = import.meta.env.VITE_USER_NAME;
   const USER_EMAIL = import.meta.env.VITE_EMAIL_ADDRESS;


    
        const [form, setForm] = useState({
            name: '',
            email: '',
            message: ''
        })
         const [loading, setLoading] = useState()
    
        const handleChange = ({target: {name, value}}) => {
           setForm({...form, [name]: value})
        }
    
        const handleSubmit = async(e) => {
          e.preventDefault()

          setLoading(true)
          try {
           await emailjs.send(
               SERVICE_ID,
               TEMPLATE_ID,
               {
               from_name: form.name,
               to_name: USER_NAME, 
               from_email: form.email,
               to_email:USER_EMAIL,
                message: form.message},
                  PUBLIC_SECRET
               ) 
                 setLoading(false)

                 alert('Your message has been sent!')

                  setForm({
                     name:'',
                     email:'',
                     message:'',
                  })

            } catch (error) {
             setLoading(false)
             console.log(error);
             alert('Something went wrong')
          }

        }

  return (
    <section className='sm:px-10 px-5 my-20 min-h-screen p-1' id='contact'>
         <div className='grid grid-cols-2 border-2 border-[#1C1C21] rounded-xl p-2 max-lg:grid-cols-1'>
         <div className='col-span-2 relative w-full h-[110vh] max-lg:col-span-1'>
            <img src='/assets/globe.jpg' alt='globe/img' className='w-full h-full object-cover max-lg:hidden'/>
             <div className='flex flex-col h-full  absolute top-0 w-[50%] justify-center left-10 max-lg:hidden'>
               <p className='text-white text-[11px] bg-[#1C1C21] p-[1px] w-20 text-center rounded-full font-serif'>Solutions</p>
              <div className='my-5 gap-3 flex flex-col'>
                <p className='sm:text-4xl text-2xl bg-clip-text text-white leading-12 font-thin font-serif'>Grow Your <span className='text-[#3A3A49]'>Business - </span><br/>
                      Send me a Message</p>
                <p className='text-[12px] text-white max-w-sm leading-5 my-5 font-serif'>Wheather you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>

                 <div className='flex items-center my-5 gap-2 '>
                     <div className='w-10 h-10 bg-[#1C1C21] p-2 rounded-lg'>
                          <img src='/assets/review1.png'/>
                        </div>  
                         <div className='flex justify-evenly flex-col'>
                            <p className='text-sm text-[#D5D8EA] font-serif'>Duru Pristine</p>
                             <p className='text-sm text-[#3A3A49] font-serif'>durupristine@gmail.com </p>
                              <div className='flex items-center max-w-40 h-[2px]'>
                                  <div className='bg-white w-full h-full'></div>
                                  <div className='bg-[#3A3A49] w-full h-full'></div>
                              </div>
                         </div>
                 </div>
              </div>
             </div>
         <div className='bg-[#1C1C21] border-[#1C1C21]  min-h-[110vh] rounded-l-2xl absolute top-0 right-0 w-[50%] max-lg:w-full flex flex-col backdrop-blur-3xl items-center justify-center p-1'>
         <form  onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7 px-10 '>
              <div className='flex justify-between items-center gap-2'>
              <label className='space-'>
           <span className='text-md text-white/50 pl-1 leading-10  font-semibold font-serif'>Full Name</span>
            <input type='text' name='name' value={form.name} onChange={handleChange} required className='w-full bg-black/30 px-5 py-2 min-h-14 rounded-lg text-lg text-[#E4E4E6] shadow-black-200 shadow-2xl focus:outline-none placeholder:text-[#3A3A49] placeholder:text-md' placeholder='John Doe'/>
           </label>
              <label className='space-y-3'>
           <span className='text-md text-white/50 pl-1 leading-10 font-semibold font-serif'>Email</span>
            <input type='email' name='email' value={form.email} onChange={handleChange} required className='w-full bg-black/30 px-5 py-2 min-h-14 rounded-lg placeholder:text-[#3A3A49] placeholder:text-md text-lg text-[#E4E4E6] shadow-black-200 shadow-2xl focus:outline-none placeholder:truncate' placeholder='johndoe@gmail.com'/>
           </label>
           </div>
              <label className='space-y-3 '>
           <span className='text-md text-white/50 leading-10  font-semibold font-serif'>Send Your Message.</span>
            <textarea type='message' name='message' value={form.message} onChange={handleChange} required rows={5} className='w-full bg-black/30 px-5 py-2 min-h-14 rounded-lg placeholder:text-[#3A3A49] placeholder:text-md text-lg text-[#E4E4E6] shadow-black-200 shadow-2xl focus:outline-none placeholder:truncate' placeholder='Hi, I have a job for you....'/>
            </label>

              <button className='bg-[#3A3A49] px-10 py-2 min-h-12 rounded-lg shadow-[#0E0E10] shadow-2xl flex justify-center items-center text-lg text-white gap-3 cursor-pointer font-semibold whitespace-nowrap' type='submit' disabled={loading}>{loading ? 'Sending...' : 'Message me'}
                 <img src='/assets/arrow-up.png' alt='arrow-up' className='w-2.5 h-2.5 object-contain invert brightness-0'/>
              </button>
              </form>
         </div>
         </div>

         </div>
    </section>
  )
}

export default Contact