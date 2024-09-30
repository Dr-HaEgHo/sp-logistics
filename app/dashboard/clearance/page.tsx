'use client'
import AirMovement from '@/components/clearance/AirMovement';
import CreateNew from '@/components/clearance/CreateNew';
import LandMovement from '@/components/clearance/LandMovement';
import OceanMovement from '@/components/clearance/OceanMovement';
import Search from '@/components/clearance/Search';
import Load from '@/components/Load';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'

const Page = () => {

    const router = useRouter()
    const search = useSearchParams();
    const dir = new URLSearchParams(search).get('dir')

    useEffect(() => {
      if(dir){
        return
      }

      router.push('?dir=search&tab=All')

    } ,[])

  return (
    <div className=''>
        <Suspense fallback={<Load/>}>
          {
            !dir && (<div className='w-full h-[70vh] flex items-center justify-center '>
              <p className='text-grey800 text-lg'>Loading...</p>
            </div>)
          }
          {
              dir === 'search' && (<Search/>)
          }
          {
              dir === 'create-new' && (<CreateNew/>)
          }
          {
              dir === 'air-movement' && (<AirMovement />)
          }
          {
              dir === 'ocean-movement' && (<OceanMovement />)
          }
          {
              dir === 'land-movement' && (<LandMovement />)
          }
        </Suspense>
    </div>
  )
}

export default Page;