'use client'
import { ModalProps } from '@/types'
import { CloseCircle, CloseSquare } from 'iconsax-react'
import React, { FC, useState } from 'react'

const Modal: FC<ModalProps> = ({ isOpen, setIsOpen, children }) => {

    // STATE


    // FUNCTIONS
    const handleClick = () => {
        setIsOpen((prev: boolean) => prev = !prev)
    }

    return (
        <div className={isOpen === true ? 'modal-bg-open' : 'modal-bg-close'} >
            <div className='w-full h-full relative' >
                <div className={isOpen === true ? 'card-open' : 'card-close'} >
                    <div className='w-full h-full flex flex-col items-center relative' >
                        <div className='cursor-pointer flex items-center z-[9999] justify-center absolute -top-3 -right-3 h-7 w-7 rounded-full bg-white border p-[2px] border-grey200'>
                            <CloseCircle onClick={handleClick} size='28' className='text-grey800  hovers-text' />
                        </div>
                

                        {children}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal