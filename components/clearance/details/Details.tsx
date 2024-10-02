import { FilledButton } from '@/components/Button'
import { ArrowDown2 } from 'iconsax-react'
import React from 'react'

const Details = () => {
  return (
    <div className='w-full bg-white px-10 py-5 flex items-start gap-8 relative'>

        <div className='w-2 h-[17px] bg-sec700 absolute left-0'/>

        <div className="flex flex-[1] flex-col bg-grey100 border border-grey300 rounded py-10 px-5">
            <h4 className="text-[22px] text-black font-medium mb-7">AIR Movement Type - File Ref #12345667889</h4>
            <h5 className="font-medium text-base text-grey1000 mb-3">Customer Name</h5>
            <p className="text-sm text-dark700 py-3 mb-7">Consignee: XYZ Trading Co.</p>

            <div className="w-full grid grid-cols-2">
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Customer Name</h5>
                    <p className="text-sm text-dark700 py-3">Consignee: XYZ Trading Co.</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Shipper</h5>
                    <p className="text-sm text-dark700 py-3">ABC Exports Ltd.</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Special Handling</h5>
                    <p className="text-sm text-dark700 py-3">Select</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Number of Parcels</h5>
                    <p className="text-sm text-dark700 py-3">50</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Gross weight</h5>
                    <p className="text-sm text-dark700 py-3">12 000 kg</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Chargeable Weight</h5>
                    <p className="text-sm text-dark700 py-3">1250</p>
                </div>
            </div>

            <div className="w-full ">
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Description of the goods</h5>
                    <p className="text-sm text-dark700 py-3">Electronics</p>
                </div>
            </div>

            <div className="w-full grid grid-cols-2">
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Port of Loading</h5>
                    <p className="text-sm text-dark700 py-3">Shanghai</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-10">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Arrival Port</h5>
                    <p className="text-sm text-dark700 py-3">Jeddah</p>
                </div>
            </div>


            <h4 className="text-[22px] text-black font-medium mb-7">Arrival Information</h4>

            <div className="w-full grid grid-cols-3">
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Carrier</h5>
                    <p className="text-sm text-dark700 py-3">Airline Name</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Flight number</h5>
                    <p className="text-sm text-dark700 py-3">LM 12356</p>
                </div>
                
                
                <div className="w-full flex flex-col mb-5">
                    <h5 className="font-medium text-base text-grey1000 mb-3">Arrival Date</h5>
                    <p className="text-sm text-dark700 py-3">29/08/2024</p>
                </div>

            </div>

        </div>


        {/* RIGHT PANEL */}
        <div className="w-[147px] ">
            <div className="w-full flex flex-col gap-7">
                <button className="w-full h-9 bg-success rounded flex hover:bg-successHover transition duration-200">
                    <p className="w-full h-full flex items-center justify-center text-xs font-semibold text-grey1000">Status</p>
                    <div className="px-[6px] py-3 border-l border-successHover flex items-center h-full justify-center">
                        <ArrowDown2 variant="Bold" size={12} className="text-grey1000"/>
                    </div>
                </button>
                <FilledButton
                    text="Edit"
                    image={require('@/assets/icons/edit-black.svg')}
                    btnClass="!justify-start !gap-4"
                    pClass="text-grey900 text-sm font-medium"
                />
                <FilledButton
                    text="Print file info"
                    image={require('@/assets/icons/printer-black.svg')}
                    btnClass="!justify-start !gap-4"
                    pClass="text-grey900 text-sm font-medium"
                />
                <FilledButton
                    text="Delete"
                    image={require('@/assets/icons/delete-red.svg')}
                    btnClass="!justify-start !gap-4"
                    pClass="text-primary text-sm font-medium"
                />
            </div>
        </div>
    </div>
  )
}

export default Details