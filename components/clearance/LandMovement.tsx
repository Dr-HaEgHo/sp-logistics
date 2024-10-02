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
  CloseCircle,
  SearchNormal1,
} from "iconsax-react";
import Table from "../Table";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../Modal";
import DeliveryTable from "../DeliveryTable";
import DeliveryFilled from "../DeliveryFilled";
import { DeliveryProps } from "@/types";
import FileStatusTable from "../FileStatusTable";
import DriverTable from "../DriverTable";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

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

const LandMovement = () => {
  const router = useRouter();
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [customer, setCustomer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [addDriverOpen, setAddDriverOpen] = useState<boolean>(false);
  const [consigneeOpen, setConsigneeOpen] = useState<boolean>(false);
  const [shipperOpen, setShipperOpen] = useState<boolean>(false);
  const [consignee, setConsignee] = useState<DeliveryProps | null>(null);
  const [shipper, setShipper] = useState<DeliveryProps | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Land Movement Type");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={consigneeOpen} setIsOpen={setConsigneeOpen}>
        <div className="min-w-[844px] max-h-[504px] slim-scroll relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0">
            <div className="px-10 py-4 bg-white ">
              <p className="text-base text-grey1000 font-medium">
                Select Delivery Location
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
                Select Delivery Location
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

      <Modal isOpen={addDriverOpen} setIsOpen={setAddDriverOpen}>
        <div className="w-[1320px] min-w-[844px] min-h-[400px] max-h-[900px] slim-scroll bg-white relative">
          {/* HEader Bar */}

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">
                Truck Information
              </h4>
            </div>
            {/* <FileStatusTable /> */}
            <div className="pt-4 bg-white grid grid-cols-2 gap-[26px]">
              <DropDownFade
                type="text"
                placeholder="Select Country"
                label="Vehicle Country"
                data={codes}
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="Truck Serial Number"
                placeholder="Enter"
                lClass="text-base text-grey1000 font-normal"
              />

              <DropDownFade
                type="text"
                placeholder="Select City"
                label="Vehicle City"
                data={codes}
                setValue={() => {}}
              />
              <InputFade
                type="text"
                label="Owner ID"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter"
              />
              <InputFade
                type="text"
                label="Plate Number"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter number"
              />
              <InputFade
                type="text"
                label="Plate Code"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter Plate Code"
              />

              <DropDownFade
                type="text"
                placeholder="Select Vehicle Type"
                label="Vehicle Type"
                data={codes}
                setValue={() => {}}
              />

              <DropDownFade
                type="text"
                placeholder="Select Plate Type"
                label="Plate Type"
                data={codes}
                setValue={() => {}}
              />

              <DropDownFade
                type="text"
                placeholder="Select"
                label="Chassis Number"
                data={codes}
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="RFID card number"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter"
              />

              <DropDownFade
                type="text"
                placeholder="Select"
                label="Truck Immersion No"
                data={codes}
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="Truck Color"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter"
              />

              <DropDownFade
                type="text"
                placeholder="Select"
                label="Model Number"
                data={codes}
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="WATHIQA Number"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter"
              />
            </div>
          </div>

          <div className="px-10 pt-10 bg-white relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">
                Driver Information
              </h4>
            </div>
            <div className="pt-4 bg-white grid grid-cols-2 gap-[26px]">
              <InputFade
                type="text"
                label="ID/Residence Number"
                placeholder="Enter"
                lClass="text-base text-grey1000 font-normal"
              />

              <DateInputFade
                id=""
                value
                type="text"
                placeholder="DD/MM/YY"
                label="Vehicle City"
                setValue={() => {}}
              />

              <DropDownFade
                type="text"
                label="Country of Residence"
                placeholder="Select"
                data={codes}
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="Passport Number"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter"
              />

              <InputFade
                type="text"
                label="Driver Licence"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter Number"
              />

              <DropDownFade
                type="text"
                placeholder="Select"
                label="Nationality"
                data={codes}
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="Driver's Name in Arabic"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter Name"
              />

              <DateInputFade
                id=""
                value
                type="text"
                placeholder="DD/MM/YY"
                label="Date of Birth"
                setValue={() => {}}
              />

              <InputFade
                type="text"
                label="Driver's Name in English"
                lClass="text-base text-grey1000 font-normal"
                placeholder="Enter Name"
              />

              <div className="w-full flex flex-col input-wrap !p-0">
                <label className="labels">Mobile Number</label>
                <PhoneInput
                  country={"sa"}
                  placeholder="Enter phone number"
                  value=""
                  // onChange={}
                  searchStyle={{
                    width: "100%",
                    display: "flex",
                    gap: "14px",
                  }}
                  inputStyle={{
                    width: "100%",
                    height: 40,
                    padding: "10px 70px",
                    border: "1px #888888 solid",
                    background: "none",
                    fontSize: "15px",
                    color: "#333"
                  }}
                  buttonStyle={{
                    border: "1px #888888 solid",
                    background: "none",
                    padding: "10px ",
                    width: 60,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="px-10 my-[60px] bg-white flex items-center gap-4 justify-end">
            <FilledButton
              text="Save & Add more"
              image={require("../../assets/icons/add-sec700.svg")}
              btnClass="border border-sec700 rounded !w-fit px-4 !h-fit"
              pClass="font-medium text-sec700 text-lg"
              cta={() => {
                setAddDriverOpen(false);
              }}
            />
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-[50px]">
          <div className="w-full flex items-start gap-[26px]">
            {consignee !== null ? (
              <DeliveryFilled
                label="Consignee"
                data={consignee}
                setData={setConsignee}
              />
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

            {shipper !== null ? (
              <DeliveryFilled
                label="Shipper"
                data={shipper}
                setData={setShipper}
              />
            ) : (
              <FileInputFade
                id="select customer"
                placeholder="Select from Customer File"
                label="Shipper"
                value=""
                cta={() => {
                  setShipperOpen(!shipperOpen);
                }}
              />
            )}
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="number"
              label="Gross Weight"
              placeholder="Select your company type"
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Number of Parcels"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="number"
              placeholder="Enter Number"
              label="Truck Type"
              data={codes}
              setValue={() => {}}
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Number of Trucks"
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
              placeholder="Enter PRIFEX Code"
              label="Port of Loading"
            />
            <InputFade
              type="text"
              placeholder="Enter PRIFEX Code"
              label="Arrival Port"
            />
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col justify-between mb-12">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0 mt-2" />
        <h2 className="font-medium text-[22px] text-black">
          Driver Information
        </h2>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto mb-12">
        <div className="w-full flex items-center justify-start mb-7">
          <FilledButton
            text="Add Drivers&Trucks"
            image={require("../../assets/icons/add-sec700.svg")}
            btnClass="border border-sec700 rounded !px-4 !py-[9px] !w-fit !h-fit"
            pClass="font-medium text-sec700 text-lg"
            cta={() => {
              setAddDriverOpen(true);
            }}
          />
        </div>
        <div>
          <DriverTable />
        </div>
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

export default LandMovement;
