"use client"
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import JavascriptTab from './javascript-tab'
import PHPTab from './php-tab-tab'
import Image from 'next/image'
import phpIcon from  '@/components/assets/php-icon.svg'
import javascriptIcon from  '@/components/assets/javascript-original.svg'
const PartialRightStart = () => {

    return (
        <Tabs defaultValue="javascript">
            <h2 className='text-gray-700 font-semibold'>Exemplo de como implementar</h2>
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