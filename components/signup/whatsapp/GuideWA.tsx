import { FilledButton } from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const GuideWA = () => {

  const router = useRouter()
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full appShadow border-r border-l border-b  max-w-[528px] rounded-md overflow-hidden">
        <div className="w-full aspect-[2.01] bg-orange-400">
          <video
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            controls
            autoPlay={true}
            onEnded={() => {}}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-textBody text-links lh-150 text-left">
            Watch Tutorial: How to Connect WhatsApp
          </p>
        </div>
      </div>

      <div className="mt-4 w-full">
        <p className="text-textBody text-links lh-150 text-center mt-6">
        Follow the instructions to connect your new WhatsApp number to ChatBoomer.
        </p>
        <p className="text-textBody text-links lh-150 text-center mt-2">
        You’ll be prompted to provide a phone number for your WhatsApp <br /> integration. If you don’t have a number, you can use a 
          <span className="font-bold"> New Phone Number.</span>
        </p>
      </div>
      <div className="flex items-center gap-4 justify-between w-full max-w-[515px] mt-6 ">
        <FilledButton
          cta={() => {router.push('?page=2')}}
          text="Connect New Number"
          btnClass="bg-appOrange hover:bg-appOrangeHover px-6"
          pClass="text-white"
        />
        <FilledButton
          cta={() => {router.push('?page=3')}}
          text="Use My Own Number"
          btnClass="bg-secBtn hover:bg-white px-6 border border-secBorder"
          pClass="text-textBody"
        />
      </div>
    </div>
  );
};

export default GuideWA;
