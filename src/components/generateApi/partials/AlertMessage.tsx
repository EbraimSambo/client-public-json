import React, { FC } from 'react'

interface PropsMessage {
    message: React.ReactNode,
    error: boolean
}
const AlertMessage: FC<PropsMessage> = ({ message, error }) => {

    if (!error) return null
    return (
        <div  className='p-2 bg-red-300 text-[12px]'>
            {message}
        </div>
    )
}

export default AlertMessage