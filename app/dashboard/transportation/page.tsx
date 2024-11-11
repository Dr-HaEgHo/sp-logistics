"use client";
import { FilledButton } from "@/components/Button";
import CreateNew from "@/components/transportation/CreateNew";
import Fleet from "@/components/transportation/Fleet";
import TransportationOrders from "@/components/transportation/TransportationOrders";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";

const dirTabs = [
  { id: 1, title: "Transportation Orders", dir: "transportation-orders" },
  { id: 2, title: "Fleet", dir: "fleet" },
];

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();
  const dir = new URLSearchParams(search).get("dir");
  const qTab = new URLSearchParams(search).get("tab");

  const { setAppHeaderInfo, setLayout } = useContext(GlobalContext);

  useEffect(() => {
    if (dir) {
      return;
    }

    router.push("?dir=transportation-orders&tab=1");
  }, []);

  
  useEffect(() => {
    setAppHeaderInfo("Transportation Management");
    setLayout("");
  }, []);

  return (
    <main className="w-full ">
      {/* TABS ON TOP OF PAGE */}
      <div className="w-full flex items-start justify-between mb-12">
        <ul className="flex items-center gap-6">
          {dirTabs &&
            dirTabs.map((dirtab) => (
              <li
                key={dirtab?.id}
                style={{
                  borderBottomWidth: dir === dirtab.dir ? 1.5 : 0,
                }}
                onClick={() => {
                  router.push(`?dir=${dirtab.dir}&tab=drivers`);
                }}
                className="transition duration-200 py-1 px-2 border-primary cursor-pointer hover:bg-slate-100"
              >
                <h2 className="font-medium text-[22px] text-black ">
                  {dirtab.title}
                </h2>
              </li>
            ))}
        </ul>
        <div className="flex flex-col items-end gap-5">
          {dir === "transportation-orders" && (
            <FilledButton
              cta={() => {
                router.push("?dir=create-new");
              }}
              text="New File"
              image={require("@/assets/icons/Add.svg")}
              btnClass="bg-primary !w-fit !px-4"
              pClass="text-white font-medium text-lg"
            />
          )}
          {dir === "fleet" && qTab !== "add-driver" && qTab === "drivers" && (
            <FilledButton
              cta={() => {
                router.push("?dir=fleet&tab=add-driver");
              }}
              text="Add new driver"
              image={require("@/assets/icons/Add.svg")}
              btnClass="bg-primary !w-fit !px-4"
              pClass="text-white font-medium text-lg"
            />
          )}
          {dir === "fleet" && qTab !== "add-driver" && qTab === "trucks" && (
            <FilledButton
              cta={() => {
                router.push("?dir=fleet&tab=add-truck");
              }}
              text="Add new Truck"
              image={require("@/assets/icons/Add.svg")}
              btnClass="bg-primary !w-fit !px-4"
              pClass="text-white font-medium text-lg"
            />
          )}
          {dir === "transportation-orders" && (
            <div className="flex items-center">
              <p className="text-grey900 text-base font -normal">
                Accept files from other departments
              </p>
              <Image
                src={require("@/assets/icons/upload.svg")}
                alt="upload button"
                className="w-7 h-7"
              />
            </div>
          )}
        </div>
      </div>

      {/* RENDER ACCORDING TO DIRECTORY */}
      <div className="w-full">
        {dir === "transportation-orders" && <TransportationOrders />}

        {dir === "fleet" && <Fleet />}

        {dir === "create-new" && <CreateNew />}
      </div>
    </main>
  );
};

export default Page;
