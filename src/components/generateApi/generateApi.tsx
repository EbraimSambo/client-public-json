"use client"
import React from 'react'
import { Button } from '../ui/button'
import { KeyIcon} from 'lucide-react'
import { useGenerateKeyApi } from '@/hooks/use-generate-key-api'
import { AlertDialog, AlertDialogTrigger } from '../ui/alert-dialog'
import MessageSuccess from './partials/MessageSuccess'
import AlertMessage from './partials/AlertMessage'
import Loader from '../bases/loader'

const GenerateApi = () => {
  const { 
    sendData,
     handleSubmit,
      isPadding,
      response,
      success,
      errorMessage
     } = useGenerateKeyApi()
  return (
    <AlertDialog>
      <div className='flex items-center justify-center h-96 text-center'>
        <form onSubmit={handleSubmit(sendData)} className='border rounded-sm flex flex-col gap-4 p-4 shadow-2xl'>
            <Loader isPadding={isPadding} />
            <AlertMessage error={errorMessage?.error!} message={errorMessage?.message}  />
          <h2>Gerar Chave para consumir api</h2>
          <p><b>Nota:</b> Esta chave de api, tem duração de 3 meses</p>
          <AlertDialogTrigger asChild>
            <Button disabled={isPadding} type='submit' className='flex gap-1 items-center'>
              <KeyIcon />
              <span>Gerar Chave</span>
            </Button>
          </AlertDialogTrigger>
        </form>
      </div>
      {success && !isPadding && <MessageSuccess keyApi={response.keyApi} />}
      
    </AlertDialog>
  )
}

export default GenerateApi