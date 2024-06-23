import React from 'react'
import Image from '../../../assets/header.png'
import Button from '../../../components/button/Button'
const Header = () => {
  return (
    <div className='max-w-full mx-auto w-[928px]  min-h-[500px] rounded-[10px]' style={{"backgroundImage":`url(${Image})`,"backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
            
            <div className='flex flex-col justify-end  w-[90%] mx-auto  min-h-[500px] text-[rgb(255,255,255)] '>
                <div className='pb-10 font-bold'>
                    <h1 className='text-[48px] pb-5 max-sm:text-[40px] font-[800] '>Help give all pets their best life</h1>
                    <Button className="bg-[var(--green)] text-black ]  p-[10px] px-[15px]" to="/donate">Donate</Button>
                </div>

            </div>
            

    </div>
  )
}

export default Header