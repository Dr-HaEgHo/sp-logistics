// DeliveryProof

import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import DeliveryProofTable from "./DeliveryProofTable";

const DeliveryProof = () => {
  const router = useRouter();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="w-full">
      <div className="w-full bg-white p-10 relative mb-14">
        <div className="w-2 h-[17px] bg-sec700 absolute left-0" />

        {/* TITLE AND DROP DOWN */}
        <div className="w-full flex items-start justify-between mb-10">
          <p className="text-base text-grey1000 font-semibold ">
            Proofs Of Receipt
          </p>
        </div>

        <div className="w-full flex flex-col">
          <DeliveryProofTable />
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
    </div>
  );
};

export default DeliveryProof;
