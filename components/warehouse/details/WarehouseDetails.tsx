import { FilledButton } from "@/components/Button";
import { ArrowDown2 } from "iconsax-react";
import React from "react";

const WarehouseDetails = () => {
  return (
    <div className="w-full bg-white px-10 py-5 flex items-start gap-8 relative">
      <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

      <div className="flex flex-[1] flex-col bg-grey100 border border-grey300 rounded py-10 px-5">
        <h4 className="text-[22px] text-black font-medium mb-7">
          Warehouse-branch - File Ref #12345667889
        </h4>
        {/* <h5 className="font-medium text-base text-grey1000 mb-3">CUSTOMER NAME</h5> */}
        {/* <p className="text-sm text-dark700 py-3 mb-7">Consignee: XYZ Trading Co.</p> */}

        <div className="w-full grid grid-cols-2">
          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              CUSTOMER NAME
            </h5>
            <p className="text-sm text-dark700 py-3">
              Consignee: XYZ Trading Co.
            </p>
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
              CONTRACT NUMBER
            </h5>
            <p className="text-sm text-dark700 py-3">50</p>
          </div>

          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">BRANCH</h5>
            <p className="text-sm text-dark700 py-3">12 000 kg</p>
          </div>

          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              GROSS WEIGHT
            </h5>
            <p className="text-sm text-dark700 py-3">1250</p>
          </div>

          <div className="w-full flex flex-col mb-5">
            <h5 className="font-medium text-base text-grey1000 mb-3">
              DELIVERY TO
            </h5>
            <p className="text-sm text-dark700 py-3">Electronics </p>
          </div>
        </div>

        <h4 className="text-[22px] text-black font-medium mb-7">
        Distribution Details
        </h4>

{/* GRID TABLE */}
        <div className="w-full grid grid-cols-8">

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
            Pallet <br /> number
            </h5>
            <p className="text-sm text-dark700 py-3">#1234</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
            Item <br /> Number
            </h5>
            <p className="text-sm text-dark700 py-3">23</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
              Product
            </h5>
            <p className="text-sm text-dark700 py-3">Lorem Ipsum</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
              PO Number &<br /> Line
            </h5>
            <p className="text-sm text-dark700 py-3">Lorem Ipsum</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
              Number of <br /> Pacakges
            </h5>
            <p className="text-sm text-dark700 py-3">#34</p>
          </div>

          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
              Item qty
            </h5>
            <p className="text-sm text-dark700 py-3">300</p>
          </div>
          
          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
              Location
            </h5>
            <p className="text-sm text-dark700 py-3">lorem ipsum</p>
          </div>
          
          <div className="w-full flex flex-col justify-between mb-5">
            <h5 className="font-medium text-xs text-grey1000 mb-3">
              Pellet Status
            </h5>
            <p className="text-sm text-dark700 py-3">lorem ipsum</p>
          </div>

        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-[147px] ">
        <div className="w-full flex flex-col gap-7">
          <FilledButton
            text="Confirm receipt"
            image={require("@/assets/icons/ok.svg")}
            btnClass="!justify-start border border-sec700"
            pClass="text-sec700 text-sm font-medium whitespace-nowrap"
          />
          <button className="w-full h-9 bg-success rounded flex hover:bg-successHover transition duration-200">
            <p className="w-full h-full flex items-center justify-center text-xs font-semibold text-grey1000">
              Paid
            </p>
            <div className="px-[6px] py-3 border-l border-successHover flex items-center h-full justify-center">
              <ArrowDown2 variant="Bold" size={12} className="text-grey1000" />
            </div>
          </button>
          <FilledButton
            text="Edit"
            image={require("@/assets/icons/edit-black.svg")}
            btnClass="!justify-start !gap-4"
            pClass="text-grey900 text-sm font-medium"
          />
          <FilledButton
            text="Print file info"
            image={require("@/assets/icons/printer-black.svg")}
            btnClass="!justify-start !gap-4"
            pClass="text-grey900 text-sm font-medium"
          />
          <FilledButton
            text="Delete"
            image={require("@/assets/icons/delete-red.svg")}
            btnClass="!justify-start !gap-4"
            pClass="text-primary text-sm font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetails;
