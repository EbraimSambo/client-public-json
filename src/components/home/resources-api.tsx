import React from 'react'
import JsonIlustration from './partials/json-ilustration'
import DescResource from './partials/desc-resourse'

const ResourcesApi = () => {
  return (
    <section className='grid grid-cols-2 gap-8 max-[920px]:grid-cols-1'>
      <JsonIlustration />
      <DescResource />
    </section>
  )
}

export default ResourcesApi