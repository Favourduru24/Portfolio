import { useState } from "react"

const ToggleText = ({description}) => {
     const [showMore, setShowMore] = useState(false)

      const handleShowMore = () => {
        setShowMore(true)
      }
       
      const handleShowLess = () => {
        setShowMore(false)
      }
        
      const shortenDescription = description?.slice(0, 200) + '....'
      
  return (
    <div>
      {showMore ? (
        <div className="sm:max-h-52">{description}
         <button onClick={handleShowLess} className="underline text-[#2f71fd] cursor-pointer">.Show Less</button>
        </div>
      ) : (
        <div className="max-h-52">
           {shortenDescription}
            <button onClick={handleShowMore} className="underline text-[#2f71fd] cursor-pointer">Show More</button>
        </div>
      )}
    </div>
  )
}

export default ToggleText