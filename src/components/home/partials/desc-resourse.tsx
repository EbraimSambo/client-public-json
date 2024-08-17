import Typography from '@/components/bases/typography'
import { resourcesApi } from '@/data/data-links'
import Link from 'next/link'
import React from 'react'

const DescResource = () => {
    return (
        <div className='pt-8'>
            <Typography
                element='h2'
                text={"Recursos e exemplos de rotas"}
                bold='font-bold'
                size='text-2xl'
            />
            <div className='flex flex-col gap-2 mt-2'>
                <Typography element='p'
                    text={"PUBLIC JSON vem com um conjunto de 6 recursos comuns:"}
                    color='text-gray-600'
                    bold='font-semibold'
                />
                <ul className='flex flex-col gap-1 pl-4'>
                    {resourcesApi.map((resource, index) => (
                        <li key={index}>
                            <Link href={resource.path} target='_blank' className='flex gap-2 items-center'>
                                {resource.icon}
                                <Typography
                                    element='span'
                                    text={resource.title}
                                    size='text-xs'
                                    bold='font-bold'
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p className='mt-2 text-sm'>
                <Typography
                    element='b'
                    text={"Nota: "}
                />
                <Typography
                    element='span'
                    bold='font-semibold'
                    text="os recursos têm relações. Por exemplo: posts têm muitos comentários, álbuns têm muitas fotos guia para a lista completa."
                    color='text-gray-600'
                />
            </p>
        </div>
    )
}

export default DescResource