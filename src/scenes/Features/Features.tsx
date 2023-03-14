import { MainText } from '@/Components'
import { navbar } from '@/types/types'
import React from 'react'
import { GrowProfit } from '../GrowProfit/GrowProfit'
import Invest from './Invest'
import Statistics from './Statistics'
import {motion} from 'framer-motion'
interface Props{
  setActiveSelection: (value:navbar) => void
}

export const Features = ({setActiveSelection}:Props) => {
  return (
    <motion.section id={navbar.Features} onViewportEnter={()=>setActiveSelection(navbar.Features)} className='bg-secondary-200 w-full mt-20 pt-10'>
        <div className='text-center md:w-[50rem] mx-auto'>
            <MainText>Market sentiments, portfolio, and run the infrastructure of your choice</MainText>
        </div>
        <div className=' max-w-[120rem]  w-10/12 mx-auto'>
            <Invest/>
            <Statistics/>
            <GrowProfit/>
        </div>
    </motion.section>
  )
}
