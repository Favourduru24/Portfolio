import { useState } from "react"

const ToggleText = ({description}) => {
     const [showMore, setShowMore] = useState(false)

      const handleShowMore = () => {
        setShowMore(true)
      }
       
      const handleShowLess = () => {
        setShowMore(false)
      }
        
    //   if(!description) return <p className="animatedText font-semibold text-center my-1">No desc Yet</p>
      const shortenDescription = description?.slice(0, 200) + '....'
      
  return (
    <div>
      {showMore ? (
        <div>{description}
         <button onClick={handleShowLess} className="underline text-[#2f71fd] cursor-pointer">.Show Less</button>
        </div>
      ) : (
        <div>
           {shortenDescription}
            <button onClick={handleShowMore} className="underline text-[#2f71fd] cursor-pointer">Show More</button>
        </div>
      )}
    </div>
  )
}

export default ToggleText