import React from 'react'
import Typography from '../bases/typography'

const DescUseApi = () => {
    return (
        <section className='flex flex-col gap-4 max-w-4xl'>

            <Typography
                element='h2'
                size='text-5xl'
                color='text-black'
                text={"Quando usar"}
                bold='font-bold'
            />

            <Typography
                bold='font-semibold'
                element='p'
                color='text-gray-600'
                text="PUBLIC JSON é uma API REST
                 online gratuita que você pode usar 
                 sempre que você precisar de dados falsos.
                  Pode ser em um README no GitHub, para uma
                   demonstração no CodeSandbox,
                em exemplos de código no Stack Overflow, 
                ...ou simplesmente para testar as coisas localmente."
            />

        </section>
    )
}

export default DescUseApi