import { TabsContent } from '@/components/ui/tabs'
import React from 'react'

const JavascriptTab = () => {
    const ap = "{"
    const at = "}"
    return (
        <TabsContent value="javascript">
            <p className='bg-bgCode text-white p-8 rounded-sm shadow-sm mt-4'>
                <code className='flex flex-col gap-1 text-[11.6px]'>
                    <div>
                        <span className='text-blue-500'> const </span>
                        <span className='text-blue-400'> users </span>=
                        <span className='text-pink-500'> await</span>
                        <span className='text-yellow-500'> fetch</span>
                        <span className='text-pink-500'>(</span>
                        <span className='text-amber-800'>"https://public-json.com/api/users"</span>,
                        <span className='text-yellow-500'> {ap}</span> </div>
                    <span className='pl-6'>
                        <span className='text-blue-300'> header: </span>
                        <span className='text-yellow-500'>{ap}</span> </span>
                    <div className='flex flex-col'>
                        <span className='pl-12'>
                            <span className='text-blue-300'>method:</span>
                            <span className='text-amber-800'> "GET"</span>, </span>
                        <span className='pl-12'>
                            <span className='text-blue-300'>authorization:</span>
                            <span className='text-amber-800'> "{"Bearer {key-api}"}"</span>,
                        </span>
                    </div>
                    <span className='pl-6 text-yellow-500'>{at}</span>
                    <span>
                        <span className='text-yellow-500'>{at}</span>
                        <span className='text-pink-500'>)</span>; </span>
                    <span>
                        <span className='text-blue-300'>console</span>.
                        <span className='text-yellow-200'>log</span>
                        <span className='text-pink-500'>(</span>
                        <span className='text-blue-400'>users</span>
                        <span className='text-pink-500'>)</span>;
                    </span>
                </code>
            </p>
        </TabsContent>
    )
}

export default JavascriptTab