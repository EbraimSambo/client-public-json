import { TabsContent } from '@/components/ui/tabs'
import React from 'react'

const PHPTab = () => {
    const ap = "{"
    const at = "}"
    const phpTagStart = "<"
    const phpTagEnd = ">"
    return (
        <TabsContent value="php">
            <p className='bg-bgCode text-white p-8 rounded-sm shadow-sm mt-4'>
                <code className='flex flex-col gap-1 text-[11.6px]'>
                    <span className='text-blue-500'>{phpTagStart}?php</span>
                    <span className='ml-4'>
                        <span className='text-blue-300'>$url</span> =
                        <span className='text-amber-800'> "https://public-json.com/api/users"</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-blue-300'>$apiKey</span> =
                        <span className='text-amber-800'> "323-32-32-doi32-2323"</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-blue-300'>$ch</span> =
                        <span className='text-yellow-200'> curl_init</span>
                        <span className='text-yellow-500'>()</span>;
                    </span>
                    <span className='ml-4'>
                        <span className='text-yellow-200'>curl_setopt_array</span>
                        <span className='text-yellow-500'>{"("}</span>
                        <span className='text-blue-300'>$ch</span>
                        <span>, </span>
                        <span className='text-pink-500'>{"["}</span>
                    </span>
                    <span className='ml-12'>
                        <span>CURLOPT_URL {"=>"} </span>
                        <span className='text-blue-300'>$url</span>,
                    </span>
                    <span className='ml-12'>
                        <span>CURLOPT_RETURNTRANSFER {"=>"}</span>
                        <span className='text-blue-500'> true</span>,
                    </span>
                    <span className='ml-12'>
                        <span>CURLOPT_HTTPHEADER {"=>"} </span>
                        <span className='text-blue-500'> {"["} </span>
                    </span>
                    <span className='ml-12'>
                        <span className='text-amber-800'> "{"Authorization: Bearer"} </span>
                        <span className='text-blue-300'>$apiKey</span>
                        <span className='text-amber-800'>" </span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-pink-500'>{"]"}</span>
                        <span className='text-yellow-500'>{")"}</span>
                        <span>;</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-blue-300'>$response</span> =
                        <span className='text-yellow-200'>curl_exec</span>
                        <span className='text-yellow-500'>{"("}</span>
                        <span className='text-blue-300'>$ch</span>
                        <span className='text-yellow-500'>{")"}</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-blue-300'>$httpcode</span> =
                        <span className='text-yellow-200'>curl_getinfo</span>
                        <span className='text-yellow-500'>{"("}</span>
                        <span className='text-blue-300'>$ch</span>,
                        <span> CURLINFO_HTTP_CODE</span>
                        <span className='text-yellow-500'>{")"}</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-yellow-200'>curl_close</span>
                        <span className='text-yellow-500'>{"("}</span>
                        <span className='text-blue-300'>$ch</span>
                        <span className='text-yellow-500'>{")"}</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-pink-500'>if</span>
                        <span className='text-yellow-500'> {"("}</span>
                        <span className='text-blue-300'>$httpcode </span>
                        <span>== </span>
                        <span className='text-green-300'>200</span>
                        <span className='text-yellow-500'>{")"} </span>
                        <span className='text-yellow-500'> {"{"} </span>
                    </span>
                    <span className='ml-12'>
                        <span className='text-blue-300'>$data </span>
                        <span> = </span>
                        <span className='text-yellow-200'>json_decode</span>
                        <span className='text-pink-500'>{"("}</span>
                        <span className='text-blue-300'>$response</span>
                        <span>, </span>
                        <span className='text-blue-500'>true</span>
                        <span className='text-pink-500'>{")"}</span>
                        <span>;</span>
                    </span>
                    <span className='ml-12'>
                        <span className='text-yellow-200'>print_r</span>
                        <span className='text-pink-500'>{"("}</span>
                        <span className='text-blue-300'>$data</span>
                        <span className='text-pink-500'>{")"}</span>
                    </span>
                    <span className='ml-4'>
                        <span className='text-yellow-500'> {"}"} </span>
                        <span className='text-pink-500'>else</span>
                        <span className='text-yellow-500'> {"{"} </span>
                    </span>
                    <span className='ml-12'>
                        <span className='text-yellow-200'>echo</span>
                        <span> = </span>
                        <span className='text-amber-800'> "{"Error Request:"} </span>
                        <span className='text-blue-300'> $httpcode</span>
                        <span className='text-amber-800'> " </span>
                    </span>
                    <span className='text-yellow-500 ml-4'> {"}"} </span>
                    <span className='text-blue-500'>?{phpTagEnd}</span>
                </code>
            </p>
        </TabsContent>
    )
}

export default PHPTab