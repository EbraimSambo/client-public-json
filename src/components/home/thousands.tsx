import { thousands } from '@/data/data-links'
import Image from 'next/image'
import React from 'react'
import Typography from '../bases/typography'
import { Card } from '../ui/card'

const Thousands = () => {
    return (
        <section>
            <Typography
                color='text-gray-800'
                element='h2'
                text={"Criadores de PUBLIC JSON"}
            />
            <ul className='grid grid-cols-3 gap-8'>
                {thousands.map((thousand, index) => (
                        <Card key={index} className='px-6 py-4 mt-4'>
                            <div className='flex items-center gap-2'>
                                <div className='relative h-12 w-12 rounded'>
                                    <Image  className='rounded-full border-solid border-2 border-default' src={thousand.urlImage} fill priority alt={thousand.name} />
                                </div>
                                <div>
                                    <Typography
                                        size='text-sm'
                                        color='text-default'
                                        element='h3'
                                        bold='font-semibold'
                                        text={thousand.name} />

                                    <h4 className='text-sm'> {thousand.job} </h4>
                                </div>
                            </div>
                            <p className='text-sm mt-2'>{thousand.argument}</p>
                            <div>
                            </div>
                        </Card>
                ))}
            </ul>
        </section>
    )
}

export default Thousands