import { resourcesApi } from '@/data/data-links'
import Link from 'next/link'
import React from 'react'

const DescResource = () => {
    return (
        <div>
            <h2 className='text-default text-3xl'>Recursos e exemplos de rotas</h2>
            <div className='pl-4 flex flex-col gap-2 mt-2'>
                <p>PUBLIC JSON vem com um conjunto de 6 recursos comuns:</p>
                <ul className='flex flex-col gap-1 pl-4'>
                    {resourcesApi.map((resource, index) => (
                        <li key={index}>
                            <Link href={resource.path} target='_blank' className='text-xs text-default'>
                                {resource.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p className='mt-2 text-sm'>
                <b> Nota: </b>
                os recursos têm relações. Por exemplo: posts têm muitos comentários, álbuns têm muitas fotos guia para a lista completa.</p>
        </div>
    )
}

export default DescResource