import React from 'react'

const Card = ({data}) => {
  return (
    <div className='min-w-[240px] rounded-[8px] '>
      <img alt={data.name} src={data.src}/>
      <h2 className='font-[500] p-2 leading-[24px] text-[18px]'>{data.name}</h2>
    </div>
  )
}

export default Card