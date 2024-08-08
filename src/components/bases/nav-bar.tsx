import { linksNavBar } from '@/data/data-links'
import Link from 'next/link'
import React from 'react'
import LogoApp from './logo-app'
const NavBar = () => {
  return (
    <header className={'flex items-center justify-between px-8 py-4 max-w-5xl m-auto'}>
        <LogoApp />
        <nav>
            <ul className='flex items-center gap-4'>
                {linksNavBar.map((link, index)=>(
                    <li key={index}>
                        <Link href={link.path} className='text-sm tracking-widest text-gray-500 font-semibold hover:text-default'> {link.title} </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default NavBar