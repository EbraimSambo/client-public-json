import { Loader as LoadIcon } from 'lucide-react'
import React from 'react'

const Loader = ({isPadding}:{isPadding: boolean}) => {
  if(!isPadding) return null
  return (
    <div className='flex items-center justify-center'>
      <LoadIcon className='animate-spin' />
    </div>
  )
}

export default Loader