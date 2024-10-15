'use client'
import { FilledButton } from "@/components/Button";
import { DropDownFade, InputFade } from "@/components/Input";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DriverTable from "@/components/transportation/fleet/DriverTable";



const nationalities = [
    {id: 1, name:"Foreign"},
    {id: 2, name:"Local"},
    {id: 3, name:"Others"}
]

const Drivers = () => {

    const [ nationality, setNationality] = useState<string>('')

  return (
    <div className="w-full mt-12">
      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-12">
          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter Name"
              label="Driver Name"
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
                  color: "#333",
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

          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="number"
              placeholder="Enter Number"
              label="Iqama Number"
            />

            <DropDownFade
              type="text"
              value={nationality}
              setValue={setNationality}
              label="Nationality"
              placeholder="Select Status"
              data={nationalities}
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
        <DriverTable/>
      </div>
    </div>
  );
};

export default Drivers;
