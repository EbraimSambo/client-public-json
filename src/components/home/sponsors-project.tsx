import { sponsors } from '@/data/data-links'
import Image from 'next/image'
import React from 'react'

const SponsorsProject = () => {
  return (
    <section>
        <h2 className='text-default text-2xl'>Nossos patrocinadores</h2>
        <ul className='flex items-center gap-11'>
            {sponsors.map((sponsor,index)=>(
                <li key={index} className='flex items-center gap-2'>
                    <div className='relative h-52 max-w-52'>
                        <Image src={sponsor.img} fill alt={sponsor.sponsor} priority />
                    </div>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default SponsorsProject