'use client';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { GlobalContext } from '@/context/context';
import React, { useContext } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {

    const { mainSidebarOpen } = useContext(GlobalContext);

    return (
        <div
         style={{
            left: mainSidebarOpen === true ? 0 : -292
         }}
         className='w-full flex items-start h-screen bg-mainBg'>

            <div className={`fixed lg:sticky top-0 flex flex-1 h-full max-w-[292px] z-[999999999999] dash-shadow`}>
                <Sidebar /> 
            </div>
            <div className="h-full flex flex-[4] flex-col">

                {/* NAVBAR COMPONENT */}
                <div className='w-full bg-white sticky top-0 z-[999]'>
                    <Navbar />
                </div>

                {/* EACH PAGE ROUTED TO FROM THE FILE STRUCTURE */}
                <div className='h-full w-full scroll-2 py-4 px-5'>
                    <div className='w-full h-fit min-h-[872px] bg-white rounded relative p-10'>
                        <div className='bg-sec700 w-2 h-[17px] absolute left-0 top-[46px]'/>
                        {children}
                        {/* <div className='h-[600px]'></div> */}
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default layout;