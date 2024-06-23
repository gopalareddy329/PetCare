import React, { useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { IoCloseSharp } from "react-icons/io5";
import { FaRobot } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const ChatBot = () => {
    const {setshowChatBot} =useContext(AuthContext)

  return (
    <main className='fixed  right-0  lg:w-[50%] max-sm:w-full  md:w-[80%] max-md:w-[90%] flex  items-center justify-center sm:items-end sm:justify-end   z-[100] bottom-0'>
            <section className=" flex flex-col items-center justify-center sm:items-end sm:justify-end  h-[35rem] w-[80%]  text-gray-800 sm:px-10">
                

                <div className="flex flex-col flex-grow w-full max-w-xl bg-gray-200 shadow-xl rounded-lg overflow-hidden">
                <div className='p-2 flex w-full justify-end'><IoCloseSharp size={30} onClick={()=>{setshowChatBot(false)}}/></div>
                    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                        
                        <div className="flex w-full mt-2 space-x-3 max-w-xs">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full justify-center flex items-center text-blue-700 bg-gray-300"><FaRobot size={30}/></div>
                            <div>
                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>
                                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                        </div>
                        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                            <div>
                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                </div>
                                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                            <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-blue-600"><FaUserCircle size={30}/></div>
                        </div>
                        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                            <div>
                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                    <p className="text-sm">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                            <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-blue-600"><FaUserCircle size={30}/></div>
                        </div>
                        <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full justify-center flex items-center text-blue-700 bg-gray-300"><FaRobot size={30}/></div>
                            <div>
                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                        </div>
                        <div className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full justify-center flex items-center text-blue-700 bg-gray-300"><FaRobot size={30}/></div>
                            <div>
                                <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                </div>
                                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                    <div className="bg-gray-300 p-4">
                        <input className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"/>
                    </div>
                </div>

            </section>
</main>
  )
}

export default ChatBot