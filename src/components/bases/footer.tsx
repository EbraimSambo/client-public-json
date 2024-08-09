import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='flex items-center justify-center p-8 max-w-96 m-auto'>
        <p className='text-center text-xs tracking-widest'>Codificado e mantido pela Web.AO &copy; {currentYear} </p>
    </footer>
  )
}

export default Footer