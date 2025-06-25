import  { useState } from 'react'
import emailjs from '@emailjs/browser'
import ContactExperience from './ContactExperience';

const  Contact = () => {

   const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
   const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
   const PUBLIC_SECRET = import.meta.env.VITE_PUBLIC_ID;
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
    <section className='w-full mt-20 px-5 md:px-20 py-10 md:py-20 h-full ' id='contact'>
         <div className='grid-12-cols gap-2 '>
           <div className='lg:col-span-6 col-span-12 min-h-96 sm:p-10 p-5 '>
                <div className='flex gap-2 justify-center items-center'>
                  <form className='flex gap-5 w-full flex-col max-w-4xl' onSubmit={handleSubmit}>
                     <input type='text' name='name' value={form.name} onChange={handleChange} required className='w-full px-5 py-2 h-14 rounded-lg text-md text-[#E4E4E6] border-2 border-[#1C1C21] bg-[#0E0E10] focus:outline-none  placeholder:text-sm focus:ring-1 focus:ring-[#3A3A49] focus:outline-none transition-all' placeholder='Full Name'/>
                     
                     <input type='email' name='email' value={form.email} onChange={handleChange} required className='w-full px-5 py-2 h-14 rounded-lg text-lg text-[#E4E4E6] border-2 border-[#1C1C21] bg-[#0E0E10] focus:outline-none  placeholder:text-sm focus:ring-1 focus:ring-[#3A3A49] focus:outline-none transition-all' placeholder='Email Address'/>

                     <textarea type='message' name='message' value={form.message} onChange={handleChange} required rows={5} className='w-full px-5 py-2 h-42 rounded-lg placeholder:text-[#3A3A49] placeholder:text-md text-lg text-[#E4E4E6] border-2 border-[#1C1C21] bg-[#0E0E10] focus:outline-none placeholder:truncate focus:ring-1 focus:ring-[#3A3A49] focus:outline-none transition-all' placeholder='Hi, I have a job for you....'/>

                     <button className='bg-[#3A3A49] px-10 py-2 min-h-12 rounded-lg shadow-[#0E0E10] shadow-2xl flex justify-center items-center text-lg text-white gap-3 cursor-pointer font-semibold w-full' type='submit' disabled={loading}>{loading ? 'Sending...' : 'Message me'}
                  <img src='/assets/arrow-up.png' alt='arrow-up' className='w-2.5 h-2.5 object-contain invert brightness-0'/>
               </button>
                  </form>
                </div>
           </div>
           <div className='lg:col-span-6 col-span-12 min-h-96 sm:p-10 p-5 border-2 border-[#1C1C21] rounded-xl '>
              <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              {/* <ContactExperience /> */}
              <ContactExperience/>
            </div>
           </div>
         </div>
    </section>
  )
}

export default Contact


 