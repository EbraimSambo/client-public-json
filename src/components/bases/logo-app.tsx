import React from 'react'
import pathLogo from '@/components/assets/logo-app.png'
import Link from 'next/link'
import Image from 'next/image'
const LogoApp = () => {
  return (
    <Link href={"/"} className='flex items-center gap-2'>
        <div className='relative h-8 w-8'>
            <Image src={pathLogo} fill alt='logo' priority />
        </div>
        <span className='text-default font-bold tracking-widest'>PUBLIC JSON</span>
    </Link>
  )
}

export default LogoApp