import { OutlinedButton } from "@/components/Button";
import { GlobalContext } from "@/context/context";
import { NavProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC, useContext } from "react";

const Navbar = () => {
  const router = useRouter();

  const { navSignup } = useContext(GlobalContext);

  return (
    <div className="w-full py-8 flex items-center justify-between">
      <div className="gap-2">
        <Image
          src={require("../../assets/icons/Logo.svg")}
          alt="logo"
          className=" w-44"
          width={1024}
          height={1024}
        />
      </div>

      <div className="flex items-center gap-8">
        {navSignup?.language && (
          <div className="flex items-center gap-2">
            <Image
              src={require("../../assets/icons/language.svg")}
              alt="language"
              className="h-6 w-6"
              width={1024}
              height={1024}
            />
            <p className="text-textBody text-links">{navSignup?.language}</p>
          </div>
        )}
        {navSignup?.text && (
          <OutlinedButton
            cta={() => router.push(navSignup?.route as string)}
            text={navSignup?.text as string}
            btnClass={navSignup?.classes}
            pClass={navSignup?.pClass}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
