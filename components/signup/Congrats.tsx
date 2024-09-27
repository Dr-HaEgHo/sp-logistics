import Image from 'next/image'
import React, { FC } from 'react'
import { FilledButton } from '../Button'

interface props {
    action: Function;
    image: string;
    text: string;
}

const Congrats:FC<props> = ({action, image, text}) => {
  return (
    <div className="w-full h-full fixed flex flex-col gap-12 items-center justify-center top-0 left-0 z-[99] bg-pryBg">
            <Image
                src={image}
                alt="icon"
                className="w-[66px] h-[66px]"
            />
            <h3 className="text-head2 text-textBody text-center lh-130 font-bold" dangerouslySetInnerHTML={{__html: text}}></h3>
            <FilledButton
                cta={() => {action()}}
                text="Great!"
                btnClass="bg-appOrange hover:bg-appOrangeHover !w-fit px-6"
                pClass="text-white"
            />
        </div>
  )
}

export default Congrats