import React from 'react'
import pathLogo from '@/components/assets/logo-app.png'
import Link from 'next/link'
import Image from 'next/image'
import { useAtom } from 'jotai'
import { darkMode } from '@/hooks/atoms/theme'
const LogoApp = () => {
  const [isDark] = useAtom(darkMode)
  return (
    <Link href={"/"} className='flex items-center gap-2'>
        <div className='relative h-8 w-8'>
            <Image src={pathLogo} fill alt='logo' priority />
        </div>
        <span className={`font-bold tracking-widest ${isDark?'text-white':'text-default'}`}>PUBLIC JSON</span>
    </Link>
  )
}

export default LogoApp