"use client";
import { GlobalContext } from "@/context/context";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { FilledButton } from "../Button";
import Image from "next/image";
import {
  DateInputFade,
  DropDownFade,
  FileInputFade,
  InputFade,
  PrefixInput,
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

const destinations = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
];

const CreateNew = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [delitoOpen, setDelitoOpen] = useState<boolean>(false);
  const [delito, setDelito] = useState<DeliveryProps | null>(null);
  const [addContainerOpen, setAddContainerOpen] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Create New");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={delitoOpen} setIsOpen={setDelitoOpen}>
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

          <DeliveryTable setValue={setDelito} setOpen={setDelitoOpen} />
        </div>
      </Modal>

      <Modal isOpen={addContainerOpen} setIsOpen={setAddContainerOpen}>
        <div className="w-[1320px] min-w-[844px] min-h-[400px] slim-scroll bg-white relative">
          {/* HEader Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">
                Container Information
              </h4>
            </div>
            {/* <FileStatusTable /> */}
          </div>

          <div className="px-10 pt-4 bg-white flex gap-[26px]">
            <PrefixInput
              label="Container Number"
              type="string"
              type2="number"
              placeholder="Letters"
              placeholder2="Enter Number"
              lClass="text-base text-grey1000 font-normal"
            />

            <DropDownFade
              type="text"
              placeholder="Enter Number"
              label="Container Size"
              data={codes}
              setValue={() => {}}
            />

            <InputFade
              type="number"
              label="Weight"
              placeholder="Enter number"
              lClass="text-base text-grey1000 font-normal"
            />
            <InputFade
              type="number"
              label="Number of Parcels"
              lClass="text-base text-grey1000 font-normal"
              placeholder="Enter number"
            />
          </div>

          <div className="px-10 mt-10 bg-white flex items-center justify-start">
            <FilledButton
              text="Add Container"
              image={require("../../assets/icons/add-sec700.svg")}
              btnClass="border border-sec700 rounded !w-fit px-4 !h-fit"
              pClass="font-medium text-sec700 text-lg"
              cta={() => {
                setAddContainerOpen(false);
              }}
            />
          </div>

          <div className="px-10 mt-[60px] bg-white flex items-center justify-end">
            <FilledButton
              text="Save"
              btnClass="bg-primary rounded !w-fit px-7 !h-fit"
              pClass="font-medium text-white text-lg"
              cta={() => {}}
            />
          </div>
        </div>
      </Modal>
      {/* top section wwith the header Info */}
      <div className="w-full flex flex-col justify-between mb-12">
        <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-5 mb-[50px]"
        >
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

          <div className="w-full flex flex-col gap-[26px]">
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

            <InputFade
              type="number"
              label="Customer Reference Number"
              placeholder="Enter Number"
            />

            <InputFade
              type="number"
              label="Contact Number"
              placeholder="Enter Number"
            />

            <DropDownFade
              type="text"
              label="Branch"
              value={customer}
              setValue={setCustomer}
              placeholder="Select"
              data={codes}
            />

            <div className="w-full flex itens-center gap-[26px]">
              <InputFade
                type="number"
                label="Number of Pallets"
                placeholder="Enter Number"
              />
              <DropDownFade
                type="text"
                label="Packaging Method"
                value={customer}
                setValue={setCustomer}
                placeholder="Select"
                data={codes}
              />
            </div>

            <div className="w-full flex itens-center gap-[26px]">
              {delito !== null ? (
                <DeliveryFilled
                  label="Delivery to"
                  data={delito}
                  setData={setDelito}
                />
              ) : (
                <FileInputFade
                  id="select customer"
                  placeholder="Select from CustomerFile"
                  label="Delivery to"
                  value=""
                  cta={() => {
                    setDelitoOpen(!delitoOpen);
                  }}
                />
              )}

              {/* `RADIO STYLED CKECK BUTTON` */}
              <div className="w-full flex items-canter gap-2 mt-12">
                {/* RADIO BUTTON */}
                <div
                  className="cursor-pointer flex item-center justify-center"
                  onClick={() => setChecked(!checked)}
                >
                  {checked ? (
                    <Image
                      src={require("@/assets/icons/radio-on.svg")}
                      alt="unchecked"
                      className="w-6 h-6 object-cover"
                    />
                  ) : (
                    <Image
                      src={require("@/assets/icons/radio.svg")}
                      alt="unchecked"
                      className="w-6 h-6 object-cover p-[1px]"
                    />
                  )}
                </div>
                <p className="text-base">Pick up by Customer</p>
              </div>
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
