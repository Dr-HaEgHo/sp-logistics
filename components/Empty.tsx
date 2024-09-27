import Image from 'next/image'
import React from 'react'

const EmptyCourse = () => {

    const routeCourses = () => {
        
    }

  return (
      <div className='w-full h-[70vh] flex flex-col items-center justify-center' >
          <Image 
              src={require('../assets/images/empty1.png')}
              alt='onebot.com'
              className='w-[200px] 2xl:w-[255px]'
          />

          <div className='flex flex-col items-center'>
              <p className='text-[13px] 2xl:text-[15px] text-center mt-6 mb-3 2xl:mt-6 2xl:mb-3' >You've not started any course yet</p>
              <button onClick={routeCourses} className=' w-fit buttons-2 flex items-center justify-center gap-[10px]' >  
                  <Image 
                      src={require('../assets/icons/addplus.png')}
                      alt='onebot.com'
                      className='w-[24px]'

                  />
                  <p className='text-[13px] 2xl:text-[15px] font-[300]' >Start new course</p>
              </button>
          </div>
    </div>
  )
}

export default EmptyCourse