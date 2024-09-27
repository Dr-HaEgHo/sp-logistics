import React from 'react'
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import Image from 'next/image';



const ImageSlider = () => {
  return (
      <div className='bg-yellow-300 h-full flex' >
        <div className='w-full h-full' >
            <Image 
                src={require('../assets/images/sideImage.png')}
                alt='stacfx.com'
                className='w-full h-full object-cover'
            />
        </div>
    </div>
  )
}

export default ImageSlider