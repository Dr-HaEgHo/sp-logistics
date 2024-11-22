'use client'
import React, { useContext, useState } from "react";
import CheckBox from "@/components/CheckBox";
import LocationsTable from "./LocationsTable";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import { FilledButton } from "../Button";
import Modal from "../Modal";
import { GlobalContext } from "@/context/context";

const Locations = () => {

    const { barcodeContainer, setBarcodeContainer } = useContext(GlobalContext)
    

  return (
    <div className="w-full">
        <Modal isOpen={barcodeContainer} setIsOpen={setBarcodeContainer}>
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
      <div className="w-full flex items-center justify-start gap-3 mb-7">
        <CheckBox checked={true} setChecked={() => {}}/>
        <p className="text-sm text-grey900 font-medium">All</p>
      </div>

      <div className="w-full flex flex-col">
        <LocationsTable />
        <div className="w-full bg-grey100 rounded-br rounded-bl border border-t-0 border-grey300 py-2 flex items-center justify-center gap-4">
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

export default Locations;
