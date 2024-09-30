import React, { FC } from 'react'
import { FilledButton } from './Button'
import Image from 'next/image'
import { DeliveryProps } from '@/types'

interface compProps {
    label:string;
    data: DeliveryProps,
    setData: Function
}

const DeliveryFilled: FC<compProps> = ({label, data, setData}) => {
  return (
    <div className='w-full flex flex-col gap-3'>
            <label className='text-base text-grey1000 '>{ label }</label>
        <div className='w-full flex flex-col bg-bg2 border rounded px-3 py-[10px] border-grey300'>

            {/* TOP RESULT DELETE */}
            <div className='pb-2 mb-4 flex items-center justify-between border-b border-grey300'>
                <p className='text-sm text-grey600 font-normal'>Result</p>
                <FilledButton
                    text=''
                    btnClass='hover:bg-bg3 !w-fit !p-0 !justify-end flex-row-reverse'
                    cta={() => {setData(null)}}
                >
                    <Image
                        src={require('../assets/icons/delete-red.svg')}
                        alt="delete button"
                        width={24}
                        height={24}
                    />
                </FilledButton>
            </div>

            <div className='w-full flex flex-col gap-4'>

                {/* Each One */}
                <div className='w-full flex items-center'>
                    <div className='flex flex-[1]'>
                        <p className='text-sm text-900 font-normal'>Account NO:</p>
                    </div>
                    <div className='w-[71%]'>
                        <input type='text' value={data?.acctNo} disabled className='w-full px-3 border disabled:bg-white h-10 border-deliInputBorder rounded text-deliInputText' />
                    </div>
                </div>
                
                {/* Each One */}
                <div className='w-full flex items-center'>
                    <div className='flex flex-[1]'>
                        <p className='text-sm text-900 font-normal'>Name:</p>
                    </div>
                    <div className='w-[71%]'>
                        <input type='text' value={data?.name} disabled className='w-full px-3 border disabled:bg-white h-10 border-deliInputBorder rounded text-deliInputText' />
                    </div>
                </div>
                
                {/* Each One */}
                <div className='w-full flex items-center'>
                    <div className='flex flex-[1]'>
                        <p className='text-sm text-900 font-normal'>Address:</p>
                    </div>
                    <div className='w-[71%]'>
                        <input type='text' value={data?.address} disabled className='w-full px-3 border disabled:bg-white h-10 border-deliInputBorder rounded text-deliInputText' />
                    </div>
                </div>
                
                {/* Each One */}
                <div className='w-full flex items-center'>
                    <div className='flex flex-[1]'>
                        <p className='text-sm text-900 font-normal'>Contact Number:</p>
                    </div>
                    <div className='w-[71%]'>
                        <input type='text' value={data?.contact} disabled className='w-full px-3 border disabled:bg-white h-10 border-deliInputBorder rounded text-deliInputText' />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default DeliveryFilled