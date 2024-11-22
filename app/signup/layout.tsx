"use client";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-fit lg:h-screen flex items-center">
      <div className="w-[56%] h-full hidden lg:block overflow-hidden relative">
        <div className=" z-10 pointer-events-none absolute w-full h-full bg-gradient-to-t from-primary2 to-transparent top-0 right-0 p-8 flex flex-col justify-between">
          {/* LOGO */}
          <div className="w-[120px]">
            {/* <Image 
                    src={require('../../assets/icons/logo.svg')}
                    alt='SP Logistics logo'
                    className='w-[136px]' 
                /> */}
          </div>

          <div className="w-full flex flex-col">
           
            <div className="pb-11">
              <h1 className="text-white mont text-[40px] font-[900] mb-[22px] leading-[50px]">
                Global <br /> Freight Solutions
              </h1>
              <p className="text-white text-[18px] mont font-[600]">
                {" "}
                Manage Your Air, Ocean, and Land Shipments in One Place. <br /> Log In to Simplify Freight Forwarding
              </p>
            </div>
          </div>
        </div>
        <ImageSlider />
      </div>

      <div className="flex-[1] min-w-[640px] h-full pl-[70px] mx-auto max-lg:scroll max-lg:mb-20">
        <div className="w-[78%] mx-auto h-full py-5 min-w-[500px]">
          <div className="w-full h-[6%] min-h-10 flex items-start justify-start">
            <Link href="/">
                <Image 
                    src={require('../../assets/icons/logo.svg')}
                    alt='SP Logistics logo'
                    className='w-[136px]'
                />
            </Link> 
          </div>
          <div className="w-full h-[94%] max-w-[500px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
