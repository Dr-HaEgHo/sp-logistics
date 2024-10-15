import Image from "next/image";
import React, { FC } from "react";
import { FilledButton } from "../Button";
import { useSearchParams } from "next/navigation";

interface TransportCardProps {
  data: {
    id: number;
    customerName: string;
    cRefNo: string;
    fileRef: string;
    billOfLadingNo: string;
    pickupFrom: string;
    pickupDate: string;
    deliveryTo: string;
    deliveryDate: string;
    truckType: string;
    weight: string;
    noOfTrucks: string;
    fileStatus: string
  };
}

//   id,
//     customerName,
//     cRefNo,
//     fileRef,
//     billOfLadingNo,
//     pickupFrom,
//     pickupDate,
//     deliveryTo,
//     deliveryDate,
//     truckType,
//     weight,
//     noOfTrucks,

const TransportCard: FC<TransportCardProps> = ({
  data: {
    id,
    customerName,
    cRefNo,
    fileRef,
    billOfLadingNo,
    pickupFrom,
    pickupDate,
    deliveryTo,
    deliveryDate,
    truckType,
    weight,
    noOfTrucks,
    fileStatus
  },
}) => {
  const search = useSearchParams();
  const tab = new URLSearchParams(search).get("tab");

  return (
    <div className="w-full rounded-[20px] border border-grey300 p-5 flex flex-col gap-4">
      <h4 className="font-semibold text-lg text-black text-center">
        {customerName || "Customer Name"}
      </h4>
      <div className="w-full flex gap-[10px] items-start">
        <div className="flex flex-[1] flex-col gap-2">
          <p className="text-lg font-normal text-black">{ cRefNo || 'Customer Ref NO.'}</p>
          <p className="text-lg font-normal text-black">{ fileRef || 'File Ref'}</p>
          <p className="text-lg font-normal text-black">{ billOfLadingNo || 'Bill of Lading NO.'}</p>
        </div>

        <div className="flex flex-[1] flex-col gap-4">
          <div className="w-full flex items-start gap-[10px]">
            {/* POINT IMAGE */}
            <div className="relative h-fit flex flex-col justify-center gap-[6px]">
              <Image
                src={require("@/assets/icons/point.svg")}
                alt="point icon"
                className="mt-2"
              />
              <Image
                src={require("@/assets/icons/point-arrow.svg")}
                alt="point-arrow icon"
                className="absolute top6px left-1/2 transform -translate-x-1/2"
              />
            </div>
            {/* TEXTS */}
            <div className="flex flex-col gap-[2px]">
              <p className="text-lg font-medium text-black">{ pickupFrom || 'Pick-up From'}</p>
              <p className="text-[13px] font-medium text-hover1">
                { pickupDate || 'Pickup Date & Time' }
              </p>
            </div>
          </div>

          <div className="w-full flex items-start gap-[10px]">
            {/* POINT IMAGE */}
            <div className="relative h-fit flex flex-col items-start justify-center gap-[6px]">
              <Image
                src={require("@/assets/icons/point.svg")}
                alt="point icon"
                className="mt-2"
              />
            </div>
            {/* TEXTS */}
            <div className="flex flex-col gap-[2px]">
              <p className="text-lg font-medium text-black">{ deliveryTo || 'Delivery To'}</p>
              <p className="text-[13px] font-medium text-hover1">
                { deliveryDate  || 'Delivery Date & Time'}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-2">
        <div className="rounded bg-hover2 flex flex-[1] items-center justify-center">
          <p className="text-black text-sm font-medium">{ truckType || 'Truck Type'}</p>
        </div>
        <div className="rounded bg-hover2 flex flex-[1] items-center justify-center">
          <p className="text-black text-sm font-medium">{ weight || 'Weight'}</p>
        </div>
        <div className="rounded bg-hover2 flex flex-[1] items-center justify-center">
          <p className="text-black text-sm font-medium">
            { noOfTrucks || 'NO of trucks/Container'}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-[10px]">
        <FilledButton
          text={fileStatus || "File Status"}
          pClass={`text-grey1000 text-xs font-medium ${tab === "1" && '!text-white'}`}
          btnClass={`!w-fit px-[10px] h-10 flex items-center justify-center rounded ${ 
            tab === "1" ? 'bg-grey700' :
            tab === "2" ? 'bg-fsYellow' :
            tab === "3" ? 'bg-fsBlue' :
            tab === "4" ? 'bg-fsLilac' :
            tab === "5" ? 'bg-fsGreen' :
            tab === "6" ? 'bg-fsGrey' :
            tab === "7" ? 'bg-fsRed' : ""
        }`}
        />
        <FilledButton
          text="View"
          pClass="text-sec700 text-lg font-medium"
          btnClass="!w-fit h-10 p-4 border-sec700 border rounded"
        />
      </div>
    </div>
  );
};

export default TransportCard;
