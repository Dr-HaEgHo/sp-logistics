import Image from "next/image";
import { FC } from "react";

interface DocuProps {
    fileName: string;
    size: string;
    label: string;
    image: string;
}


const Document: FC<DocuProps> = ({fileName, size, label, image}) => {
    return (
        <div className="w-full border border-grey300 bg-grey100 rounded flex items-center gap-2 px-2 py-1">
            <div className="w-12 h-10 border-[0.5px] rounded overflow-hidden border-grey300">
                <Image
                    src={image}
                    alt="screenshot"
                    className="w-full h-full object-cover"
                />
            </div> 

            <p className="text-xs text-grey700 font-medium">{ fileName }</p>
            <p className="text-xs text-grey500 font-medium">{ size }</p>
            <p className="text-grey800 text-sm font-semibold w-fit p-2 rounded border ml-4 border-grey500 flex items-center justify-center">{ label }</p>


            <div className="flex flex-[1] items-center justify-end gap-2">
                <button className="h-5 w-5 rounded hover:bg-grey200 active:bg-grey300 transition duration-200">
                    <Image
                        src={require('@/assets/icons/clockwise.svg')}
                        alt="refresh"
                        className="w-full h-full object-cover"
                    />
                </button>
                <button className="h-5 w-5 rounded hover:bg-grey200 active:bg-grey300 transition duration-200">
                    <Image
                        src={require('@/assets/icons/pencil-grey700.svg')}
                        alt="edit"
                        className="w-full h-full object-cover"
                    />
                </button>
                <button className="h-5 w-5 rounded hover:bg-grey200 active:bg-grey300 transition duration-200">
                    <Image
                        src={require('@/assets/icons/delete-red.svg')}
                        alt="delete"
                        className="w-full h-full object-cover"
                    />
                </button>
            </div>
        </div>
    )
}

export default Document;