"use client";
import { GlobalContext } from "@/context/context";
import React, { useContext, useEffect, useState } from "react";
import { FilledButton } from "../Button";
import Image from "next/image";
import { DropDownFade, InputFade, PrefixInput } from "../Input";
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
  ArrowRight3,
  CloseCircle,
} from "iconsax-react";
import Table from "../Table";
import { useRouter, useSearchParams } from "next/navigation";
import Modal from "../Modal";
import DeliveryTable from "../DeliveryTable";
import FlieActionTable from "../FileActionTable";
import FileStatusTable from "../FileStatusTable";

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

const Search = () => {
  const router = useRouter();
 
  const search = useSearchParams();
  const qTab = new URLSearchParams(search).get("tab");

  const { headerInfo, setHeaderInfo } = useContext(GlobalContext);
  const [modalOpen, setmodalOpen] = useState<boolean>(false);
  const [customer, setCustomer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  // set the header info in context on component mount
  useEffect(() => {
    setHeaderInfo("Search");
  }, []);

  return (
    <div className="w-full">
      <Modal isOpen={modalOpen} setIsOpen={setmodalOpen}>
        <div className="w-[1320px] min-w-[844px] min-h-[900px] slim-scroll bg-grey100 relative">
          {/* HEader Bar */}
          <div className="w-full sticky top-0 z-[999]">
            <div className="px-[60px] py-[34px] bg-white ">
              <p className="text-base text-grey1000 font-medium">
                Files From Other Departments
              </p>
            </div>
          </div>

          {/* Search */}
          <div className="px-10 pt-4 mb-[100px] bg-grey100">
            <FlieActionTable />

            {/* Accept All and Dismiss all buttons */}
            <div className="w-full flex items-center gap-4 justify-end mt-6">
              <div className="border border-sec700 rounded py-2 px-4 flex flex-row-reverse items-center justify-center gap-1">
                <FilledButton
                  text="Dismiss All"
                  pClass="font-medium text-sec700 text-lg"
                  btnClass="!w-fit !p-0"
                />
                <CloseCircle className="text-sec700 " size={24} />
              </div>

              <div className="bg-primary py-2 px-4 flex flex-row-reverse items-center rounded justify-center gap-1">
                <FilledButton
                  text="Accept All"
                  pClass="font-medium text-white text-lg"
                  btnClass="!w-fit !p-0 "
                />
                <CloseCircle className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="px-10 pt-4 bg-grey100 relative">
            <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-6"/>
            <div className="mb-4">
              <h4 className="font-medium text-[22px] text-grey1000">Sent Files History</h4>
            </div>
            <FileStatusTable />
          </div>


        </div>
      </Modal>
      {/* top section wwith the header Info */}
      <div className="w-full flex justify-between mb-12">
        <h2 className="font-medium text-[22px] text-black">{headerInfo}</h2>
        <div className="flex flex-col items-end gap-5">
          <FilledButton
            cta={() => {
              router.push("?dir=create-new");
            }}
            text="New File"
            image={require("../../assets/icons/Add.svg")}
            btnClass="bg-primary !w-fit !px-4"
            pClass="text-white font-medium text-lg"
          />
          <div className="flex items-center">
            <p className="text-grey900 text-base font -normal">
              Accept files from other departments
            </p>
            <Image
              src={require("../../assets/icons/upload.svg")}
              alt="upload button"
              className="w-7 h-7"
            />
          </div>
        </div>
      </div>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-12">
          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Customer"
              placeholder="Select your company type"
              data={codes}
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
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Movement Type"
              placeholder="Select type"
              data={codes}
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
              label="Status"
              placeholder="Select"
              data={codes}
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
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Container Number"
            />
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="BAYAN No"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="DRAFT Number"
            />

            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Port"
              placeholder="Select Port"
              data={codes}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={customer}
              setValue={setCustomer}
              label="Business Unit"
              placeholder="Select"
              data={codes}
            />
            <div className="w-full opacity-0">
              <InputFade
                type="number"
                placeholder="Enter Number"
                label="DRAFT Number"
              />
            </div>
          </div>

          <div className="w-full flex justify-end mt-1 ">
            <FilledButton
              text="Search"
              btnClass="border border-sec700 !flex-row-reverse !w-fit p-4"
              pClass="text-sec700 text-sm"
            />
          </div>
        </form>

        <div>
          <div className="flex items-center justify-start gap-4">
            <div className="flex items-center gap-2">
              <div
                className="cursor-pointer flex item-center justify-center"
                onClick={() => setChecked(!checked)}
              >
                {checked ? (
                  <Image
                    src={require("../../assets/icons/check.svg")}
                    alt="unchecked"
                    className="w-6 h-6 object-cover"
                  />
                ) : (
                  <Image
                    src={require("../../assets/icons/checkbox.svg")}
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
      </div>

      <div className="w-full mx-auto mt-4 rounded border border-grey300">
        <div className="w-full flex items-center rounded-tr rounded-tl border-b border-grey300 justify-between bg-bg2 p-4">
          <ul className="flex items-center">
            {tabs &&
              tabs.map((tab) => (
                <li
                  onClick={() => {
                    router.push(`clearance?dir=search&tab=${tab.title}`);
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
                    {tab?.title} ({tab?.count})
                  </p>
                </li>
              ))}
          </ul>

          <FilledButton
            text="Sort By"
            image={require("../../assets/icons/Sort.svg")}
            pClass="font-medium text-sm text-grey900"
            btnClass="!flex-row-reverse !w-fit !py-0"
          />
        </div>
        <Table />

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

export default Search;
