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
import { RadioCheck } from "../CheckBox";

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

const DistributionDetails = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [yes, setYes] = useState<boolean>(false);
  const [no, setNo] = useState<boolean>(false);
  const [isAutomatic, setIsAutomatic] = useState<boolean>(false);
  const [distribution, setDistribution] = useState<boolean>(false);
  const [delito, setDelito] = useState<DeliveryProps | null>(null);
  const [addContainerOpen, setAddContainerOpen] = useState<boolean>(false);
  const [file, setFile] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (yes === true) {
      setNo(false);
      // setYes(true)
    }
  }, [yes]);

  useEffect(() => {
    if (no === true) {
      setYes(false);
      // setNo(true)
    }
  }, [no]);
  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Distribution Details");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={distribution} setIsOpen={setDistribution}>
        <div className="min-w-[844px] max-h-[504px] slim-scroll relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white border-b border-grey200">
              <p className="text-base text-grey1000 font-medium">
                Upload Distribution File
              </p>
            </div>

            <div className="w-full flex flex-col items-start gap-[10px] pt-6">
              <div className="w-full flex items-center gap-[10px] px-9">
                <div className="w-2 h-4 bg-sec700" />
                <p className="text-base text-black font-medium">
                  Download Form Model
                </p>
              </div>

              {/* LIST OF MODELS */}
              <div className="w-full flex gap-[10px] px-9">
                <div className="w-[110px] h-[109px] rounded overflow-hidden">
                  <Image
                    src={require("@/assets/images/xlsm.png")}
                    alt="xlsm model"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-[10px] py-6">
              <div className="w-full flex items-center gap-[10px] px-9">
                <div className="w-2 h-4 bg-sec700" />
                <p className="text-base text-black font-medium">Upload File</p>
              </div>

              <div className="w-full flex flex-col gap-[10px] px-9">
                <FilledButton
                  text="Upload File"
                  btnClass="border border-sec700 flex-row-reverse"
                  pClass="text-sec700 text-sm font-medium"
                  image={require("@/assets/icons/upload-sec700.svg")}
                />
                <div className="w-full bg-grey100 py-1 border border-grey200 rounded flex items-center justify-center">
                  <p className="text-xs text-grey700 font-medium">
                    File name.xlsm
                  </p>
                </div>
                <div className="w-full  rounded flex items-center justify-center gap-4">
                  <Image
                    src={require("@/assets/icons/pencil-grey700.svg")}
                    alt="edit xlsm"
                    className="w-4 h-4 object-cover"
                  />
                  <Image
                    src={require("@/assets/icons/delete-red.svg")}
                    alt="delete xlsm"
                    className="w-4 h-4 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
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
      <div className="w-full flex justify-between mb-12">
        <div>
          <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
          <p className="text-sm font-medium text-grey500">
            Remaining Packages: 123
          </p>
          <p className="text-sm font-medium text-grey500">
            Remaining items: 123
          </p>
        </div>

        <div className="w-fit flex items-center gap-5">
          <div className="w-full flex items-canter gap-2">
            {/* RADIO BUTTON */}
            <div
              className=" w-6 h-6 cursor-pointer flex item-center justify-center"
              onClick={() => setIsAutomatic(!isAutomatic)}
            >
              {isAutomatic ? (
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
            <p className="text-base whitespace-nowrap">Automatic Numbering</p>
          </div>
          <FilledButton
            text="Upload File"
            image={require("@/assets/icons/upload-sec700.svg")}
            btnClass="border rounded border-sec700 px-8"
            pClass="text-sec700 "
            cta={() => {
              setDistribution(true);
            }}
          />
        </div>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-5 mb-[50px]"
        >
          <div className="w-full flex flex-col gap-7">
            <div className="flex items-center gap-[26px]">
              <InputFade
                type="number"
                label="Item Number"
                placeholder="Enter Number"
                iClass=""
                iwClass=""
              />

              <InputFade type="text" label="Product" placeholder="Enter" />
            </div>
            <div className="flex items-center gap-[26px]">
              <InputFade
                type="number"
                label="Purchase Order Number"
                placeholder="Enter Number"
              />

              <InputFade type="text" label="Line" placeholder="Enter" />
            </div>

            <div className="w-full flex items-center gap-[26px]">
              <div className="w-full flex item-center gap-4">
                <InputFade
                  type="text"
                  label="Number of Packages"
                  placeholder="Enter Number"
                />
                <InputFade
                  type="text"
                  label="Item Quantity"
                  placeholder="Enter Number"
                />
              </div>

              <div className="w-full flex items-end justify-end gap-[26px]">
                <InputFade
                  label="Locations"
                  type="number"
                  placeholder="Enter"
                />
                <FilledButton
                  text="Scan"
                  btnClass="!flex-row-reverse !w-fit"
                  pClass="text-sec700 text-sm font-medium"
                />
              </div>
            </div>

            <div className="flex items-start gap-[26px]">
              <div className="w-full flex flex-col gap-3">
                <p>Pallet Dimensions</p>
                <div className="flex items-center gap-4">
                  <InputFade
                    type="number"
                    label="Length"
                    placeholder="Enter Number"
                  />
                  <InputFade
                    type="number"
                    label="Width"
                    placeholder="Enter Number"
                  />
                  <InputFade
                    type="number"
                    label="Height"
                    placeholder="Enter Number"
                  />
                </div>
              </div>

              <DropDownFade
                type="text"
                value={customer}
                setValue={setCustomer}
                label="Pellet Status"
                placeholder="Select Status"
                data={codes}
              />
            </div>

            <div className="flex items-center gap-[26px]">
              <InputFade
                type="number"
                label="Total Cubic Meters"
                placeholder="Auto-Calculate"
                iwClass="!flex-row !gap-4 !h-fit !items-center"
                lClass="whitespace-nowrap"
                isDisabled={true}
              />
              <InputFade
                type="number"
                label="Pellet number"
                placeholder="Enter Number"
                iwClass="-mt-8"
              />
            </div>

            <div className="w-1/2 flex items-center gap-[26px]">
              <div className="w-full flex flex-col flex-start">
                <p>Is there any damage?</p>
                <div className="flex gap-7 items-center">
                  <RadioCheck text="Yes" checked={yes} setChecked={setYes} />
                  <RadioCheck text="No" checked={no} setChecked={setNo} />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center gap-[26px]">
              <TextArea
                setValue={() => {}}
                label="Damage Details"
                placeholder=""
                type="text"
              />
              <div className="w-full"></div>
            </div>
          </div>
        </form>
        <div className="w-full flex items-center mt-12">
          <FilledButton
            text="Add More"
            btnClass="border border-sec700 rounded !w-fit px-[30px]"
            image={require("@/assets/icons/add-sec700.svg")}
            pClass="text-sec700 text-lg font-medium whitespace-nowrap"
          />
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
    </div>
  );
};

export default DistributionDetails;
