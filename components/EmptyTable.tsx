import Image from 'next/image'
import React from 'react'

const EmptyTable = ({ text, subtext }: { text: string, subtext: string }) => {
    return (
        // <tbody className='w-full flex flex-col items-center justify-center py-14'>
            <tr>
                <td className='w-full flex flex-col items-center justify-center' >
                    <Image
                        src={require("../assets/images/empty1.png")}
                        alt='hometownadmin.com'
                        style={{
                            width: 80,
                            height: 80
                        }}
                    />
                    <h3 className='text-sm font-bold mb-1 text-input'>{text}</h3>
                    <p className='text-xs font-normal  mb-1 text-80%'>{subtext}</p>
                </td>
            </tr>
        // </tbody>
    )
}

export default EmptyTable;
