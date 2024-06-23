import React, { useContext, useState } from 'react';
import { addDays, eachDayOfInterval, format, isSameDay } from 'date-fns';
import AuthContext from '../../context/AuthContext';
import { parse } from 'date-fns';
import Button from '../../components/button/Button'


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const {API_BASE_URL} = useContext(AuthContext)
  const [timeSlots, setTimeSlots] = useState([]);
  const allTimeSlots = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM"];



  const bookAppointment = async() =>{
    const parsedTime = parse(selectedSlot, 'h:mm a', new Date());
    const twentyFourHourTime = format(parsedTime, 'HH:mm:ss');
    try{
      const response = await fetch(
        API_BASE_URL+'/book_appointment/',
        {
          method:"post",
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({date:format(selectedDate, 'yyyy-MM-dd'), timing: twentyFourHourTime})
        }
      );
      var res= await response.json()
      await checkAppointment(selectedDate)
      alert("booked")

    }
    catch(err){
      console.error(err)
    }finally{
      setSelectedSlot(null)
    }
    }
 



  const checkAppointment = async (e) =>{
    setSelectedSlot(null)
    
    try{
          const response = await fetch(
            API_BASE_URL+'/check_appointment/',
            {
              method:"post",
              headers: {
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({date:format(e, 'yyyy-MM-dd')})
            }
          );
          var res= await response.json()
          const bookingTimes = res.booking.map(obj => obj.booking);
          const filteredTimmings = allTimeSlots.filter(time => !bookingTimes.includes(time));
      
          setTimeSlots(filteredTimmings)
    }
    catch(err){
        console.log(err)
    }
    
  }

  const handleDateClick = (date) => {
    setSelectedDate(date);
    checkAppointment(date)
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot)
    
  };
  

  const currentMonthDates = eachDayOfInterval({
    start: addDays(new Date(), 1),
    end: addDays(new Date(),29),
  });
  

  return (
    <div className='w-full leading-[50px]'>
      <div className='grid grid-cols-9'>
        {currentMonthDates.map((date) => {
          const isToday = isSameDay(date, new Date());
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          
          return (
            <div key={date.toString()} onClick={() => handleDateClick(date)}
            className={'cursor-pointer'}
              style={{
                cursor: 'pointer',
                border: isSelected ? '2px solid blue' : '1px solid #ddd',
                padding: '8px',
                margin: '4px',
                backgroundColor: isToday ? '#eee' : 'white',
              }}
            >
              <div>{format(date, 'd')}</div>
              
              
            </div>
          );
        })}
      </div>

      {selectedDate && (
        <div>
          <h3>Choose Time: {format(selectedDate, 'EEE, MMM d')}</h3>
          <ul  className='flex flex-wrap gap-4 p-5'>
            {timeSlots?.map((time,index)=>(
              <li onClick={()=>{handleSlotClick(time)}} className='bg-green-200 p-2 rounded-[10px] cursor-pointer' key={index}>{time}</li>
            ))}
            
          </ul>
          <div>
            {selectedSlot && (
              <>
                <strong>Confirm on {format(selectedDate, 'EEE, MMM d')} at {selectedSlot}</strong><br/>
                <p onClick={()=>{bookAppointment()}}><Button className='bg-green-200 p-2 rounded-[10px] cursor-pointer' >Book</Button></p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
