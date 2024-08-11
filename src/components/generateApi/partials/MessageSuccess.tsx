import React, { FC } from 'react'
import {
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Props {
    keyApi: string
}
const MessageSuccess: FC<Props> = ({ keyApi }) => {
    return (
        <AlertDialogContent >
            <AlertDialogHeader>
                <AlertDialogTitle>Sua chave de Api</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter className='flex items-center gap-4'>
                <AlertDialogDescription className='w-full'>
                    <code className='p-2 w-full rounded-md bg-slate-300'> {keyApi} </code>
                </AlertDialogDescription>
                <AlertDialogAction>Copiar</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}

export default MessageSuccess