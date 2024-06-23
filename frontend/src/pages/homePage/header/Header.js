import React, { useContext } from 'react'
import Image from '../../../assets/header.png'
import Button from '../../../components/button/Button'
import AuthContext from '../../../context/AuthContext'

const Header = () => {
    const {user}=useContext(AuthContext)
  return (
    
        <div className='max-w-full w-[928px]  min-h-[500px] rounded-[10px]' style={{"backgroundImage":`url(${Image})`,"backgroundSize":"cover","backgroundRepeat":"no-repeat"}}>
            
            <div className='flex flex-col justify-end  w-[90%] mx-auto  min-h-[500px] text-[rgb(255,255,255)] '>
                <div className='pb-10'>
                    <h1 className='text-[48px] max-sm:text-[40px] font-[800] '>Comprehensive Care for Your Furry Friends</h1>
                    <p>Join our community of pet lovers</p>
                    <div className='flex gap-5 font-bold pt-2 text-black'>
                            {user ? (
                                <>
                                            <Button className=" bg-[var(--green)] p-[10px]" to="/bookappointment">Appointment</Button>
                                            <Button className="bg-[var(--linen)] p-[10px]" to="/disease_prediction">Prediction</Button>
                                        
                                </>
                                ) : (
                                <>
                                        <Button className=" bg-[var(--green)]" to="/register">Register</Button>
                                        <Button className="bg-[var(--linen)]" to="/login">Login</Button>
                                </>
                                )}
                    </div>
                </div>
            </div>
            

        </div>
   
  )
}

export default Header