"use client";
import { GlobalContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { FilledButton } from "../Button";
import Image from "next/image";
import { DropDownFade, FileInputFade, InputFade, PrefixInput } from "../Input";
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

const CreateNew = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [ deliOpen, setDeliOpen] = useState<boolean>(false);
  const [ deli, setDeli ] = useState<DeliveryProps | null>(null)
  
  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Create New");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={deliOpen} setIsOpen={setDeliOpen}>
          <div className="min-w-[844px] max-h-[504px] slim-scroll relative"> 
            {/* HEader Bar */}
            <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white ">
              <p className="text-base text-grey1000 font-medium">Select Delivery Location</p>
            </div>

            {/* Search */}
            <div className="px-10 py-3 bg-white border flex items-center gap-4 border-sec700">
              <SearchNormal1 className="text-grey700" size={24}/>
              <input type="text" className="text-[13px] placeholder:text-grey500" placeholder="Search"/>
            </div>
            </div>

            <DeliveryTable setValue={setDeli} setOpen={setDeliOpen}/>
          </div>
          
      </Modal>
      {/* top section wwith the header Info */}
      <div className="w-full flex flex-col justify-between mb-12">
        <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-[50px]">
          <div className="flex items-center justify-start gap-5 mb-7">
            <InputFade
              type="number"
              placeholder="12345667889"
              label="File Reference"
              iClass=""
              iwClass="!w-[224px]"
              isDisabled={true}
            />
            <InputFade
              type="number"
              placeholder="26/08/2024"
              label="Date"
              iClass="max-w-[224px]"
              iwClass="!w-[162px]"
              isDisabled={true}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Customer"
              placeholder="Select your company type"
              data={codes}
            />
            <PrefixInput
              label="Bill of Lading Number"
              type="string"
              type2="number"
              placeholder="Prefix"
              placeholder2="Enter Number"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Customer Reference Number"
            />
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Business Unit"
              placeholder="Select"
              data={codes}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Port"
              placeholder="Select Port"
              data={codes}
            />
            <DropDownFade 
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Movement Type"
              placeholder="Select type"
              data={codes}
            />
          </div>

          <div className="w-full flex items-start gap-[26px]">
            {
              deli !== null ? (<DeliveryFilled label="Delivery to" data={deli} setData={setDeli}/>) : (
              <FileInputFade
                id="select customer"  
                placeholder="Select from CustomerFile"
                label="Delivery to"
                value=""
                cta={() => {setDeliOpen(!deliOpen)}}
              />)
            }
            
            


          {/* `RADIO STYLED CKECK BUTTON` */}
            <div className="w-full flex items-canter gap-2 mt-12">
              {/* RADIO BUTTON */}
              <div
                className="cursor-pointer flex item-center justify-center"
                onClick={() => setChecked(!checked)}
              >
                {checked ? (
                  <Image
                    src={require("../../assets/icons/radio-on.svg")}
                    alt="unchecked"
                    className="w-6 h-6 object-cover"
                  />
                ) : (
                  <Image
                    src={require("../../assets/icons/radio.svg")}
                    alt="unchecked"
                    className="w-6 h-6 object-cover p-[1px]"
                  />
                )}
              </div>
              <p className="text-base">Pick up by Customer</p>
            </div>

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

export default CreateNew;
