'use client'
import { dropDownProps, emailInputPropsFade, plateInputPropsFade, prefixInputPropsFade, pwInputProps, searchInputProps } from '@/types'
import { ArrowDown2, ArrowUp2, Eye, EyeSlash } from 'iconsax-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react'

export const DropDownFade = dynamic(() => import('../components/dynamic/DropFade'), {
    ssr : false,
 });

 export const DropDownSearchFade = dynamic(() => import('../components/dynamic/DropSearchFade'), {
    ssr : false,
 });
 export const MultipleDropDownSearchFade = dynamic(() => import('../components/dynamic/DropSearchMultiple'), {
    ssr : false,
 });


export const InputFade: FC<emailInputPropsFade> = (props) => {
    return (
        <div className={`input-wrap ${props.iwClass}`} >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <input id={props.id} value={props.value} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const PlateInputFade: FC<plateInputPropsFade> = (props) => {
    return (
        <div className={`input-wrap ${props.iwClass}`} >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <div className='flex gap-3'>
                <input id={props.id} value={props.value} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
                <div className='flex items-center gap-3'>
                    <input id={props.id} value={props.value1} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder="Letters" />
                    <input id={props.id} value={props.value2} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder="Letters" />
                    <input id={props.id} value={props.value3} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder="Letters" />
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const PrefixInput: FC<prefixInputPropsFade> = (props) => {

    const [ first, setFirst ] = useState<string | null>(null);
    const [ second, setSecond ] = useState<number | null>(null);

    const [ full, setFull] = useState<number | null>(null)

    return (
        <div className='input-wrap' >
            { props.label && <label className={`labelsFade ${props.lClass}`}>{props.label && props.label}</label>}
            <div className='w-full flex gap-2'>
                <input value={props.value} type={props?.type} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input max-w-[62px] !px-2 ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
                <input id={props.id} value={props.value2} type={props?.type2} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} className={`input ${props.iClass}`} placeholder={props.placeholder2 && props.placeholder2} />
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const PasswordInputFade: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className={`labels ${props.lClass}`}>{props.label && props.label}</label>
            <div className={`password-input`} >
                <input id={props.id} className={`input ${props.iClass}`} value={props.value} type={isOpen === true ? "text" : "password"} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash  size="20" color='#232323' />) : (<Eye size="20" color='#232323' />)
                    }
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const FileInputFade: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className={`labels ${props.lClass}`}>{props.label && props.label}</label>
            <div className={`password-input`} >
                <input id={props.id} className={`file-input cursor-pointer z-10 ${props.iClass}`} value={props.value} type={props.type ? "text" : "text"} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={props.cta} className='absolute cursor-pointer bg-bg2 border border-grey500 rounded-tr rounded-br hover:bg-bg3 active:bg-bg2 transition duration-200 h-10 w-10 right-0  top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    <Image 
                        src={require('../assets/icons/select-window.svg')}
                        alt='select window'
                    />
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const FileInputFade2: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className={`labels ${props.lClass}`}>{props.label && props.label}</label>
            <div className={`password-input`} >
                <input id={props.id} className={`file-input cursor-pointer bg-white z-10 ${props.iClass}`}  type={props.type ? "file" : "file"} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={props.cta} className='w-full absolute pointer-events-none border bg-white border-sec700 rounded hover:bg-bg3 active:bg-bg2 transition duration-200 h-10 right-0  top-1/2 transform -translate-y-1/2 flex items-center text-icons'>
                    <Image 
                        src={require('../assets/icons/upload-image-grey400.svg')}
                        alt='select window'
                    />
                    <div className='flex flex-[1] items-center justify-center gap-5'>
                        <p className='text-sec700 text-sm font-medium'>{props?.placeholder}</p>
                        <Image 
                            src={require('../assets/icons/upload-sec700.svg')}
                            alt='select window'
                        />
                    </div>
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const FileInputFade3: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className={`labels ${props.lClass}`}>{props.label && props.label}</label>
            <div className={`password-input`} >
                <input id={props.id} className={`file-input cursor-pointer bg-white z-10 ${props.iClass}`}  type={props.type ? "file" : "file"} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={props.cta} className='w-full absolute pointer-events-none border bg-white border-sec700 rounded hover:bg-bg3 active:bg-bg2 transition duration-200 h-10 right-0  top-1/2 transform -translate-y-1/2 flex items-center text-icons'>
                    {
                        !props.removeIcon ? (<Image 
                            src={require('../assets/icons/upload-image-grey400.svg')}
                            alt='select window'
                        />) : null
                    }
                    <div className='flex flex-[1] items-center justify-center gap-5'>
                        <p className='text-sec700 text-sm font-medium'>{props?.placeholder}</p>
                        <Image 
                            src={require('../assets/icons/upload-sec700.svg')}
                            alt='select window'
                        />
                    </div>
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}


export const PreviewFileInputFade: FC<pwInputProps> = (props) => {

    const fileRef = useRef<HTMLInputElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [ file, setFile ] = useState<string>('')

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    const selfieChangeHandler = () => {
        if( fileRef.current === null || fileRef.current.files === null ){
            return
        }else {
            let files = fileRef.current.files[0];
            
            const imageUrl = URL.createObjectURL(files);
            if(imageUrl){
                setFile(imageUrl)
            }
            // setSelfieLoading(true);
            
            // WHAT TO DO WHEN THE UPLOAD HAS BEEN DONE
            // uploadSelfie(files);


            console.log('the files uploaded', file)
        }
    };



    return (
        <div className='input-wrap !h-full' >
            <div className={`password-input !h-full`} >
                <input id={props.id} ref={fileRef} className={`file-input !border-none cursor-pointer bg-white z-10 !h-full ${props.iClass}`}  type={props.type ? "file" : "file"} onChange={selfieChangeHandler} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={props.cta} className='w-full !h-full absolute pointer-events-none border border-dashed bg-grey100 border-grey300  rounded hover:bg-bg3 active:bg-bg2 transition duration-200 right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center gap-6 text-icons'>
                    { file !== '' ? (
                        <div className='w-full h-full rounded overflow-hidden'>
                            <Image
                                src={file}
                                alt='uploaded file'
                                className='w-full h-full object-cover'
                                width={1024}
                                height={1024}
                            />
                        </div>
                    ) : (
                        <div className='flex flex-col items-center justify-center gap-6'>
                            <Image 
                                src={require('../assets/icons/upload-image-grey400.svg')}
                                alt='select window'
                            />
                            <div className='flex flex-[1] flex-row-reverse items-center justify-center gap-1'>
                                <p className='text-sec700 text-sm font-medium '>Upload</p>
                                <Image 
                                    src={require('../assets/icons/upload-sec700.svg')}
                                    alt='select window'
                                />
                            </div>
                        </div>
                    )}
                    </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}


export const DateInputFade: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className={`labels ${props.lClass}`}>{props.label && props.label}</label>
            <div className={`password-input`} >
                <input id={props.id} className={`file-input cursor-pointer z-10 ${props.iClass}`} value={props.value} type={'date'} onChange={props.handleChange} onBlur={props.blur} disabled={props?.isDisabled} placeholder={props.placeholder && props.placeholder} />
                <div onClick={props.cta} className='absolute cursor-pointer rounded-tr rounded-br pointer-events-none bg-white hover:bg-grey100 active:bg-bg2 transition duration-200 h-8 w-12 right-2  top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    <Image 
                        src={require('../assets/icons/Calendar.svg')}
                        alt='select window'
                    />
                </div>
            </div>
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

export const SearchInputFade: FC<searchInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props?.setValue(e.target.value)
    }

    return (
        <div className='input-wrap' >
            <div className='password-input' >
                <div onClick={handleClick} className='absolute cursor-pointer left-3 top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    <div className='w-5 h-5' >
                        <Image 
                            src={require('@/assets/icons/search.svg')}
                            alt='onebot.com'
                            className='w-full'
                        />
                    </div>
                </div>
                <input onChange={handleChange} value={props?.value} className='w-full h-9 border border-grey300 py-[10px] pl-[42px] rounded min-w-[260px] text-[13px] font-normal text-grey900' type='text' placeholder={props.placeholder && props.placeholder} />
            </div>
        </div>
    )
}

export const DropDown: FC<pwInputProps> = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }

    return (
        <div className='input-wrap' >
            <label className='labels'>{props.label && props.label}</label>
            <div className='password-input' >
                <input className='inputs' type={isOpen === true ? "text" : "password"} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons'>
                    {
                        isOpen === true ? (<EyeSlash variant="Bold" size="20" />) : (<Eye variant="Bold" size="20" />)
                    }
                </div>
            </div>
        </div>
    )
}



export const TextArea: FC<emailInputPropsFade> = (props) => {
    return (
        <div className='input-wrap' >
            { props.label && <label className={`labelsFade text-grey900 ${props.lClass}`}>{props.label && props.label}</label>}
            <textarea id={props.id} value={props.value} disabled={props?.isDisabled} className={`input !text-links ${props.iClass}`} placeholder={props.placeholder && props.placeholder} />
            { props.error && <p className='text-error text-[10px] italic'>{props.error}</p>}
        </div>
    )
}

