import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'SP Logistics | Transportation Management',
    description: 'Learn and get better at industry trading secrets',
  }

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full h-full'>
        { children }
    </div>
  )
}

export default Layout