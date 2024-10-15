"use client";
import { FilledButton } from "@/components/Button";
import { DateInputFade, DropDownFade, FileInputFade3, InputFade } from "@/components/Input";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import DriverTable from "@/components/transportation/fleet/DriverTable";

const nationalities = [
  { id: 1, name: "Foreign" },
  { id: 2, name: "Local" },
  { id: 3, name: "Others" },
];

const AddDriver = () => {
  const [nationality, setNationality] = useState<string>("");

  return (
    <div className="w-full">
      <h2 className="text-black text-[22px] font-medium mb-7 mt-12">
        Driver Information
      </h2>

      {/* Form section to fill details */}
      <div className="w-full mx-auto ">
        <form action="" className="flex flex-col gap-5 mb-12">
          <div className="w-full flex items-center gap-[26px]">
            <InputFade
              type="text"
              placeholder="Enter Name"
              label="Driver's Name"
            />

            <InputFade
              type="number"
              placeholder="Enter Number"
              label="ID / Iqama Number"
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
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

            <DropDownFade
              type="text"
              value={nationality}
              setValue={setNationality}
              label="Nationality"
              placeholder="Select Status"
              data={nationalities}
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DateInputFade
              label="License issue date"
              id="1"
              placeholder=""
              value
            />
            <DateInputFade
              label="License expiry date"
              id="1"
              placeholder=""
              value
            />
          </div>

          <div className="w-full flex items-center gap-[26px]">
            <DateInputFade
              label="ID / Iqama expiry date"
              id="1"
              placeholder=""
              value
            />

            <div className="w-full flex items-center gap-[10px]">
              <FileInputFade3
                id=""
                placeholder="Upload File"
                value
                label="ID / Iqama"
                removeIcon={true}
                />
              <FileInputFade3
                id=""
                placeholder="Upload File"
                value
                label="Driving License"
                removeIcon={true}
              />
            </div>
          </div>

          <div className="w-full flex justify-end mt-12 gap-4">
            <FilledButton
              text="Save & Add More"
              image={require('@/assets/icons/add-sec700.svg')}
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

export default AddDriver;
