import React from 'react'

const TableShimmerLoader = () => {
  return (
    <div className='animate-pulse w-full flex flex-col mt-4 px-4 mb-4' >
          <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
          <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
          <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
          <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
          <div className="h-10 bg-gray-200 rounded-lg  w-full mb-2"></div>
          <div className="h-10 bg-gray-200 rounded-lg  w-full"></div>
      </div>
  )
}

export default TableShimmerLoader;