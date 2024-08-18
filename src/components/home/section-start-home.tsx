import React from 'react'
import { Toaster } from '../ui/toaster'
import PartialLeftStart from './partials/partial-left-start'
import PartialRightStart from './partials/partial-right-start'

const SectionStartHome = () => {
    return (
        <section className='grid grid-cols-2 gap-4 max-[920px]:grid-cols-1'>
            <PartialLeftStart />
             <PartialRightStart />
            <Toaster />
        </section>
    )
}

export default SectionStartHome