import React, { useContext } from 'react'
import { SlCalender } from "react-icons/sl";
import { CiSearch,CiHeart,CiChat1 } from "react-icons/ci";
import AuthContext from '../../../context/AuthContext';

const Facilitys = () => {
    const {setshowChatBot} = useContext(AuthContext)
  return (
    <div className='flex gap-2 flex-wrap max-sm:justify-center  max-md:justify-between'>
        
            <div className="md:max-w-[calc(33.33%-10px)]  lg:max-w-[calc(25%-10px)] max-md:w-[49%] max-sm:w-[45%] p-4 w-full text-black bg-white border border-gray-200 rounded-lg shadow">
                <svg className="w-7   mb-3"   viewBox="0 0 20 20">
                    <SlCalender size={20}/>
                </svg>
                <a href="/bookappointment">
                    <h5 className="mb-2 text-[16px] font-[700]  text-gray-900 ">Appointment Booking</h5>
                </a>
                <p className="mb-3 font-[500] text-wrap text-[14px] text-[rgb(161,130,74)]">Schedule a visit easily</p>
            </div>


            <div className="md:max-w-[calc(33.33%-10px)] lg:max-w-[calc(25%-10px)] max-md:w-[49%] max-sm:w-[45%] p-4 w-full text-black bg-white border border-gray-200 rounded-lg shadow">
                <svg className="w-7   mb-3"   viewBox="0 0 20 20">
                    <CiSearch size={20}/>
                </svg>
                <a href="/disease_prediction">
                    <h5  className="mb-2 text-[16px] font-[700]  text-gray-900 ">Symptom Checker</h5>
                </a>
                <p className="mb-3 font-normal text-wrap text-[14px] text-[rgb(161,130,74)]">Check your pet's symptoms</p>
            
            </div>

            <div className="md:max-w-[calc(33.33%-10px)] lg:max-w-[calc(25%-10px)] max-md:w-[49%] max-sm:w-[45%] p-4 w-full text-black bg-white border border-gray-200 rounded-lg shadow">
                <svg className="w-7   mb-3"   viewBox="0 0 20 20">
                    <CiHeart size={20}/>
                </svg>
                <a href="/donate">
                    <h5 className="mb-2 text-[16px] font-[700]  text-gray-900 ">Donate</h5>
                </a>
                <p className="mb-3 font-normal text-wrap text-[14px] text-[rgb(161,130,74)]">Save Animals</p>
            
            </div>

            <div onClick={()=>{setshowChatBot(true)}} className="cursor-pointer md:max-w-[calc(33.33%-10px)] lg:max-w-[calc(25%-10px)] max-md:w-[49%] max-sm:w-[45%] w-full p-4  text-black bg-white border border-gray-200 rounded-lg shadow">
                <svg className="w-7   mb-3"   viewBox="0 0 20 20">
                    <CiChat1 size={20}/>
                </svg>
                <p>
                    <h5 className="mb-2 text-[16px] font-[700]  text-gray-900 ">Chat Bot</h5>
                </p>
                <p className="font-normal text-wrap text-[14px] text-[rgb(161,130,74)]">Learn about prt care</p>
            
            </div>

    </div>
  )
}

export default Facilitys