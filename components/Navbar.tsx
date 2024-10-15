"use client";
import { HambergerMenu, Menu, Notification } from "iconsax-react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import { GlobalContext } from "@/context/context";
// import { Activity } from "@untitled-ui/icons-react";

const Navbar = () => {
  const [isNotification, setIsNotifications] = useState(true);
  const location = usePathname();
  const params = useParams();
  const [searchValue, setSearchValue] = useState("");
  const { appHeaderInfo, mainSidebarOpen, setMainSidebarOpen } = useContext(GlobalContext);

  const toggleSidebar = () => {
    setMainSidebarOpen(!mainSidebarOpen);
  };

  return (
    <div className="w-full h-[88px] bg-white nav-shadow flex items-center justify-center">
      <div className="dash-container">
        <div className="w-full flex items-center justify-between ">
          <h2 className="font-medium text-base text-grey1000">{ appHeaderInfo }</h2>

          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={require("../assets/icons/notification.svg")}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-5 h-5 rounded-full absolute -right-1 flex items-center justify-center bottom-0 bg-noteGreen">
                <p className="font-xs font-medium text-white">4</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={require("../assets/icons/no-user.svg")}
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-medium text-grey1000 text-sm">Name Surname</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
