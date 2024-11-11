"use client";
import Image from "next/image";
import React, { FC, SetStateAction, useState } from "react";

interface radioProps {
  checked: boolean;
  setChecked: Function;
  text: string;
  rClass?: string;
  pClass?: string;
  size?: string;
}

const CheckBox = () => {
  const [checked, setChecked] = useState<boolean>(false);

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

export const RadioCheck: FC<radioProps> = ({
  checked,
  setChecked,
  text,
  rClass,
  pClass,
  size = "24px",
}) => {
  return (
    <div className={`flex items-center gap-2 mt-[26px] ${rClass && rClass}`}>
      {/* RADIO BUTTON */}
      <div
        className="cursor-pointer flex item-center justify-center"
        onClick={() => setChecked(!checked)}
      >
        {checked ? (
          <Image
            src={require("@/assets/icons/radio-on.svg")}
            alt="unchecked"
            style={{
              height: size,
              width: size,
            }}
          />
        ) : (
          <Image
            src={require("@/assets/icons/radio.svg")}
            alt="unchecked"
            style={{
              height: size,
              width: size,
            }}
          />
        )}
      </div>
      {text && <p className={`text-base text-grey1000 ${pClass}`}>{text}</p>}
    </div>
  );
};
