import React, { FC } from "react";

interface TitleProps {
    title?: string;
    subtitle?: string;
}

const TitleHeader: FC<TitleProps> = ({title, subtitle}) => {
  return (
    <div className="w-full mx-auto flex flex-col gap-2 mb-9">
      {
        title && (<h1 className="text-textBody font-bold text-[44px] text-center lh-130" dangerouslySetInnerHTML={{__html: title}}>
      </h1>)
      }
      {
        subtitle && (<p className="text-textSec text-[17px] font-bold text-center tracking-[0.2px]">
            {subtitle}
          </p>)
      }
    </div>
  );
};

export default TitleHeader;
