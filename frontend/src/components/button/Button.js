import React from 'react'
import {Link } from "react-router-dom";
const Button = ({children,className,to}) => {
  return (
    <Link className={'p-[8px] rounded-[20px] min-w-fit text-center w-[6rem] ' + className} to={to}>{children}</Link>
  )
}

export default Button