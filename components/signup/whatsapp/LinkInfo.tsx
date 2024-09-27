import { FilledButton } from "@/components/Button";
import React, { Dispatch, FC, SetStateAction } from "react";

interface props {
  setOpen: Dispatch<SetStateAction<boolean>>
  
}
const LinkInfo:FC<props> = ({setOpen}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-head5 text-center text-textBody mb-6 font-bold w-full max-w-[515px]">
        Key information on linking your number
      </h3>

      <ul className="w-full max-w-[475px] list-disc">
        <li className="text-textBody text-links lh-150 text-left ">
          Once connected, personal phone numbers cannot be used for personal WhatsApp.
        </li>
        <li className="text-textBody text-links lh-150 text-left mt-3">
          Messaging customers is limited to 24 hours from their last interaction. Communication outside this window requires approved templates.
        </li>
        <li className="text-textBody text-links lh-150 text-left mt-2">
          Features like contact lists, broadcast lists, voice messages, audio calls, and group messaging will no longer be available in the WhatsApp app after connection.
        </li>
        <li className="text-textBody text-links lh-150 text-left mt-2">
        The WhatsApp Business App will no longer work with this number after connection.
        </li>
        <li className="text-textSec text-links text-left mt-4">
        Your chat history will not be transferred. Please consult the guides for backing up on {" "}
          <a href="#" className="text-appBlue">
            iPhone
          </a>
          {" "} and {" "}
          <a href="#" className="text-appBlue">
          Android
          </a>.
        </li>
        
      </ul>
      <div className="flex items-center flex-row-reverse gap-4 justify-between w-full max-w-[515px] mt-6 ">
        <FilledButton
          cta={() => {
            alert('Helllo')
            setOpen(true)
          }}
          text="Connect New Number"
          btnClass="bg-secBtn px-6 border border-secBorder"
          pClass="text-textBody"
        />
        <FilledButton
          cta={() => {setOpen(false)}}
          text="Proceed With Own Number"
          btnClass="bg-appOrange px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default LinkInfo;
