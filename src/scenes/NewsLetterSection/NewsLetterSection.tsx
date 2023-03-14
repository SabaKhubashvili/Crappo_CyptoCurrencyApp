import { NewsLetter } from '@/Components'
import { navbar } from '@/types/types'
import React from 'react'
import {motion} from 'framer-motion'
interface Props{
  setActiveSelection: (value:navbar) => void
}

export const NewsLetterSection = ({setActiveSelection}:Props) => {
  return (
    <motion.div id={navbar.Contact} onViewportEnter={()=>setActiveSelection(navbar.Contact)} className='py-20 bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] '>
        <NewsLetter/>
    </motion.div>
  )
}
