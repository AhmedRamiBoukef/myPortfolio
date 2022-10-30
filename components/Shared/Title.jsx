import React from 'react'

export const Title = ({title}) => {
  return (
    <div className='block leading-5'>
        <h1 className='mb-2 text-3xl font-semibold'>{title}</h1>
        <div className='marker'></div>
    </div>
  )
}
