import { linksNavBar } from '@/data/data-links'
import Link from 'next/link'
import React from 'react'
import LogoApp from './logo-app'
import ButtonTheme from './partials/button-theme'
const NavBar = () => {
  return (
    <header className={'navbar'}>
        <LogoApp />
        <nav>
            <ul className='flex-center gap-4'>
                {linksNavBar.map((link, index)=>(
                    <li key={index}>
                        <Link href={link.path} className='link'> {link.title} </Link>
                    </li>
                ))}
                <li> <ButtonTheme /> </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar