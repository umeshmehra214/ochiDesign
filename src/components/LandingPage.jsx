import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";


const LandingPage = () => {
  return (
    <div className='width-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
        {["we create", "eye opening" , "presentations"].map((item, index)=>{
            return(
                <div className='masker'>
                <div className='w-fit flex'>
                  {index === 1 && (<div className='w-[8vw] h-[5.7vw] relative top-[0.8vw] bg-green-500 rounded'></div>)}
                  <h1 className="flex items-center uppercase text-[8vw] h-full leading-[6.5vw] font-['Neue Montreal'] font-semibold tracking-tighter">{item}</h1>
                </div>
                </div>
            )
        })} 
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-28 flex items-center justify-between py-5 px-20'>
          {["for public and private companies", "from the first pitch to IPO"].map((item, index)=>{
            return(
              <p key={index} className='text-md font-light tracking-tight leading-none capitalize'>{item}</p>
            )
          })}
          <div className='start flex items-center gap-4'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full text-md uppercase'>Start the project</div>
            <div className='w-9 h-9 rounded-full border-[2px] border-zinc-400 flex items-center justify-center'>
            <FiArrowUpRight />
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPage