'use client'
import CreateNew from '@/components/clearance/CreateNew';
import Search from '@/components/clearance/Search';
import Load from '@/components/Load';
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

const Page = () => {

    const search = useSearchParams();
    const dir = new URLSearchParams(search).get('dir')

  return (
    <div className=''>
        <Suspense fallback={<Load/>}>
          {
              dir === 'search' && (<Search/>)
          }
          {
              dir === 'create-new' && (<CreateNew/>)
          }
        </Suspense>
    </div>
  )
}

export default Page