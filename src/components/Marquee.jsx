import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
    
  return (      
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43] text-white'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap'>
            <motion.h1  className='text-[17vw] leading-none font-["Neue Montreal"] font-semibold uppercase -mt-12 -mb-4'   animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          ease: 'linear',
        }}>we are ochi</motion.h1>
        </div>
    </div>
  ) 
}

export default Marquee