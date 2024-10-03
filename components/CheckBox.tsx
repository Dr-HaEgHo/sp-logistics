'use client'
import Image from "next/image";
import React, { useState } from "react";

const CheckBox = () => {

    const  [ checked, setChecked ] = useState<boolean>(false)

  return (
    <div
      className="cursor-pointer flex item-center justify-center"
      onClick={() => setChecked(!checked)}
    >
      {checked ? (
        <Image
          src={require("@/assets/icons/check.svg")}
          alt="unchecked"
          className="w-6 h-6 object-cover"
        />
      ) : (
        <Image
          src={require("@/assets/icons/checkbox.svg")}
          alt="unchecked"
          className="w-6 h-6 object-cover p-[1px]"
        />
      )}
    </div>
  );
};

export default CheckBox;
