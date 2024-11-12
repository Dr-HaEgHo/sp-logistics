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
    branch?: string;
    gateNo: string;
    periodIn: string;
    fileStatus: string;
    barcode?: string;
    containerType: string; 
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
//     gateNo,
//     periodIn,
//     noOfPackages,

const ContainerCard: FC<TransportCardProps> = ({
  data: {
    id,
    customerName,
    cRefNo,
    fileRef,
    billOfLadingNo,
    branch,
    gateNo,
    periodIn,
    fileStatus,
    containerType
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
        </div>

        <div className="flex flex-[1] flex-col gap-4">
            <p className="text-lg font-normal text-black">{ billOfLadingNo || 'Bill of Lading NO.'}</p>
        </div>
      </div>


      <div className="w-full flex items-center gap-2">
        <div className="rounded bg-hover2 flex flex-[1] items-center justify-center">
          <p className="text-black text-sm font-medium">{ periodIn || 'Date&Time in'}</p>
        </div>
        <div className="rounded bg-hover2 flex flex-[1] items-center justify-center">
          <p className="text-black text-sm font-medium">
            { containerType || 'Container Type'}
          </p>
        </div>
      </div>

      <div className="w-full mx-auto max-w-[212px] flex items-center justify-center">
        <Image
            src={require('@/assets/icons/barcode.svg')}
            alt="item barcode"
        />

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

export default ContainerCard;
