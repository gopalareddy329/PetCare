import React from 'react'
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className='flex flex-col gap-5 my-10 font-[500] text-[var(--tan)] text-[16px] items-center '>
        <div className='flex gap-5'>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Contact Us</p>
        </div>
        <div className='flex gap-4 items-center'>
          <TiSocialFacebookCircular size={30}/>
          <FaInstagram size={25}/>
          <FaXTwitter size={25}/>

        </div>
        <div>
          <div className="pethealth1">© 2023 PetHealth</div>
        </div>
    </footer>
  )
}

export default Footer