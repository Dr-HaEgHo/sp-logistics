'use client'
import CreateNew from '@/components/clearance/CreateNew';
import Search from '@/components/clearance/Search';
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {

    const search = useSearchParams();
    const dir = new URLSearchParams(search).get('dir')
  return (
    <div className=''>
        {
            dir === 'search' && (<Search/>)
        }
        {
            dir === 'create-new' && (<CreateNew/>)
        }
    </div>
  )
}

export default Page