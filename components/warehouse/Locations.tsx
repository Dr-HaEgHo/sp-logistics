import React from 'react'
import CheckBox from '@/components/CheckBox'
import LocationsTable from '@/components/warehouse/LocationsTable'

const Locations = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex items-center justify-start gap-3 mb-7'>
            <CheckBox/>
            <p className='text-sm text-grey900 font-medium'>All</p>
        </div>


        <div>
            <LocationsTable/>
        </div>

    </div>
  )
}

export default Locations