"use client"
import { Button } from '@/components/ui/button'
import { darkMode, } from '@/hooks/atoms/theme'
import { useAtom } from 'jotai'
import { MoonIcon, SunIcon } from 'lucide-react'
import React from 'react'

const ButtonTheme = () => {
  // const [, changeColor]= useAtom(changeTheme)
  const [isDark,setDarkMode] = useAtom(darkMode)
  return (
    <Button onClick={()=>setDarkMode((prevent)=>!prevent)} className={`bg-transparent `}>
      {isDark ?
      <SunIcon/> :
      <MoonIcon className='text-black hover:text-white' />}
    </Button>
  )
}

export default ButtonTheme