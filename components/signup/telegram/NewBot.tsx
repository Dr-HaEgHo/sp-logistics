import { BoundlessIconButton, FilledButton } from "@/components/Button";
import { InputFade } from "@/components/Input";
import Image from "next/image";
import React from "react";

const NewBot = ({setConnect} : {setConnect: Function}) => {
  return (
    <div className="w-full flex flex-col items-start">
      <p className="text-textBody text-links lh-150 text-left ">
        This instruction helps you to create a new Telegram bot.
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
            src={require("../../../assets/icons/two.svg")}
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

export default NewBot;
