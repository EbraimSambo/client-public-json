"use client"
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useCopyText } from '@/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GoCopy } from 'react-icons/go'
import { PiCopyFill } from 'react-icons/pi'
import logoPath from '@/components/assets/logo-app-big.png'

const PartialLeftStart = () => {
    const { handleClick, textRef, isPending } = useCopyText()
    const { toast } = useToast()
  return (
    <div  className='flex gap-8 flex-col'>
        <h1 className='flex items-center gap-3'>
                <div className='relative h-20 w-20'>
                    <Image src={logoPath} fill alt='logo' />
                </div>
                <span className='text-4xl tracking-widest font-bold text-default'>PUBLIC JSON</span>
            </h1>

            <p className='tracking-widest text-gray-600 font-semibold'>API falsa e confiável gratuita para testes e prototipagem.</p>
            <p className='flex items-center justify-between gap-2 bg-bgCode max-w-96 text-white p-2 px-3 rounded-sm' >
                <code ref={textRef} className='text-xs'>npm install public-json</code>
                {isPending ?
                    <PiCopyFill /> :
                    <GoCopy onClick={handleClick} className='cursor-pointer' />
                }
            </p>

            <div className='flex gap-3'>
                <Button className='bg-default'>Começar</Button>
                <Button className='hover:bg-default'>
                    <Link href={"/guides"}>Tutorais</Link>
                </Button>
            </div>
    </div>
  )
}

export default PartialLeftStart