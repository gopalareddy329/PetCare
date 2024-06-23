import React from 'react'
import Button from '../../../components/button/Button'
const Donate = () => {
  return (
        <section className='min-h-[20rem]  flex justify-center items-center'>
            <div className='  text-center w-[15rem]'>
                <h1 className='text-[36px] font-[800] text-center  '>Support Pet Healthcare</h1>
                <p className='text-nowrap'>Your contribution makes a difference!</p>
                <div className='pt-5 w-full font-bold'>
                    <Button className="bg-[var(--green)] p-[10px] px-[15px]" to="/donate">Donate</Button>
                </div>
            </div>
        </section>
    
  )
}

export default Donate