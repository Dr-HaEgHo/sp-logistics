import { socialType } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const SocialCard: FC<socialType> = ({data, btnClass}) => {
  return (
    <Link href={`/${data.to}${data.channel && `channel=${data.channel}`}`} className='w-full grid-item'>
        <button className={`${btnClass} flex items-center gap-4 py-[38px] px-9 w-full rounded-md appShadow border-2 border-secBorder`}>
            <Image
                src={data.image}
                alt='social media logo'
                className='w-[42px] h-[42px]'
                width={1024}
                height={1024}
            />
            <div className='flex flex-col items-start'>
                <h2 className='text-head4 text-textBody font-bold text-left'>{data.text}</h2>
                <p className='text-navSmall text-textSec text-left'>{data.description}</p>
            </div>
        </button>
    </Link>
  )
}

export default SocialCard