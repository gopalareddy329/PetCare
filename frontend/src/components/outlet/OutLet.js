import React, { useContext, useEffect, useState } from 'react'
import { Outlet,Link } from "react-router-dom";
import ContentWrapper from '../contentWrapper/ContentWrapper';
import Button from '../button/Button'
import AuthContext from "../../context/AuthContext";
import Footer from '../footer/Footer'
import ChatBot from '../chatBot/ChatBot';

const OutLet = () => {
  const {showChatBot,setShowChatBot} = useContext(AuthContext);
  const [bg,setBg]=useState("backdrop-blur-sm")
  const [lastScroll,setLastScroll]=useState(0)
  let {user} = useContext(AuthContext)
  const controlNav = () =>{
    if(window.scrollY > 200){
        if(window.scrollY > lastScroll){
          setBg('translate-y-[-80px]')
        }
        else{
          setBg("bg-white");
        }
    }
    else{
      setBg("backdrop-blur-sm");
    }
    setLastScroll(window.scrollY);

  }
  useEffect(()=>{
    window.addEventListener('scroll',controlNav)
    return()=>window.removeEventListener('scroll',controlNav)
  },[lastScroll])
  return (
    <div>
      <nav className={"p-5  border-b-gray-300 transform   transition-all ease-in-out duration-500  fixed w-full text-[14px] border-b border-b-solid   max-sm:px-2 " + bg}>
          <ContentWrapper className="max-w-[1200px] flex justify-between ">
              <section className="flex gap-5 items-center">
                  <h2 className="text-[18px] font-bold">PetHealth</h2>
                  <div className="gap-2 flex  font-[600]">
                      <Link to="/">Home</Link>
                      <Link to="/">About Us</Link>
                      <Link to="/disease_prediction" className="max-sm:hidden">Prediction</Link>
                  </div>
              </section>
              <section className="flex gap-5 font-bold ">

                {user ? (

                  <>
                  {console.log(user)}
                    <h1 className='items-center flex h-full '>{user?.name}</h1>
                    
                        
                  </>
                ) : (
                  <>
                        <Button className="max-sm:hidden bg-[var(--green)]" to="/register">Register</Button>
                        <Button className="bg-[var(--linen)]" to="/login">Login</Button>
                  </>
                )}

                
                
              </section>
          </ContentWrapper>
      </nav>
      <div className=' pt-20'>
        <Outlet /> 
      </div>
      {showChatBot && <ChatBot/>}
     
      
      <Footer/>

    </div>
    
  )
}

export default OutLet