"use client";
import { GlobalContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { FilledButton } from "../Button";
import Image from "next/image";
import {
  DateInputFade,
  DropDownFade,
  FileInputFade,
  InputFade,
  PrefixInput,
  TextArea,
} from "../Input";
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  SearchNormal1,
} from "iconsax-react";
import Table from "../Table";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../Modal";
import DeliveryTable from "../DeliveryTable";
import DeliveryFilled from "../DeliveryFilled";
import { DeliveryProps } from "@/types";

const codes = [
  { id: 1, name: "Business" },
  { id: 2, name: "Marketing Agency" },
  { id: 3, name: "Solopreneur / Freelancer" },
  { id: 4, name: "Other" },
];

const tabs = [
  { id: 1, title: "All", count: "3340" },
  { id: 1, title: "Opened", count: "3330" },
  { id: 1, title: "Closed", count: "500" },
];

const AirMovement = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [consigneeOpen, setConsigneeOpen] = useState<boolean>(false);
  const [shipperOpen, setShipperOpen] = useState<boolean>(false);
  const [consignee, setConsignee] = useState<DeliveryProps | null>(null);
  const [shipper, setShipper] = useState<DeliveryProps | null>(null);

  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Air Movement Type");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={consigneeOpen} setIsOpen={setConsigneeOpen}>
        <div className="min-w-[844px] max-h-[504px] slim-scroll relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white ">
              <p className="text-base text-grey1000 font-medium">
                Select Consignee
              </p>
            </div>

            {/* Search */}
            <div className="px-10 py-3 bg-white border flex items-center gap-4 border-sec700">
              <SearchNormal1 className="text-grey700" size={24} />
              <input
                type="text"
                className="text-[13px] placeholder:text-grey500"
                placeholder="Search"
              />
            </div>
          </div>

          <DeliveryTable setValue={setConsignee} setOpen={setConsigneeOpen} />
        </div>
      </Modal>

      <Modal isOpen={shipperOpen} setIsOpen={setShipperOpen}>
        <div className="min-w-[844px] max-h-[504px] slim-scroll relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white ">
              <p className="text-base text-grey1000 font-medium">
                Select Shipper
              </p>
            </div>

            {/* Search */}
            <div className="px-10 py-3 bg-white border flex items-center gap-4 border-sec700">
              <SearchNormal1 className="text-grey700" size={24} />
              <input
                type="text"
                className="text-[13px] placeholder:text-grey500"
                placeholder="Search"
              />
            </div>
          </div>

          <DeliveryTable setValue={setShipper} setOpen={setShipperOpen} />
        </div>
      </Modal>
      {/* top section wwith the header Info */}
      <div className="w-full flex flex-col justify-between mb-12">
        <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            {consignee !== null ? (
              <DeliveryFilled label="Consignee" data={consignee} setData={setConsignee}/>
            ) : (
              <FileInputFade
                id="select customer"
                placeholder="Select from Customer File"
                label="Consignee"
                value=""
                cta={() => {
                  setConsigneeOpen(!consigneeOpen);
                }}
              />
            )}

            {
                shipper !== null ? (
                <DeliveryFilled label="Shipper" data={shipper} setData={setShipper}/>
            ) : (
                <FileInputFade
                    id="select customer"
                    placeholder="Select from Customer File"
                    label="Shipper"
                    value=""
                    cta={() => {
                      setShipperOpen(!shipperOpen);
                    }}
                  />)
            }
            
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Special Handling"
              placeholder="Select your company type"
              data={codes}
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Number of Parcels"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Gross Weight"
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Chargeable Weight"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <TextArea
              type="text"
              //   value={customer}
              setValue={setCustomer}
              label="Description of the goods"
              placeholder="Enter Description"
              iClass="h-[84px] text-base"
            />
          </div>

          <div className="w-full flex items-start gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter"
              label="Port of Loading"
            />
            <InputFade type="text" placeholder="Enter" label="Arrival Port" />
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col justify-between mb-12">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0 mt-2" />
        <h2 className="font-medium text-[22px] text-black">
          Arrival Information
        </h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter Airline Code"
              label="Carrier"
            />
            <PrefixInput
              label="Flight Number"
              type="text"
              type2="text"
              placeholder="Code"
              placeholder2="Enter Number"
            />
            <DateInputFade
              id="select customer"
              placeholder="Select from CustomerFile"
              label="Arrival Date"
              value=""
              cta={() => {}}
            />
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col justify-between mb-12">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0 mt-2" />
        <h2 className="font-medium text-[22px] text-black">
          FASAH Information
        </h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            <InputFade
              type="number"
              placeholder="Enter number"
              label="DRAFT Number"
            />
            <InputFade
              type="number"
              placeholder="Enter number"
              label="BAYAN Number"
            />
            <DateInputFade
              id="select customer"
              placeholder="Select from CustomerFile"
              label="BAYAN Date"
              value=""
              cta={() => {}}
            />
          </div>
        </form>

        <div className="w-full flex justify-end gap-4">
          <FilledButton
            text="Back"
            btnClass=" !w-fit px-[30px]"
            pClass="text-dark800 text-lg font-medium"
          />
          <FilledButton
            text="Next"
            btnClass=" bg-primary !flex-row-reverse !w-fit px-[30px]"
            pClass="text-white text-lg font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default AirMovement;
