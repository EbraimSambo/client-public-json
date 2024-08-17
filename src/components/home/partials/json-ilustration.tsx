import React from 'react'

const JsonIlustration = () => {
    return (
        <div >
            <code className='flex flex-col gap-3 pl-10 bg-bgCode w-full text-white p-8 rounded-sm shadow-sm mt-4 '>
                <span className='text-yellow-500'> {"{"} </span>
                <div className='pl-5 flex flex-col gap-1'>
                    <span>
                        <span className='text-blue-300'>&quot;id&quot;</span>
                        <span>: </span>
                        <span className='text-green-300'>1</span>
                        <span>,</span>
                    </span>
                    <span>
                        <span className='text-blue-300'>&quot;name&quot;</span>
                        <span>: </span>
                        <span className='text-amber-700/95'>&quot;Afonso Panzo&quot;</span>
                        <span>,</span>
                    </span>
                    <span>
                        <span className='text-blue-300'>&quot;job&quot;</span>
                        <span>: </span>
                        <span className='text-amber-700/95'>&quot;Teacher&quot;</span>
                        <span>,</span>
                    </span>
                    <span>
                        <span className='text-blue-300'>&quot;age&quot;</span>
                        <span>: </span>
                        <span className='text-green-300'>20</span>
                        <span>,</span>
                    </span>
                    <span>
                        <span className='text-blue-300'>&quot;address&quot;</span>
                        <span>: </span>
                        <span className='text-pink-500'> {"{"} </span>
                    </span>
                    <span className='pl-6'>
                        <span className='text-blue-300'>&quot;country&quot;</span>
                        <span>: </span>
                        <span className='text-amber-700/95'>&quot;Angola&quot;</span>
                        <span>,</span>
                    </span>
                    <span className='pl-6'>
                        <span className='text-blue-300'>&quot;city&quot;</span>
                        <span>: </span>
                        <span className='text-amber-700/95'>&quot;Luanda&quot;</span>
                        <span>,</span>
                    </span>
                    <span className='pl-6'>
                        <span className='text-blue-300'>&quot;street&quot;</span>
                        <span>: </span>
                        <span className='text-amber-700/95'>&quot;Rua da Dira&quot;</span>
                    </span>
                    <span className='text-pink-500'> {"}"} </span>
                </div>
                <span className='text-yellow-500'> {"}"} </span>
            </code>
        </div>
    )
}

export default JsonIlustration