"use client"
import { thousands } from '@/data/data-links'
import Image from 'next/image'
import React from 'react'
import Typography from '../bases/typography'
import { Card } from '../ui/card'
import { useAtom } from 'jotai'
import { darkMode } from '@/hooks/atoms/theme'

const Thousands = () => {
    const [isDark] = useAtom(darkMode)
    return (
        <section>
            <Typography
                element='h2'
                text={"Criadores de PUBLIC JSON"}
                size='text-3xl'
                bold='font-bold'
            />
            <ul className='grid grid-cols-3 gap-8 max-[920px]:grid-cols-2 max-[600px]:grid-cols-1'>
                {thousands.map((thousand, index) => (
                        <li key={index} className='px-6 py-4 mt-4 border rounded-md shadow-xl'>
                            <div className='flex items-center gap-2'>
                                <div className='relative h-12 w-12 rounded'>
                                    <Image  className={`rounded-full border-solid object-cover border-2 ${isDark ? 'border-white' : 'border-black'}`} src={thousand.urlImage} fill priority alt={thousand.name} />
                                </div>
                                <div>
                                    <Typography
                                        size='text-sm'
                                        color='text-gray-800'
                                        element='h3'
                                        bold='font-bold'
                                        text={thousand.name} />

                                    <h4 className='text-sm'> {thousand.job} </h4>
                                </div>
                            </div>
                            <p className='text-sm mt-2'>{thousand.argument}</p>
                            <div>
                            </div>
                        </li>
                ))}
            </ul>
        </section>
    )
}

export default Thousands