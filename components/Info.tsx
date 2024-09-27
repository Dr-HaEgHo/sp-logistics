import { GlobalContext } from "@/context/context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const Info = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { infoMsg, setInfoMsg } = useContext(GlobalContext);

  const handleInfoAction = () => {
    setIsOpen(true);
    const timeout = setTimeout(() => {
        setIsOpen(false)
        // alert('we have cleared it')
        setInfoMsg('');
        clearTimeout(timeout)
    }, 3000);
  };

  useEffect(() => {
    if(!infoMsg || infoMsg === ''){
        return
    }
    handleInfoAction();
  }, [infoMsg]);

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
      }}
      className={`w-[400px] fixed z-[9999] right-5 overflow-hidden rounded-lg p-4 items-start gap-2 mt-6 mb-10 bg-noteWarning infoDropIn`}
    >
      <Image
        src={require("../assets/icons/Warning.svg")}
        alt="warning"
        className="w-6 h-6"
      />
      <p className="text-white text-links lh-150 text-left pr-6 tracking-[0.2px]">
        { infoMsg }
      </p>
      <div className="w-full absolute h-1 top-0 left-0">
        <div className="bg-appOrange h-full line-grow"/>
      </div>
    </div>
  );
};

export default Info;
