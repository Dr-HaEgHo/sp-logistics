"use client";
import { FilledButton } from "@/components/Button";
import CreateNew from "@/components/container/CreateNew";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect } from "react";
import DistributionDetails from "@/components/warehouse/DistributionDetails";
import ContainerYard from "@/components/container/ContainerYard";
import Locations from "@/components/container/Locations";

const dirTabs = [
  { id: 1, title: "Container Yard", dir: "container-yard" },
  { id: 2, title: "Locations", dir: "locations" },
];

const Page = () => {
  const router = useRouter();
  const search = useSearchParams();
  const dir = new URLSearchParams(search).get("dir");
  const qTab = new URLSearchParams(search).get("tab");

  const { setAppHeaderInfo, setLayout, setBarcodeContainer } = useContext(GlobalContext);

  useEffect(() => {
    if (dir) {
      return;
    }

    router.push("?dir=container-yard&tab=1");
  }, []);

  useEffect(() => {
    setAppHeaderInfo("Container Yard");
    setLayout("");
  }, []);

  return (
    <main className="w-full ">

      {/* TABS ON TOP OF PAGE */}
      {dir !== "create-new" && dir !== "distribution" && (
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
                    router.push(`?dir=${dirtab.dir}&tab=1`);
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
            {dir === "container-yard" && (
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
            {dir === "locations" && (
              <div className="flex gap-4 items-center">
                <FilledButton
                  //
                  cta={() => {
                    setBarcodeContainer(true)
                  }}
                  text="Upload location barcode file"
                  image={require("@/assets/icons/upload-sec700.svg")}
                  btnClass="border border-sec700 !w-fit !px-4"
                  pClass="text-sec700 font-medium text-lg"
                />
              </div>
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
            {dir === "container-yard" && (
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
      )}

      {/* RENDER ACCORDING TO DIRECTORY */}
      <div className="w-full">
        {dir === "container-yard" && <ContainerYard />}

        {dir === "locations" && <Locations />}

        {dir === "create-new" && <CreateNew />}

        {dir === "distribution" && <DistributionDetails />}
      </div>
    </main>
  );
};

export default Page;
