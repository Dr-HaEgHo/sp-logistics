import React, { useState } from "react";
import FlieActionTable from "../FileActionTable";
import { FilledButton } from "../Button";
import { DropDownFade, InputFade, PrefixInput } from "../Input";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useRouter, useSearchParams } from "next/navigation";
import TransportCard from "./TransportCard";
import { cardData, contCodes, cust, qTabs } from "@/data";




const TransportationOrders = () => {
  const [customer, setCustomer] = useState<string>("");
  const [ContainerNo, setContainerNo] = useState<string>("");

  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  return (
    <div className="w-full">
      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-12">
          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Customer"
              placeholder="Select Customer"
              data={cust}
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="File Reference"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <PrefixInput
              label="Bill of Lading Number"
              type="string"
              type2="number"
              placeholder="Prefix"
              placeholder2="Enter Number"
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Customer Reference Number"
            />
          </div>

          <div className="w-full flex items-center justify-end gap-[26px]">
            <FilledButton
              text="Advanced Search"
              image={require("../../assets/icons/filter-red.svg")}
              btnClass="!flex-row-reverse !w-fit"
              pClass="text-primary text-sm"
            />

            <FilledButton
              text="Clear"
              btnClass="!flex-row-reverse !w-fit"
              pClass="text-dark1000 text-sm"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Container Number"
              placeholder="Container Number"
              data={contCodes}
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="BAYAN No"
            />
          </div>

          <div className="w-full flex justify-end mt-1 ">
            <FilledButton
              text="Search"
              btnClass="border border-sec700 !flex-row-reverse !w-fit p-4"
              pClass="text-sec700 text-sm"
            />
          </div>
        </form>
      </div>

      {/* TAB SWITCHES */}
      <div className="w-full">
        <ul className="w-full flex items-center gap-3">
          {qTabs &&
            qTabs.map((tab, idx) => (
              <li key={idx}>
                <FilledButton
                  cta={() => {
                    router.push(`?dir=transportation-orders&tab=${tab.id}`)
                  }}
                  text={tab.Title}
                  btnClass={`bg-bg2 border-sec600 rounded !py-[13px] px-4 ${ tab.id.toString() === qTab && 'border'}`}
                  pClass={`text-sm  dfgdf ${ tab?.id.toString() === qTab ? '!text-secDark1 !font-semibold' : '!text-dark900 !font-normal'}`}
                />
              </li>
            ))}
        </ul>
      </div>

     <div className="w-full grid grid-cols-2 gap-4 py-[44px]">
            {
              cardData && cardData.map((item) => (
                <TransportCard data={item} />
              ))
            }
     </div>
    </div>
  );
};

export default TransportationOrders;
