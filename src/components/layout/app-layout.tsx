"use client"
import React, { FC, ReactNode } from 'react'
import NavBar from '../bases/nav-bar'
import Footer from '../bases/footer'
import { useAtom, useStore } from 'jotai'
import { darkMode} from '@/hooks/atoms/theme'

interface App {
  children: ReactNode
  
}
const AppLayout: FC<App> = ({ children }) => {
  const [isDark, setDarkMode] = useAtom(darkMode)
  return (
    <div className={isDark? 'bg-colorCode-bgCode text-white':'bg-white'}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout