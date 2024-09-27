import React from 'react'

const CardLoader = () => {
    return (
        <div className="animate-pulse w-full mt-8 px-4 mb-4 gridd gap-[18px] 2xl:gap-[24px]">
            <div className="aspect-[1.6] bg-gray-200 rounded-xl w-full mb-2"></div>
            <div className="aspect-[1.6] bg-gray-200 rounded-xl w-full mb-2"></div>
            <div className="aspect-[1.6] bg-gray-200 rounded-xl w-full mb-2"></div>
            {/* <div className="aspect-[1.4] bg-gray-200 rounded-lg  w-full mb-2"></div>
            <div className="aspect-[1.4] bg-gray-200 rounded-lg  w-full mb-2"></div>
            <div className="aspect-[1.4] bg-gray-200 rounded-lg  w-full"></div> */}
        </div>
    )
}

export default CardLoader;