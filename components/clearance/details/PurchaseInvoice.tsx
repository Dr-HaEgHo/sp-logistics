import { FilledButton } from "@/components/Button";
import { DropDownFade, InputFade } from "@/components/Input";
import Table from "@/components/Table";
import { ArrowDown2, ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SalesTable from "./SalesTable";

const clients = [
  { id: 1, name: "Any Client" },
  { id: 2, name: "Local Client" },
  { id: 3, name: "Foreign Client" },
];

const conditions = [
  { id: 1, name: "Any Case" },
  { id: 2, name: "Good Case" },
  { id: 3, name: "Fair Case" },
  { id: 4, name: "Bad Case" },
];

const tabs = [
  { id: 1, title: "Everyone ", count: "3340" },
  { id: 1, title: "Late", count: "3330" },
  { id: 1, title: "Due", count: "500" },
  { id: 1, title: "Unpaid", count: "500" },
  { id: 1, title: "Draft", count: "500" },
  { id: 1, title: "Paid for Extra", count: "500" },
];

const PurchaseInvoice = () => {
  const router = useRouter();
  const [qTab, setQTab] = useState<string>("");
  const [ checked, setChecked] = useState<boolean>(false)

  return (
    <div className="w-full bg-white p-10 relative">
      <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

      <div className="w-full bg-white grid grid-cols-3 gap-[26px]">
        <DropDownFade
          setValue={() => {}}
          type="text"
          label="Client"
          placeholder="Any Client"
          data={clients}
        />

        <InputFade
          type="number"
          label="Invoice Number"
          placeholder="Enter Number"
          lClass="text-base text-grey1000 font-normal"
        />

        <DropDownFade
          setValue={() => {}}
          type="text"
          label="The Condition"
          placeholder="Any Client"
          data={conditions}
        />
      </div>

      <div className="w-full flex flex-col items-end justify-end my-6 gap-6">
        <FilledButton
          text="Advanced Search"
          image={require("@/assets/icons/filter-red.svg")}
          btnClass="!flex-row-reverse !w-fit"
          pClass="text-primary text-sm"
        />

        <FilledButton
          text="Search"
          btnClass="!flex-row-reverse !w-fit border border-sec700 rounded !py-[9px] !px-4"
          pClass="text-sec700 text-lg font-medium"
        />
      </div>

      <div>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer flex item-center justify-center"
                onClick={() => setChecked(!checked)}
              >
                {checked ? (
                  <Image
                    src={require("@/assets/icons/check.svg")}
                    alt="unchecked"
                    className="w-6 h-6 object-cover"
                  />
                ) : (
                  <Image
                    src={require("@/assets/icons/checkbox.svg")}
                    alt="unchecked"
                    className="w-6 h-6 object-cover p-[1px]"
                  />
                )}
              </div>
              <ArrowDown2 variant="Bold" className="text-sec700" size={20} />
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sec800 text-base font-medium">Procedures</p>
              <ArrowDown2 variant="Bold" className="text-sec700" size={20} />
            </div>
          </div>
        </div>

      <div className="w-full mx-auto mt-4 rounded border border-grey300">
        <div className="w-full flex items-center rounded-tr rounded-tl border-b border-grey300 justify-between bg-bg2 p-4">
          <ul className="flex items-center">
            {tabs &&
              tabs.map((tab) => (
                <li
                  onClick={() => {
                    // router.push(`clearance?dir=search&tab=${tab.title}`);
                    setQTab(tab.title);
                  }}
                  style={{
                    background: tab.title === qTab ? "#D5E4E4" : "",
                  }}
                  className="cursor-pointer px-[10px] py-1 rounded hover:bg-bg2Hover transition duration-200"
                >
                  <p
                    style={{
                      fontWeight: tab.title === qTab ? "600" : "500",
                    }}
                    className="text-grey900 "
                  >
                    {tab?.title}
                  </p>
                </li>
              ))}
          </ul>

          <FilledButton
            text="Sort By"
            image={require("@/assets/icons/Sort.svg")}
            pClass="font-medium text-sm text-grey900"
            btnClass="!flex-row-reverse !w-fit !py-0"
          />
        </div>
        <SalesTable />

        <div className="w-full bg-grey100 rounded-br rounded-bl border-t border-grey300 py-2 flex items-center justify-center gap-4">
          <div className="pagination">
            <ArrowLeft2 className="text-grey300" />
          </div>
          <p>1 - 20 of 1044</p>
          <div className="pagination">
            <ArrowRight2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInvoice;
