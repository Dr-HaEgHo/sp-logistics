"use client";
import { FilledButton } from "@/components/Button";
import {
  DateInputFade,
  DropDownFade,
  FileInputFade3,
  InputFade,
  PlateInputFade,
} from "@/components/Input";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DriverTable from "@/components/transportation/fleet/DriverTable";
import { truckTypes, vehicleCountries } from "@/data";

const nationalities = [
  { id: 1, name: "Foreign" },
  { id: 2, name: "Local" },
  { id: 3, name: "Others" },
];

const AddTruck = () => {
  const [truckType, setTruckType] = useState<string>("");
  const [vehicleCountry, setVehicleCountry] = useState<string>("");

  return (
    <div className="w-full mt-12">
   

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-12">
          <div className="w-full grid grid-cols-2 gap-[26px]">

              <DropDownFade
                type="text"
                value={vehicleCountry}
                setValue={setVehicleCountry}
                label="Vehicle Country"
                placeholder="Select"
                data={vehicleCountries}
              />
<PlateInputFade
  type="text"
  label="Plate Number"
  placeholder="Enter Number"
/>

          <DropDownFade
              type="text"
              value={truckType}
              setValue={setTruckType}
              label="Truck Type"
              placeholder="Select"
              data={truckTypes}
              />

            <InputFade
              type="text"
              label="Vehicle Serial Number"
              placeholder="Enter"
            />
            <InputFade
              type="text"
              label="Owner's Name"
              placeholder="Enter"
            />
            <InputFade
              type="text"
              label="Chassis Number"
              placeholder="Enter"
            />
            <InputFade
              type="text"
              label="Truck’s Name"
              placeholder="Enter"
            />
            <InputFade
              type="text"
              label="Owner ID Number"
              placeholder="Enter"
            />
            <InputFade
              type="text"
              label="Year of Manufacturing"
              placeholder="Enter"
            />
            <InputFade
              type="text"
              label="Truck Color"
              placeholder="Enter"
            />


        

            <DateInputFade
              label="ID / Iqama expiry date"
              id="1"
              placeholder=""
              value
            />

            <div className="flex items-center gap-4">
            <FileInputFade3
              id=""
              label="Vehicle registration"
              placeholder="Upload File"
              value
            />
            <FileInputFade3
              id=""
              placeholder="Upload File"
              value
              label="."
              lClass="!text-white"
            />
            </div>
          </div>

          <div className="w-full flex justify-end mt-12 gap-4">
            <FilledButton
              text="Save & Add More"
              image={require("@/assets/icons/add-sec700.svg")}
              btnClass="border border-sec700 !flex-row-reverse !w-fit p-4"
              pClass="text-sec700 text-lg"
            />
            <FilledButton
              text="Save"
              btnClass="border border-primary bg-primary !flex-row-reverse !w-fit p-4"
              pClass="text-white text-lg"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTruck;
