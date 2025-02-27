import { clientReviews } from "../constant"

const Client = () => {
  return (
    <section className="my-20 sm:px-10 px-5">
    <h3 className="sm:text-4xl text-3xl font-semibold text-gray_gradient">Hear From My Client</h3>
     
     <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
        {clientReviews.map((item) => (
           <div key={item.id} className="rounded-lg md:p-10 p-5 col-span-1 bg-[#1C1C21] bg-opacity-50">
              <div>
                 <p className="text-white font-light">{item.review}</p>
                 <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
                     <div className="flex gap-3">
                         <img src={item.img} className="w-12 h-12 rounded-full" alt={item.name}/>
                         <div className="flex flex-col">
                            <p className="font-semibold text-[#AFB0B6]">{item.name}</p>
                            <p className="text-[#62646C] md:text-base text-sm">{item.position}</p>
                         </div>
                        </div>
                        <div className="flex self-end items-center gap-2">
                          {Array.from({length: 5}).map((_, index) => (
                             <img key={index} src="/assets/star.png" className="w-5 h-5 "/>
                          ))}
                       </div>
                 </div>
                 
              </div>
           </div>   
        ))}
     </div>
    </section>
  )
}

export default Client