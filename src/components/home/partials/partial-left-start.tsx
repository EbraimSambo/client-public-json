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
import Typography from '@/components/bases/typography'

const PartialLeftStart = () => {
    const { handleClick, textRef, isPending } = useCopyText()
    const { toast } = useToast()
    return (
        <div className='flex gap-8 flex-col'>
            <Typography
                className='flex items-center gap-3'
                element='h1'
                text={<>
                    <div className='relative h-20 w-20'>
                        <Image src={logoPath} fill alt='logo' />
                    </div>
                    <Typography
                        element='span'
                        text={"PUBLIC JSON"}
                        size='text-4xl'
                        bold='font-bold'
                        color='text-default'
                    />
                </>}
            >

            </Typography>
            <Typography
                element='p'
                text={"API falsa e confiável gratuita para testes e prototipagem."}
                color={"text-gray-600"}
                bold={"font-semibold"}
            />
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