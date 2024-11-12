"use client";

import {
  CloseCircle,
  CloseSquare,
  Logout,
  MenuBoard,
  People,
  Profile,
} from "iconsax-react";
import Image from "next/image";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
// import { links } from './homepage/Navbar';
import Link from "next/link";
import { GlobalContext } from "@/context/context";
// import Prompt from './Prompt';/
// import { useAppDispatch } from '@/store/hooks';
// import { logout } from '@/store/auth/authSlice';

const Sidebar = () => {
  const location = usePathname();
  const router = useRouter();
  const param = useParams();
  // const dispatch = useAppDispatch();

  const { mainSidebarOpen, setMainSidebarOpen } = useContext(GlobalContext);

  const [onlineStatus, setOnlineStatus] = useState("online");
  const [logoutOpen, setLogoutOpen] = useState(false);
//   const [active, setActive] = useState<string>("");
  const active = usePathname() 

  const links = [
    {
      id: 1,
      header: "Operation Management",
      sublinks: [
        {
          id: 1,
          title: "Customs Clearance",
          icon: require("../assets/icons/Cust-clear.svg"),
          iconw: require("../assets/icons/Cust-clearw.svg"),
          route: "/dashboard/clearance",
          route2: "/dashboard/clearance/details",
        },
        {
          id: 2,
          title: "Warehouse Management",
          icon: require("../assets/icons/warehouse.svg"),
          iconw: require("../assets/icons/warehousew.svg"),
          route: "/dashboard/warehouse",
          route2:"/dashboard/warehouse/details",
        },
        {
          id: 3,
          title: "Transportation Management",
          icon: require("../assets/icons/trans-mgt.svg"),
          iconw: require("../assets/icons/trans-mgtw.svg"),
          route: "/dashboard/transportation",
          route2:"/dashboard/transportation/details",
        },
        {
          id: 4,
          title: "Container Yard",
          icon: require("../assets/icons/container-yard.svg"),
          iconw: require("../assets/icons/container-yardw.svg"),
          route: "/dashboard/container-yard",
          route2:"/dashboard/container-yard/details",
        },
        {
          id: 5,
          title: "Arena Management",
          icon: require("../assets/icons/arena-mgt.svg"),
          iconw: require("../assets/icons/arena-mgtw.svg"),
          route: "/",
          route2:"/",
        },
      ],
    },
    {
      id: 2,
      header: "Finance Management",
      sublinks: [
        {
          id: 1,
          title: "Sales Mangement",
          icon: require("../assets/icons/sales-mgt.svg"),
          iconw: require("../assets/icons/sales-mgtw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 2,
          title: "Purchase Management",
          icon: require("../assets/icons/purchase-mgt.svg"),
          iconw: require("../assets/icons/purchase-mgtw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 3,
          title: "General Accounts Management",
          icon: require("../assets/icons/general-accounts.svg"),
          iconw: require("../assets/icons/general-accountsw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 4,
          title: "Finance and Treasury",
          icon: require("../assets/icons/finance-treasury.svg"),
          iconw: require("../assets/icons/finance-treasuryw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 5,
          title: "Cheque Cycle",
          icon: require("../assets/icons/cheque-cycle.svg"),
          iconw: require("../assets/icons/cheque-cyclew.svg"),
          route: "/",
          route2:"/",
        },
      ],
    },
    {
      id: 3,
      header: "Clients Management",
      sublinks: [
        {
          id: 1,
          title: "Customer Mangement",
          icon: require("../assets/icons/cust-mgt.svg"),
          iconw: require("../assets/icons/cust-mgtw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 2,
          title: "Contact List",
          icon: require("../assets/icons/contact-list.svg"),
          iconw: require("../assets/icons/contact-listw.svg"),
          route: "/",
          route2:"/",
        },
      ],
    },
    {
      id: 4,
      header: "Human Resource",
      sublinks: [
        {
          id: 1,
          title: "Organizational Chart",
          icon: require("../assets/icons/organ-chart.svg"),
          iconw: require("../assets/icons/organ-chartw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 2,
          title: "Attendees",
          icon: require("../assets/icons/attendes.svg"),
          iconw: require("../assets/icons/attendesw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 3,
          title: "Salaries and Contracts",
          icon: require("../assets/icons/salary.svg"),
          iconw: require("../assets/icons/salaryw.svg"),
          route: "/",
          route2:"/",
        },
        {
          id: 4,
          title: "Employees",
          icon: require("../assets/icons/employees.svg"),
          iconw: require("../assets/icons/employeesw.svg"),
          route: "/",
          route2:"/",
        },
      ],
    },
    {
      id: 4,
      header: "",
      sublinks: [
        {
          id: 1,
          title: "Settings",
          icon: require("../assets/icons/Settings.svg"),
          iconw: require("../assets/icons/Settingsw.svg"),
          route: "/",
          route2:"/",
        },
      ],
    },
  ];

  const handleLogout = () => {
    // dispatch(logout())
    router.push("/login");
  };

  const toggleSidebar = () => {
    setMainSidebarOpen(!mainSidebarOpen);
  };

  const handleCancel = () => {
    setLogoutOpen((prev: boolean) => (prev = !prev));
  };

  //   const item = {
  //     title : "Timothy"
  //   }

  return (
    <div className="w-full h-screen dash-shadow bg-white relative px-2 slim-scroll">
      <div className="w-full sticky top-0 pt-6 pl-5 pb-4 bg-white">
        <div className="w-[156px] ">
          <Image
            src={require("../assets/icons/logo.svg")}
            alt="sidebar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* first logo divider */}
      <div className="border-b w-full h-1 border-grey200 !my-4" />

      {/* / mapping links */}
      <div className="">
        {links &&
          links.map((link) => (
            <div className="flex flex-col gap-4">
              <h3 className="text-sm text-grey600 pl-4">{link?.header}</h3>
              <ul className="flex flex-col gap-2 w-full">
                {link.sublinks &&
                  link.sublinks.map((item) => (
                    <li
                      key={item.id}
                      onClick={() => {
                        // setActive(item.title);
                      }}
                      className={`transition duration-200 py-[9px] rounded-xl ${
                        item.route === active || item.route2 === active ? "bg-sec800" : ''
                      } hover:bg-grey200`}
                    >
                      <a href={item?.route} className="flex items-center gap-[10px] pl-4">
                        <Image
                          src={item.route === active || item.route2 === active ? item.iconw : item.icon}
                          alt="link icon"
                          className="w-5 h-5"
                        />
                        <p
                          className={`text-[15px] ${
                            item.route === active || item.route2 === active
                              ? "text-white font-bold"
                              : "text-grey900 font-medium"
                          }`}
                        >
                          {item.title}
                        </p>
                      </a>
                    </li>
                  ))}
                <div className="border-b w-full h-1 border-grey200 !mb-4" />
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export const SidebarMobile = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`transition duration-500 w-full fixed right-0 bg-white z-10 p-4 border-b border-primary`}
      style={{
        top: isSidebarOpen ? "0%" : "-100%",
        height: "90vh",
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* LOGO FOMR MOBILE*/}
        <a href="/" className="w-[90px] block lg:hidden">
          {/* <Image 
                    src={require('../assets/images/logoblack.png')}
                    alt='onebot.com'
                    className='w-full'
                /> */}
        </a>
        <CloseSquare
          onClick={toggleSidebar}
          className="text-primary transition duration-200 w-10 min-w-10 h-10 cursor-pointer hoverActive"
          variant="Bold"
        />
      </div>

      {/* NAV */}
      <div className="flex h-full flex-col gap-[40px] w-full items-center justify-center">
        <ul className="flex w-[70%] max-w-[400px] flex-col items-center gap-[40px]">
          {/* {
                        links && links.map(link => (
                            <a key={link?.id} href={link?.route} className='w-full flex items-center py-2 rounded transition duration hover:bg-blackHover active:bg-blackActive'><li className='text-sm 2xl:text-base text-center text-headDesc w-full'>{link?.title}</li></a>
                        ))
                    } */}
        </ul>

        <Link href="/signup" className="">
          <button className="buttons-2 flex items-center gap-1">
            <p className="text-xs 2xl:text-sm text-white">Get Started</p>
            {/* <Image 
                            src={require('../assets/icons/circleArrow.png')}
                            alt='onebot.com'
                            className='w-[18px]'
                        /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
