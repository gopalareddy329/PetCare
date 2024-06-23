import React from 'react';
import Calendar from './Calendar';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'

const Appointment = () => {
  
  return (
    <ContentWrapper className="max-w-[1000px] flex flex-col gap-5">
      <h1 className='font-bold text-[24px]'>Appointment Dates:-</h1>
        <div className='flex justify-center items-center w-full '>
          <Calendar />
        </div>
    </ContentWrapper>
  )
}

export default Appointment