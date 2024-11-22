"use client";
import CardLoader from "@/components/CardLoader";
// import LatestCard from "@/components/LatestCard";
// import OngoingCard from "@/components/OngoingCard";
// import withProtectedRoute from "@/components/ProtectedRoute";
import SomethingWentWrong from "@/components/SomethingWentWrong";
// import { getLatestCourses, getOngoingCourses } from "@/store/courses/courseAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ongoing = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6}
]

const Page = () => {

  const dispatch = useAppDispatch()
  const userDetails = useAppSelector(state => state.auth.userDetails)
  // const latest = useAppSelector((state) => state.courses.latestCourses);
  // const ongoing = useAppSelector((state) => state.courses.ongoingCourses);
  // const isLatestLoading = useAppSelector(state => state.courses.latestLoading)
  // const isOngoingLoading = useAppSelector(state => state.courses.ongoingLoading)

  const [latestLoading, setLatestLoading] = useState<boolean>(false)
  const [ongoingLoading, setOngoingLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   dispatch(getLatestCourses())
  //   dispatch(getOngoingCourses())
  // }, [])

  // useEffect(() => {
  //   if(isLatestLoading){
  //       setLatestLoading(true)
  //   }else (
  //       setLatestLoading(false)
  //   )

  //   if(isOngoingLoading){
  //       setOngoingLoading(true)
  //   }else{
  //       setOngoingLoading(false)
  //   }
  // }, [latestLoading, ongoingLoading])

  return (
    <div className="w-full h-full bg-white ">
      <div className="dash-container">
        <div className="w-full pt-[26px] 2xl:pt-[34px] ">
          {/* TOP BAR WELCOME */}
          <div className="w-full bg-primary2 h-[182px] 2xl:h-[202px] p-[26px] 2xl:p-[30px] relative rounded-xl overflow-hidden flex flex-col items-start justify-between">
            {/* ABSOLUTE BG IMG */}
            <div className="w-[250px] lg:w-[337px] 2xl:w-[387px] absolute z-[1] top-[50px] lg:-top-[14px] right-[0px] lg:right-[68px] 2xl:right-[148px]">
              {/* <Image 
                src={require("../")}
                alt="sp-logistics.com"
                className="w-full"
              /> */}
            </div>

            {/* ABSOLUTE USET IMAGE */}
            <div className="w-[200px] lg:w-[290px] 2xl:w-[304px] absolute z-0 top-10 left-1/2 transform -translate-x-1/2">
              {/* <Image 
                src={require("../../assets/images/logomark.png")}
                alt="stacfx.com"
                className="w-full"
              /> */}
            </div>

            <p className="text-white text-[11px] 2xl:text-[13px] z-10 ">
              {" "}
              December 16, 2024
            </p>

            <div className="z-10">
              <h3 className="text-white text-lg lg:text-[28px] 2xl:text-[32px] ">
                Welcome Back, { userDetails?.first_name}
              </h3>
              <span className="text-userEmail text-[11px] 2xl:text-[13px] font-[100] ">
                Always stay updated in your personal dashboard
              </span>
            </div>
          </div>

          {/* DIVIDER DIV  */}
          <div className="w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]">
            <h3 className=" text-[17px] 2xl:text-[20px]">Latest Lessons</h3>
            <div className="flex-[1] h-[1px] bg-dividerGray" />
            <Link href="/">
              <p className="text-[13px] 2xl:text-[15px] underline">Show All</p>
            </Link>
          </div>

          {/*LATEST COURSES MAPPED OUT */}
          {/* <div className={`flex gap-[18px] 2xl:gap-[24px] md:justify-between`}>
            {latestLoading === true ? (
              <CardLoader />
            ) : (
              <>
                {latest ? (
                  latest.slice(0,3).map((item, idx) => (
                    <div key={idx} className={`w-full md:w-[33%] ${idx === 2 && 'hidden md:flex' } ${idx === 1 && 'hidden sm:flex' }`}>
                      <LatestCard data={item} action={()=> {router.push(`/dashboard/courses?id=${item.id}`)}}/>
                    </div>
                  ))
                ) : (
                  <SomethingWentWrong />
                )}
              </>
            )}
          </div> */}

          {/* DIVIDER DIV  */}
          <div className="w-full py-[16px] 2xl:py-[30px] flex items-center gap-[12px]">
            <h3 className=" text-[17px] 2xl:text-[20px]">Ongoing Courses</h3>
            <div className="flex-[1] h-[1px] bg-dividerGray" />
            <Link href="/">
              <p className="text-[13px] 2xl:text-[15px] underline">Show All</p>
            </Link>
          </div>

          {/*ONGOING COURSES MAPPED OUT */}
          <div className="w-full flex items-start gap-[18px] 2xl:gap-[24px] flex-nowrap">
            {
                ongoingLoading === true ? (<CardLoader/>): (<>
                    {ongoing !== null && ongoing ? (
                    ongoing.slice(0,3).map((item, idx) => (
                        <div key={idx} className={`w-full md:w-[33%] ${idx === 2 && 'hidden md:flex' } ${idx === 1 && 'hidden sm:flex' }`}>
                        {/* <OngoingCard data={item} action={()=> {router.push(`/dashboard/courses?id=${item?.course?.id}`)}} /> */}
                        </div>
                    ))
                    ) : (
                    <SomethingWentWrong />
                    )}
                </>)
            }
          </div>

          <div className="h-[5rem]" />
        </div>
      </div>
    </div>
  );
};

export default Page;
