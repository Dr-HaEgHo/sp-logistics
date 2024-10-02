import Image from "next/image";
import React, { FC } from "react";


interface NoteProps {
    priority: string;
    title: string;
    desc: string;
    date: string;
    time: string;
}

const Note:FC<NoteProps> = ({priority, title, desc, date, time}) => {

    // const switchColor = (priority.toLowerCase(): string) => {
    //     switch(priority.toLowerCase()) {
    //         case ''
    //     }
    // }

  return (
    <div className={`w-full h-[208px] rounded border mb-10 flex flex-col justify-between border-grey200 py-4 ${priority.toLowerCase() === 'low' ? 'bg-lowLight' : priority.toLowerCase() === 'medium' ? 'bg-medLight' : priority.toLowerCase() === 'high' ? 'bg-highLight' : '' } `}>
      
      <div className="w-full">
        <div className="w-full flex items-center justify-between pl-4 mb-4">
          <p className={`px-[10px] py-1 rounded font-medium text-xs text-grey1000 ${priority.toLowerCase() === 'low' && 'bg-success'} ${priority.toLowerCase() === 'medium' && 'bg-pending'} ${priority.toLowerCase() === 'high' && 'bg-canceled'}` }>
            { priority } Priority
          </p>
          <Image
            src={require("@/assets/icons/more.svg")}
            alt="more"
            className="w-8 h-8"
          />
        </div>

        <div className="px-4 mb-4">
            {title && <h4 className="text-[15px] font-medium text-grey1000">{title}</h4>}
            {desc && <p className="text-[13px] font-normal text-dark900">{ desc }</p>}
        </div>
      </div>


      <div className="flex items-center gap-2 px-4">
            <Image
                src={require("@/assets/icons/timer.svg")}
                alt="timer"
                className=""
            />
            <p className="text-sm font-normal text-dark900">{date}</p>
            <p className="text-sm font-normal text-dark900">{time}</p>
      </div>



    </div>
  );
};

export default Note;
