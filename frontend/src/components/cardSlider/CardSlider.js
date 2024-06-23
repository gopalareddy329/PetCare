import React from 'react'
import Card from './Card/Card'
import Max from '../../assets/max.png'
import Whiskers from '../../assets/Whiskers.png'
import Bun from '../../assets/Bun.png'
import Tweety from '../../assets/Tweety.png'


const CardSlider = () => {
  const data =[
    {"name":"Max","src":Max},
    {"name":"Whiskers","src":Whiskers},
    {"name":"BunBun","src":Bun},
    {"name":"Tweety","src":Tweety},
  ]
  return (
    <div className='flex overflow-scroll gap-5'>
        {data.map((item,index)=>{
          return(<Card data={item} key={index}/>)
        })}
    </div>
  )
}

export default CardSlider