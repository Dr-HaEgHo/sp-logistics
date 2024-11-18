import { FilledButton } from "@/components/Button";
import {
  DropDownFade,
  InputFade,
  PlateInputFade,
  PrefixInput,
} from "@/components/Input";
import Modal from "@/components/Modal";
import { contCodes as codes, vehicleCountries as countries } from "@/data";
import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContainerDetails = () => {
  const [openView, setOpenView] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("");
  const [country2, setCountry2] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [nationality2, setNationality2] = useState<string>("");

  return (
    <div className="w-full bg-white px-10 py-5 flex flex-col-reverse items-start gap-8 relative">
      <Modal isOpen={openView} setIsOpen={setOpenView}>
        <div className="w-[1320px] min-w-[844px] min-h-[400px] max-h-[800px] slim-scroll pb-10 bg-white relative">
          {/* HEader Bar */}

          <div>
            <div className="px-10 pt-10 bg-white relative">
              <div className="w-2 h-[17px] absolute left-0 bg-sec700 top-12" />
              <div className="mb-4">
                <h4 className="font-medium text-[22px] text-grey1000 text-center">
                  Driver Information IN / OUT
                </h4>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-[22px] text-grey1000 text-left">
                  Vehicle and Driver Information at Drop-off
                </h4>
              </div>
              {/* <FileStatusTable /> */}
            </div>

            <div className="px-10 pt-4 bg-white grid grid-cols-2 gap-[26px]">
              <DropDownFade
                type="text"
                placeholder="Select"
                label="Vehicle Country"
                data={countries}
                value={country}
                setValue={setCountry}
              />

              <InputFade
                type="text"
                label="Driver Name"
                placeholder="Name Surname"
                lClass="text-base text-grey1000 font-normal"
              />

              <PlateInputFade
                label="Plate Number"
                lClass="text-grey1000"
                placeholder="1234"
                type=""
              />

              <InputFade
                type="text"
                label="ID / Iqama Number"
                placeholder="786543210987"
                lClass="text-base text-grey1000 font-normal"
              />

              <InputFade
                type="text"
                label="Custom Seal No"
                placeholder="786543210987"
                lClass="text-base text-grey1000 font-normal"
              />

              <DropDownFade
                type="text"
                placeholder="Select"
                label="Nationality"
                data={countries}
                value={nationality}
                setValue={setNationality}
              />

              <InputFade
                type="text"
                label="Date In"
                placeholder="786543210987"
                lClass="text-base text-grey1000 font-normal"
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

            <div className="px-10 pt-10 bg-white relative">
              <div className="mb-4">
                <h4 className="font-medium text-[22px] text-grey1000">
                  Vehicle and Driver Information at Pickup
                </h4>
              </div>
            </div>

            <div className="px-10 pt-4 bg-white grid grid-cols-2 gap-[26px]">
              <DropDownFade
                type="text"
                placeholder="Select"
                label="Vehicle Country"
                data={countries}
                value={country}
                setValue={setCountry}
              />

              <InputFade
                type="text"
                label="Driver Name"
                placeholder="Name Surname"
                lClass="text-base text-grey1000 font-normal"
              />

              <PlateInputFade
                label="Plate Number"
                lClass="text-grey1000"
                placeholder="1234"
                type=""
              />

              <InputFade
                type="text"
                label="ID / Iqama Number"
                placeholder="786543210987"
                lClass="text-base text-grey1000 font-normal"
              />

              <InputFade
                type="text"
                label="Custom Seal No"
                placeholder="786543210987"
                lClass="text-base text-grey1000 font-normal"
              />

              <DropDownFade
                type="text"
                placeholder="Select"
                label="Nationality"
                data={countries}
                value={nationality}
                setValue={setNationality}
              />

              <InputFade
                type="text"
                label="Date In"
                placeholder="786543210987"
                lClass="text-base text-grey1000 font-normal"
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
          </div>
        </div>
      </Modal>

      <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

      <div className="flex flex-[1] flex-col bg-grey100 border border-grey300 rounded py-10 px-5">
        <h4 className="text-[22px] text-black font-medium mb-7">
          Container Yard- Movement Type - File Ref #12345667889
        </h4>
        {/* <h5 className="font-medium text-base text-grey1000 mb-3">CUSTOMER NAME</h5> */}
        {/* <p className="text-sm text-dark700 py-3 mb-7">Consignee: XYZ Trading Co.</p> */}

        <div className="w-full grid grid-cols-2">
          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              CUSTOMER
            </h5>
            <p className="text-sm text-dark700 py-3">Customer Name</p>
          </div>

          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              BILL OF LOADING
            </h5>
            <p className="text-sm text-dark700 py-3">ABC Exports Ltd.</p>
          </div>

          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              CUSTOMER REF NO
            </h5>
            <p className="text-sm text-dark700 py-3">Select</p>
          </div>

          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              DELIVERY TO
            </h5>
            <div className="flex items-center gap-3">
              <p className="w-[34px] h-[33px] rounded-full border border-black flex items-center justify-center text-sm text-dark700 py-3">
                Yes{" "}
              </p>
              <p className="text-sm text-dark700 py-3">/ </p>
              <p className="text-sm text-dark700 py-3">No </p>
            </div>
          </div>
        </div>

        <h4 className="text-[22px] text-black font-medium mb-7">
          Container Information
        </h4>

        {/* GRID TABLE */}
        <div className="w-full grid grid-cols-7">
          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              Container <br /> number
            </h5>
            <p className="text-sm text-dark700 py-3">Letters|Numbers</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              Container <br /> Size
            </h5>
            <p className="text-sm text-dark700 py-3">Size</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              Container <br /> Type
            </h5>
            <p className="text-sm text-dark700 py-3">type</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              Customer Seal
              <br /> No
            </h5>
            <p className="text-sm text-dark700 py-3">Number</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              Driver Info
              <br /> In/Out
            </h5>
            <p
              onClick={() => setOpenView(true)}
              className="text-sm text-sec700 py-3 cursor-pointer hover:underline active:no-underline"
            >
              View
            </p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              Container <br /> Location
            </h5>
            <p className="text-sm text-dark700 py-3">View as pre action</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">Status</h5>
            <p className="text-sm text-dark700 py-3">As per action</p>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full ">
        <div className="w-full flex gap-7">
          <button className="w-fit h-9 bg-success rounded flex items-center justify-center hover:bg-successHover transition duration-200">
            <p className="w-[125px] h-full flex items-center justify-center text-xs font-semibold text-grey1000">
              Status
            </p>
            <div className="px-[6px] py-3 border-l border-successHover flex items-center h-full justify-center">
              <ArrowDown2 variant="Bold" size={12} className="text-grey1000" />
            </div>
          </button>
          <FilledButton
            text="Edit"
            image={require("@/assets/icons/edit-black.svg")}
            btnClass="!w-fit !justify-start !gap-4"
            pClass="text-grey900 text-sm font-medium"
          />
          <FilledButton
            text="Print file info"
            image={require("@/assets/icons/printer-black.svg")}
            btnClass="!w-fit !justify-start !gap-4"
            pClass="text-grey900 text-sm font-medium "
          />
          <FilledButton
            text="Delete"
            image={require("@/assets/icons/delete-red.svg")}
            btnClass="!w-fit !justify-start !gap-4"
            pClass="text-primary text-sm font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerDetails;
