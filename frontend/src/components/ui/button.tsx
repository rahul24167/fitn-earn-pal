import React from 'react'
interface ButtonProps {
  onClick: () => void; 
  children: React.ReactNode;
}

const Button= ({onClick, children }:ButtonProps) => {
  return (
    <div className=" flex flex-row justify-center items-center w-[192px] h-12 rounded-full border-none bg-primary-orange">
    <button className= "flex items-center justify-center text-[#E5E5E5] font-lato text-lg font-semibold w-[189px] h-[45px] rounded-full bg-[#171717] bg-nav-back border-none" onClick={onClick}>
       {children}
    </button>
    </div>
    
  )
}

export default Button