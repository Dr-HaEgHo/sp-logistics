import { dropDownProps } from '@/types'
import { ArrowDown2, ArrowUp2 } from 'iconsax-react'
import { FC, useEffect, useRef, useState } from 'react'
import { SearchInputFade } from '../Input'



const DropSearchFade: FC<dropDownProps> = (props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [searchValue, setSearchValue] = useState<string>('');
    const [ filteredArray, setFilteredArray ] = useState<any[]>(props?.data)

    const dropDownRef = useRef<HTMLParagraphElement>(null)

    const handleClick = () => {
        setIsOpen(prev => prev = !prev)
    }
 
    const handleChange = () => {

    }

    function handleClickOut (event: MouseEvent) {
        if(dropDownRef.current && !dropDownRef.current.contains(event.target as Node)){
            // alert('hello world')
            setIsOpen(false)
        }
    }

    const handleDropItem = (name: string | undefined) => {
        props?.setValue(name as string);
        setIsOpen(prev => prev = !prev);
    }

    useEffect(() => {
        if (!props.data) {
          return;
        }
    
        const newArray = props.data.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    
        setFilteredArray(newArray);
    
        console.log('the search', searchValue);
      }, [searchValue, props.data]);

    useEffect(() => {
        if(isOpen) {
            document.addEventListener('click', handleClickOut)
        }
        else{
            document.removeEventListener('click', handleClickOut)
        }
        
        return () => {
            document.removeEventListener('click', handleClickOut)
        }        
    }, [isOpen, dropDownRef])


    return (
        <div className={`input-wrap ${props.iwClass}`} ref={dropDownRef}>
            {props.label && <label className='labels'>{props.label && props.label}</label>}
            <div className='password-input' >
                <input onChange={handleChange} value={props.value} className={`input ${props.iClass}`} type={props?.type} placeholder={props.placeholder && props.placeholder} />
                <div onClick={handleClick} className='absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons '>
                    {
                        isOpen ? (<ArrowUp2 variant="Bold" size="20" className='text-grey1000' />) : (<ArrowDown2 variant="Bold" size="20" className='text-grey1000'/>)
                    }
                </div>


                <div style={{
                    height: isOpen ? 400 : 0,
                    borderWidth: isOpen ? 1 : 0,
                }} className='transition duration-[1000ms] w-full rounded-md bg-white border-grey300 overflow-hidden absolute z-[999] top-[130%] slim-scroll'>
                    <div className='sticky top-0 bg-white border-b border-grey300 p-2 z-10'>
                        <SearchInputFade
                            type='text'
                            value={searchValue}
                            setValue={setSearchValue}
                            placeholder=''
                        />
                    </div>
                    {
                        filteredArray.length ? filteredArray.map((item:any, idx:number) => (
                            <p key={idx} onClick={() => handleDropItem(item.name)} className='transition duration-200 cursor-pointer border-b border-grey100 p-[10px] text-black font-normal text-[11px] 2xl:text-xs hover:bg-sec700 hover:text-white active:bg-sec600' >{item.name}</p>
                        )) : null
                        
                    }

                    <div className='w-full h-[1rem]' />
                </div>
            </div>
        </div>
    )
}


export default DropSearchFade;