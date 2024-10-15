import React from "react";
import { FilledButton } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import Drivers from "@/components/transportation/fleet/Drivers";
import Trucks from "@/components/transportation/fleet/Trucks";
import AddDriver from "@/components/transportation/fleet/AddDriver";
import AddTruck from "@/components/transportation/fleet/AddTruck";

const tabs = [
  { id: 1, title: "Drivers", path: "drivers", subpath: "add-driver" },
  { id: 2, title: "Trucks", path: "trucks", subpath: "add-truck"  },
];

const Fleet = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  return (
    <div className="w-full">
    
      {/* TAB SWITCHES */}
      <div className="w-full">
        <ul className="w-full flex items-center gap-3">
          {tabs &&
            tabs.map((tab, idx) => (
              <li key={idx}>
                <FilledButton
                  cta={() => {
                    router.push(`?dir=fleet&tab=${tab.path}`);
                  }}
                  text={tab.title}
                  pClass={`text-base ${
                    tab?.path === qTab || tab.subpath === qTab 
                      ? "!text-primary !font-semibold"
                      : "!text-dark900 !font-medium"
                  }`}
                />
              </li>
            ))}
        </ul>
      </div>

      {/* RENDER BASED ON QTAB */}
      <div className="w-full"> 
            {
              qTab === "add-driver" && <AddDriver/>
            }
            {
              qTab === "drivers" && <Drivers/>
            }

            {
              qTab === "trucks" && <Trucks/>
            }

            {
              qTab === "add-truck" && <AddTruck/>
            }

      </div>
    </div>
  );
};

export default Fleet;
