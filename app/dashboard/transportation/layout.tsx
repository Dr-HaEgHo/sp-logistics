import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'SP Logistics | Transportation Management',
    description: 'The Best Management and Tracking Logistics Software',
  }

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-full'>
        { children }
    </div>
  )
}

export default Layout