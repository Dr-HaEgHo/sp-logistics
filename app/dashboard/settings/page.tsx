'use client'
// import Profile from '@/components/settings/Profile'
// import Security from '@/components/settings/Security'
import React, { useState } from 'react'

const tabs = [
  { id: 1, title: "Profile", total: 0, },
  { id: 2, title: "Security", total: 0, },
  
]

const Page = () => {

  const [index, setIndex] = useState(0)

  const handleSetTab = (idx: number) => {
    setIndex(idx)
  }

  return (
    <div className='w-full min-h-full bg-white ' >
      <div className='dash-container' >
        <div className="w-full pt-[26px] 2xl:pt-[34px] ">

          {/* TOP WITH HEADER DESCRIPTIONS */}
          <div className='flex flex-col items-start gap-[8px] 2xl:gap-3 pb-[26px] 2xl:pb-[34px]' >
            <h3 className='text-lg 2xl:text-xl text-headDesc ' >Profile</h3>
          </div>


          {/* TABS SYSTEM */}
          <div className='w-full  ' >
            <ul className='flex w-fit items-center' >
              {
                tabs && tabs.map((item, idx) => (
                  <li
                    onClick={() => { handleSetTab(idx) }}
                    style={{
                      color: idx === index ? "#161C51" : "#1A1A1A"
                    }}
                    className='cursor-pointer w-[140px] flex items-center justify-center text-[12px] 2xl:text-[14px] text-headDesc p-[6px] hover:bg-inputBg transition duration-300 rounded'
                  >
                    {item.title}
                  </li>
                ))
              }
            </ul>

            <div className='h-[1px] bg-greytxt w-full relative'>
              <div
                style={{
                  left: 140 * index
                }}
                className='absolute top-1/2 transform -translate-y-1/2 w-[140px] h-2 bg-primary2 transition duration-300' />
            </div>
          </div>


          {/* <div className='w-[362px] mt-[40px]' >
            {index === 0 && <Profile />}
            {index === 1 && <Security />}
          </div> */}




          <div className='h-8' />
        </div>
      </div>
    </div>
  )
}

export default Page