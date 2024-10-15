"use client";
import { FilledButton } from "@/components/Button";
import { GlobalContext } from "@/context/context";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";



const buttons2 = [
  { id: 1, name: "Details", icon: "" },
  { id: 2, name: "Sales Invoices", count: "3250", icon: "" },
  { id: 3, name: "Purchase Invoices", count: "2", icon: "" },
  { id: 4, name: "Quotation", count: "2", icon: "" },
  { id: 5, name: "Notes/Documents", count: "0", icon: "" },
  { id: 6, name: "Track Action", count: "3 ", icon: "" },
  { id: 7, name: "Active Record", icon: "" },
  { id: 8, name: "Financial Movements", icon: "" },
  { id: 9, name: "Operations Summary", icon: "" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const {
    setLayout,
    setAppHeaderInfo,
    openDoc,
    setOpenDoc,
    openAction,
    setOpenAction,
  } = useContext(GlobalContext);

  const search = useSearchParams();
  const tab = new URLSearchParams(search).get("tab");


  const buttons = [
    { id: 1, name: "Create Sales Invoice", icon: "" },
    { id: 2, name: "Create Purchase Invoice", icon: "" },
    { id: 3, name: "Create Quotation", icon: "" },
    {
      id: 4,
      name: "Add documents/Notes",
      icon: require("@/assets/icons/docu-sec700.svg"),
      cta: () => setOpenDoc(true)
    },
    {
      id: 5,
      name: "Take Action",
      icon: require("@/assets/icons/take-action-sec700.svg"),
      cta: () => setOpenAction (true)
    },
    //   { id: 6, name: "Print", icon: require('@/assets/icons/printer-sec700.svg')},
  ];

  useEffect(() => {
    setLayout("custom");
    setAppHeaderInfo("Transportation Management");
  }, []);

  return (
    <div className="w-full  ">
      {/* TOP DIV ROUNDED BUTTONS */}
      <div className="w-full p-10">
        <ul className="flex flex-wrap gap-6">
          {buttons &&
            buttons.map((btn) => (
              <li key={btn.id} className="">
                <FilledButton
                  text={btn.name}
                  image={btn.icon}
                  btnClass="!rounded-full border border-sec700 !py-[13.5px] !px-[10px]"
                  pClass="text-sec700 text-sm font-medium"
                  cta={btn.cta}
                />
              </li>
            ))}
          <li className="">
            <FilledButton
              text="Print"
              image={require("../../../../assets/icons/printer-sec700.svg")}
              btnClass="!rounded-full border border-sec700 !py-[13.5px] !px-[10px] !pr-5"
              pClass="text-sec700 text-sm font-medium"
              cta={() => {}}
            />
          </li>
        </ul>
      </div>

      <div className="w-full px-10 pb-10">
        <ul className="flex flex-wrap gap-3 ">
          {buttons2 &&
            buttons2.map((btn) => (
              <li className="">
                <FilledButton
                  text={`${btn.name} ${btn.count ? `(${btn.count})` : ""}`}
                  btnClass={`border-sec700 !rounded-none !py-[13.5px] p-[10px] ${
                    tab === btn?.name.toLowerCase().split(" ").join("-") &&
                    "border-b"
                  } `}
                  pClass="text-sec700 text-sm font-semibold"
                  cta={() => {
                    router.push(
                      `?tab=${btn.name.toLowerCase().split(" ").join("-")}`
                    );
                  }}
                />
              </li>
            ))}
        </ul>
      </div>
      {children}
    </div>
  );
};

export default Layout;
