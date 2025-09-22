import React from 'react'
import imgerror from "./../../public/slider/images (1).jpeg"
import imgerror2 from "./../../public/slider/images (3).jpeg"

import Image from 'next/image'
const Errorpage = () => {
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen  bg-gray-50">
           <Image  src={imgerror2} alt="photo "className='w-full md:w-[30%] mx-auto text-center rounded rounded-5xl' />

        </div>
      
    </div>
  )
}

export default Errorpage

// import React from 'react'
// import imgerror from "./../../public/slider/images (1).jpeg"
// import Image from 'next/image'

// const Errorpage = () => {
//   return (
//     <div className="flex justify-center items-center  bg-gray-50">
//       {/* w-[80%] للتحكم في العرض وrounded-lg للزوايا */}
//       <Image 
//         src={imgerror} 
//         alt="photo" 
//         className="w-[80%] md:w-[50%] rounded-lg shadow-lg object-cover"
        
//       />
//     </div>
//   )
// }

// export default Errorpage
