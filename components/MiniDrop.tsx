import Image from "next/image";
import React, { FC, useState } from "react";
import { SpinLoader } from "./Load";

interface MinidropProps {
  title: string;
  list: {
    id: number;
    name: string;
  }[];
  action: Function;
}

const MiniDrop: FC<MinidropProps> = ({ title, list, action }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div className="w-full h-fit">
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-full bg-bg2 px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-bg3 active:bg-bg2 transition duration-200 "
      >
        <h2 className="text-sm text-grey800 font-semibold">
          {title ? title : "Please wait..."}
        </h2>
        <Image
          src={require("@/assets/icons/arrow-up.svg")}
          alt="Arrow down"
          className={`transform transition duration-300 z-0 ${
            isOpen ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out pr-6 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {list && list.length ? (
          list.map((item) => (
            <div className="w-full py-2 px-4 border-b border-grey100">
              <div
                onClick={() => action(item.name)}
                className="w-fit flex item-center justify-center p-1 gap-2 rounded border-[0.5px] border-grey500 hover:bg-bg2 active:bg-bg3 transition duration-200 cursor-pointer"
              >
                <Image
                  src={require("@/assets/icons/pin.svg")}
                  alt="pin pin"
                  className={`transform transition duration-300 `}
                />
                <p className="text-normal text-grey800 text-sm">
                  {item.name.toUpperCase()}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full py-2 px-4 flex items-center justify-between gap-4 border-b border-grey100">
            <p className="twxt-grey500 text-sm font-normal">Please Wait</p>
            <div className="w-5 h-5">
              <SpinLoader />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MiniDrop;
