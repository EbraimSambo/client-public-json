"use client"
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import JavascriptTab from './javascript-tab'
import PHPTab from './php-tab-tab'
import Image from 'next/image'
import phpIcon from '@/components/assets/php-icon.svg'
import javascriptIcon from '@/components/assets/javascript-original.svg'
import Typography from '@/components/bases/typography'
const PartialRightStart = () => {

    return (
        <Tabs defaultValue="javascript">
            <Typography
                text={"Exemplo de como implementar"}
                bold='font-semibold'
                element='h2'
                color='text-gray-600'
            />
            <TabsList className="grid w-full grid-cols-2 mt-2">
                <TabsTrigger value="javascript" className='flex items-center gap-1 '>
                    <div className='relative h-5 w-5' >
                        <Image src={javascriptIcon} fill alt='php' />
                    </div>
                    <span>Javascript</span>
                </TabsTrigger>
                <TabsTrigger value="php" className='flex items-center gap-1 '>
                    <div className='relative h-5 w-5'>
                        <Image src={phpIcon} fill alt='php' />
                    </div>
                    <span> PHP</span>
                </TabsTrigger>
            </TabsList>
            <JavascriptTab />
            <PHPTab />
        </Tabs>
    )
}

export default PartialRightStart