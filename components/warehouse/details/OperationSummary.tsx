// OperationSummary
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import OperationSummaryTable from "./OperationSummaryTable";


const OperationSummary = () => {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="w-full bg-white p-10 relative mb-14">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

        {/* TITLE AND DROP DOWN */}
        <div className="w-full flex items-start justify-between mb-10">
            <p className="text-base text-grey1000 font-semibold ">Account movement until 09/19/2024</p>
        </div>


        <div className="w-full flex flex-col gap-2">
            <OperationSummaryTable/>
        </div>
        
      </div>

    </div>
  );
};

export default OperationSummary;
