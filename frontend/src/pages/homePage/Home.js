import React from 'react'
//import AuthContext from '../../context/AuthContext'
import Header from './header/Header'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import Facilitys from './facilitys/Facilitys'
import CardSlider from '../../components/cardSlider/CardSlider'

import Donate from './dontate/Donate'
const Home = () => {
  //const {user,logoutUser}=useContext(AuthContext)
  return (
    <div >
      <ContentWrapper className="max-w-[1000px] flex flex-col gap-5">
        <Header />
        <Facilitys/>
        <CardSlider />
        <Donate />
        
      </ContentWrapper>
   
      
    </div>
  )
}

export default Home