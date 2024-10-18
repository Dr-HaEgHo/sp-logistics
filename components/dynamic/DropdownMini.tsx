import { multipleDropDownProps } from "@/types";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";
import { FC, useEffect, useRef, useState } from "react";
import { SearchInputFade } from "../Input";
import MiniDrop from "../MiniDrop";
import Image from "next/image";

const DropdownMini: FC<multipleDropDownProps> = (props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredArray, setFilteredArray] = useState<any[] | null>(null);

  const dropDownRef = useRef<HTMLParagraphElement>(null);

  const handleClick = () => {
    setIsOpen((prev) => (prev = !prev));
  };

  const handleChange = () => {};

  function handleClickOut(event: MouseEvent) {
    if (
      dropDownRef.current &&
      !dropDownRef.current.contains(event.target as Node)
    ) {
      // alert('hello world')
      setIsOpen(false);
    }
  }

  const handleDropItem = (name: string | undefined) => {
    props?.setValue(name as string);
    setIsOpen((prev) => (prev = !prev));
  };

//   useEffect(() => {
//     if (!props.data) {
//       return;
//     }

//     const newArray = props.data.forEach((item) => {
//         let arr: any | null = null 
//       item.list.filter((listItem) =>
//         arr = [...arr, listItem.name.toLowerCase().includes(searchValue.toLowerCase()) ]

//       );

//       return arr
//     });

//     setFilteredArray(newArray);

//     console.log("the search", searchValue);
//     console.log("the Array", filteredArray?.filter((item) => item[0]));
//   }, [searchValue, props.data]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOut);
    } else {
      document.removeEventListener("click", handleClickOut);
    }

    return () => {
      document.removeEventListener("click", handleClickOut);
    };
  }, [isOpen, dropDownRef]);

  return (
    <div className={`input-wrap ${props.iwClass}`} ref={dropDownRef}>
      {props.label && (
        <label className="labels">{props.label && props.label}</label>
      )}
      <div className="password-input">
        <input
          onChange={handleChange}
          value={props.value}
          className={`input ${props.iClass}`}
          type={props?.type}
          placeholder={props.placeholder && props.placeholder}
        />
        <div
          onClick={handleClick}
          className="absolute cursor-pointer right-[10px] top-1/2 transform -translate-y-1/2 flex items-center justify-center text-icons "
        >
          {isOpen ? (
            <ArrowUp2 variant="Bold" size="20" className="text-grey1000" />
          ) : (
            <ArrowDown2 variant="Bold" size="20" className="text-grey1000" />
          )}
        </div>

        <div
          style={{
            height: isOpen ? 400 : 0,
            borderWidth: isOpen ? 1 : 0,
          }}
          className="transition duration-[1000ms] w-full rounded-md bg-white border-grey300 overflow-hidden absolute z-[999] top-[130%] slim-scroll"
        >
          <div className="sticky top-0 bg-white border-b border-grey300 p-2 z-10">
            <SearchInputFade
              type="text"
              value={searchValue}
              setValue={setSearchValue}
              placeholder=""
            />
          </div>
          {!searchValue &&
            props?.data.map((item) => (
              <div className="mb-3">
                <MiniDrop
                  title={item?.title}
                  list={item?.list}
                  action={handleDropItem}
                />
              </div>
            ))}
          {searchValue && filteredArray !== null && filteredArray.length
            ? filteredArray.map((item: any, idx: number) => (
                <div>
                  {item?.list ? (
                    item.list.map((listItem: { id: number; name: string }) => (
                      <div
                        key={listItem.id}
                        className="w-full py-2 px-4 border-b border-grey100"
                      >
                        <div
                          onClick={() => handleDropItem}
                          className="w-fit flex item-center justify-center p-1 gap-2 rounded border-[0.5px] border-grey500 hover:bg-bg2 active:bg-bg3 transition duration-200 cursor-pointer"
                        >
                          <Image
                            src={require("@/assets/icons/pin.svg")}
                            alt="pin pin"
                            className={`transform transition duration-300 `}
                          />
                          <p className="text-normal text-grey800 text-sm">
                            {listItem.name.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-grey500 font-medium  text-sm pl-4 py-2">Nothing Found</p>
                  )}
                </div>
              ))
            : null}

          <div className="w-full h-[1rem]" />
        </div>
      </div>
    </div>
  );
};

export default DropdownMini;
