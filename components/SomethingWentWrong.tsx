import { SWWType } from "@/types";
import { FC } from "react";

const SomethingWentWrong: FC<SWWType> = ({action, actionText = 'Retry', message = 'Oops! something went wrong'}) => {
  return (
    <div className="w-full h-52 bg-dashboardBg flex flex-col items-center justify-center rounded-lg">
      <div className="w-10 h-20"></div>
      <p>{message}</p>
      <button onClick={action} className="buttons !w-fit !px-10">{actionText}</button>
    </div>
  );
};

export default SomethingWentWrong;