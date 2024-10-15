"use client";
import { FilledButton } from "@/components/Button";
import { DropDownFade, InputFade, PlateInputFade } from "@/components/Input";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import TruckTable from "@/components/transportation/fleet/TruckTable";
import { truckTypes, vehicleCountries } from "@/data";



const Trucks = () => {
  const [truckType, setTruckType] = useState<string>("");
  const [vehicleCountry, setVehicleCountry] = useState<string>("");

  return (
    <div className="w-full mt-12">
      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-12">
          <div className="w-full flex items-center gap-[26px]">
            <PlateInputFade
              type="text"
              label="Plate Number"
              placeholder="Enter Number"
            />
            <InputFade
              type="text"
              label="Truck's Name"
              placeholder="Enter Name"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DropDownFade
              type="text"
              value={truckType}
              setValue={setTruckType}
              label="Truck Type"
              placeholder="Select"
              data={truckTypes}
            />
            <DropDownFade
              type="text"
              value={vehicleCountry}
              setValue={setVehicleCountry}
              label="Vehicle Country"
              placeholder="Select"
              data={vehicleCountries}
            />
          </div>

          <div className="w-full flex items-end justify-end my-6 gap-6">
            <FilledButton
              text="Advanced Search"
              image={require("@/assets/icons/filter-red.svg")}
              btnClass="!flex-row-reverse !w-fit"
              pClass="text-primary text-sm"
            />

            <FilledButton
              text="Clear"
              btnClass="!flex-row-reverse !w-fit !py-[9px]"
              pClass="text-grey1000 text-sm font-semibold"
            />
          </div>

          <div className="w-full grid grid-cols-2 gap-[26px]">
            <InputFade
              type="text"
              label="Vehicle Serial Number"
              placeholder="Enter Number"
            />

            <InputFade
              type="text"
              label="Owner's Name"
              placeholder="Enter Name"
            />

            <InputFade
              type="text"
              label="Chassis Number"
              placeholder="Enter Number"
            />

            <InputFade
              type="text"
              label="Owner ID Number"
              placeholder="Enter Number"
            />

            <InputFade
              type="text"
              label="Truck Color"
              placeholder="Enter Number"
            />

            <InputFade
              type="text"
              label="Year of Manufacturing"
              placeholder="Enter Number"
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

      <div className="w-full">
        <TruckTable />
      </div>
    </div>
  );
};

export default Trucks;
