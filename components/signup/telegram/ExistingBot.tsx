'use client'
import { FilledButton } from "@/components/Button";
import { InputFade } from "@/components/Input";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

const ExistingBot = ({setConnect}: {setConnect: Function}) => {

  const { infoMsg ,setInfoMsg } = useContext(GlobalContext);

  const handleSetMsg = () => {
    setInfoMsg('We strongly recommend that you do what we ask you to do. t for thanks')
  }

  return (
    <div className="flex flex-col items-start">
      {/* <p className="text-textBody text-links lh-150 text-left ">
        Connect existing Telegram bot
      </p> */}
      

      <p className="text-textBody text-links lh-150 text-left ">
        This guide will help you create a new Telegram bot.
      </p>

      <div className="w-full flex flex-col gap-4 mt-6">
        <div className="w-full flex items-center gap-4">
          <Image
            src={require("../../../assets/icons/one.svg")}
            alt="point one"
          />
          <p className="text-textBody text-links lh-150 text-left">
            Open {" "}
            <a href="#" className="text-linkMain">
              @BotFather 
            </a>{" "}
            in Telegram and click <span className="font-bold"> /start </span>
          </p>
        </div>

        <div className="w-full flex items-center gap-4">
          <Image
            src={require("../../../assets/icons/two.svg")}
            alt="point two"
          />
          <p className="text-textBody text-links lh-150 text-left">
            Send
            <span className="font-bold"> /newbot </span>and follow the
            instructions
          </p>
        </div>

        <div className="w-full flex items-center gap-4">
          <Image
            src={require("../../../assets/icons/three.svg")}
            alt="point two"
          />
          <p className="text-textBody text-links lh-150 text-left">
            Once the bot is created, you will receive a message with the token.
            Copy token and paste it here
          </p>
        </div>
      </div>

      <div className="w-full flex mt-8">
        <InputFade
          type="email"
          label="Telegram bot token"
          placeholder="Enter token"
          lClass="!text-manyComet"
          value=""
        />
      </div>

      <div className="w-full flex items-center gap-2 mt-6">
        <FilledButton
          cta={() => {setConnect(true)}}
          text="Connect"
          btnClass="bg-appOrange hover:bg-appOrangeHover px-6"
          pClass="text-white"
        />
      </div>
    </div>
  );
};

export default ExistingBot;
