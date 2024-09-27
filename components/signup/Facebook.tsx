"use client";
import React, { useContext, useEffect } from "react";
import { FilledButton } from "../Button";
import { useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/context/context";
import Image from "next/image";
import TitleHeader from "../TitleHeader";

const Facebook = () => {
  const router = useRouter();

  const search = useSearchParams()
  const channel = new URLSearchParams(search).get('channel')
  const { setChild } = useContext(GlobalContext)

  const setRoute = (): string => {
    let route: string = '/';
    switch(channel){
        case "instagram" : route = '/signup/connect-instagram?page=1' ;
        break;
        case "whatsapp" : route = '/signup/connect-whatsapp?page=1' ;
        break;
        case "facebook" : route = '/signup/connect-facebook' ;
        break;
        default : route = '/signup/connect-facebook'
     }

    return route
  } 

  const setChannel = () => {

    let channelData = {
      channel: '',
      color: '',
      image: "",
      mural: ""
    }

    switch(channel){
      case "instagram" : channelData = {
        channel: 'facebook',
        // color: 'bg-insta hover:bg-instaHover',
        color: 'bg-appBlue hover:bg-appBlueHover',
        image: require('../../assets/icons/facebookWhite.svg'),
        mural: require('../../assets/images/insta-mural.svg'),
      } ;
      break;
      case "whatsapp" : channelData = {
        channel: 'facebook',
        // color: 'bg-whatsapp hover:bg-whatsappHover',
        color: 'bg-appBlue hover:bg-appBlueHover',
        image: require('../../assets/icons/facebookWhite.svg'),
        mural: require('../../assets/images/wa-mural.svg')
      } ; ;
      break;
      case "facebook" : channelData = {
        channel: 'facebook',
        color: 'bg-appBlue hover:bg-appBlueHover',
        image: require('../../assets/icons/facebookWhite.svg'),
        mural: require('../../assets/images/meta-mural.svg')
      } ; ;
      break;
      default : channelData = {
        channel: 'facebook',
        color: 'bg-appBlue hover:bg-appBlueHover',
        image: require('../../assets/icons/facebookWhite.svg'),
        mural: require('../../assets/images/meta-mural.svg')
      } ;
   }

   return channelData;
  }

  useEffect(() => {
    setChild(
      <div className="w-full h-full">
        <Image
          src={setChannel().mural}
          alt="meta business mural"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }, [channel])

  return (
    <div>
      <TitleHeader
        title="Sign Up to ChatBoomer"
        subtitle="Sign Up to create an account"
      />
      <p className="text-textBody w-full mx-auto text-links lh-150 text-center mb-8">
        <span className="font-bold">ChatBoomer</span> needs specific permissions to create automations <br />
        for Messenger, Instagram, and WhatsApp. Click the button to allow access.
      </p>
      <FilledButton
        cta={() => {
          router.push(setRoute());
        }}
        text={`Continue with ${setChannel().channel}`}
        image={setChannel().image}
        btnClass={setChannel().color}
        pClass="text-white"
      />
      <div>
        <p className="text-textSec text-linkSmall text-center mt-8">
          By signing up, you agree to ChatBoomer's
          <br />
          <span>
            <a href="#" className="text-appBlue">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-appBlue">
              Privacy Policy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Facebook;
